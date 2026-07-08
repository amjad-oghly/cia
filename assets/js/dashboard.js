protectPage();

var username = getCurrentUser();
document.getElementById('welcomeUser').textContent = 'مرحباً، ' + username;
document.getElementById('orgDesc').textContent = companyInfo.description;

document.getElementById('statEmployees').textContent = companyInfo.employeesCount();
document.getElementById('statProtocols').textContent = companyInfo.protocolsCount();

var branchesGrid = document.getElementById('branchesGrid');

function getBranchUrl(id) {
  return 'branch.html?id=' + id;
}

branchList.forEach(function(id) {
  var b = branches[id];
  var card = document.createElement('a');
  card.className = 'branch-card';
  card.href = getBranchUrl(id);
  card.innerHTML =
    '<span class="flag">' + b.flag + '</span>' +
    '<div class="branch-name">' + b.name + '</div>' +
    '<span class="branch-type ' + b.type + '">' + (b.type === 'main' ? 'المركز الرئيسي' : 'فرع إقليمي') + '</span>' +
    '<div class="branch-desc">' + b.info + '</div>';
  branchesGrid.appendChild(card);
});

// ---- بيانات الخريطة ----
var svgNS = 'http://www.w3.org/2000/svg';
var worldMap = document.getElementById('worldMap');

var countryToBranch = {
  US: 'usa', SY: 'syria',
  NL: 'netherlands', EG: 'egypt'
};

var markerColors = {
  usa: '#3b82f6', syria: '#f59e0b',
  netherlands: '#10b981', egypt: '#ef4444'
};

var markerList = [
  { id: 'usa',  geo: [-77.0, 38.9],  name: 'الولايات المتحدة', flag: '🇺🇸', desc: 'المقر الرئيسي', code: 'US' },
  { id: 'syria', geo: [36.3, 33.5],  name: 'سوريا',            flag: '🇸🇾', desc: 'الفرع الإقليمي - الشرق الأوسط', code: 'SY' },
  { id: 'netherlands', geo: [4.89, 52.37], name: 'هولندا', flag: '🇳🇱', desc: 'الفرع الإقليمي - أوروبا', code: 'NL' },
  { id: 'egypt', geo: [31.24, 30.04], name: 'مصر',             flag: '🇪🇬', desc: 'الفرع الإقليمي - شمال أفريقيا', code: 'EG' }
];

// تحويل إحداثيات جغرافية (lng/lat) إلى SVG x/y (Mercator بسيط)
function geoToXY(lng, lat) {
  var x = (lng + 180) * (800 / 360);
  var y = (500 / 2) - (500 * Math.log(Math.tan((Math.PI / 4) + (lat * Math.PI / 360))) / (2 * Math.PI));
  return { x: x, y: y };
}

// ---- بناء القارات (مسارات مبسطة) ----
var continents = [
  { id: 'north-america', d: 'M80,120 Q120,60 200,65 Q250,70 270,90 Q300,110 310,140 Q315,170 290,200 Q260,220 200,225 Q140,230 100,210 Q70,190 75,160 Z', name: 'أمريكا الشمالية' },
  { id: 'south-america', d: 'M250,225 Q280,215 310,225 Q340,245 330,290 Q315,340 290,355 Q260,345 245,310 Q235,275 240,250 Z', name: 'أمريكا الجنوبية' },
  { id: 'europe', d: 'M380,90 Q410,70 450,75 Q480,80 490,105 Q495,135 480,160 Q460,175 430,180 Q400,178 385,160 Q370,140 375,115 Z', name: 'أوروبا' },
  { id: 'africa', d: 'M385,195 Q420,180 455,190 Q480,210 475,260 Q465,310 440,345 Q415,355 395,340 Q375,315 370,275 Q365,235 375,210 Z', name: 'أفريقيا' },
  { id: 'asia', d: 'M490,80 Q560,55 640,65 Q700,80 720,115 Q730,155 710,190 Q680,215 630,225 Q580,230 540,215 Q510,200 495,170 Q485,140 488,110 Z', name: 'آسيا' },
  { id: 'australia', d: 'M640,270 Q670,260 700,265 Q725,280 715,305 Q695,325 665,325 Q640,318 630,295 Z', name: 'أستراليا' },
  { id: 'greenland', d: 'M290,50 Q310,40 330,45 Q345,55 340,75 Q330,90 310,92 Q295,88 285,70 Z', name: 'جرينلاند' },
  { id: 'antarctica', d: 'M100,460 Q200,440 400,435 Q600,440 700,460 Q600,480 400,485 Q200,480 100,460 Z', name: 'أنتاركتيكا' }
];

// ---- مسارات الدول الأربعة بشكل دقيق ----
var countryPaths = {
  US: { d: 'M120,110 Q150,90 180,92 Q200,95 210,105 Q220,120 225,140 Q230,160 220,180 Q210,195 190,200 Q170,202 155,195 Q140,185 135,170 Q125,150 120,130 Z', name: 'الولايات المتحدة' },
  SY: { d: 'M428,188 Q436,184 442,186 Q448,190 447,198 Q445,205 438,208 Q431,207 427,202 Q424,196 426,190 Z', name: 'سوريا' },
  NL: { d: 'M408,103 Q414,100 420,102 Q424,107 422,112 Q418,116 412,115 Q407,112 407,107 Z', name: 'هولندا' },
  EG: { d: 'M415,230 Q422,225 430,227 Q436,233 435,240 Q432,248 425,250 Q418,249 414,243 Q412,236 414,231 Z', name: 'مصر' }
};

// ---- دوال مساعدة ----
function createElem(tag, attrs) {
  var el = document.createElementNS(svgNS, tag);
  for (var k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}

// ---- بناء الخريطة ----
function buildMap() {
  // 1. القارات
  continents.forEach(function(c) {
    var path = createElem('path', {
      d: c.d, class: 'land'
    });
    path.setAttribute('data-name', c.name);
    worldMap.appendChild(path);

    // Tooltip
    path.addEventListener('mouseenter', function(e) {
      showTooltip(e, c.name);
    });
    path.addEventListener('mousemove', function(e) {
      moveTooltip(e);
    });
    path.addEventListener('mouseleave', hideTooltip);
  });

  // 2. الدول الأربعة
  for (var code in countryPaths) {
    var data = countryPaths[code];
    var branchId = countryToBranch[code];
    var color = markerColors[branchId];

    var path = createElem('path', {
      d: data.d,
      class: 'target-country',
      fill: '#0f2847',
      stroke: color,
      'data-code': code,
      'data-name': data.name,
      'data-branch': branchId
    });
    worldMap.appendChild(path);

    // إضافة وهج (glow) عبر SVG filter
    path.style.color = color;

    path.addEventListener('click', function() {
      var bid = this.getAttribute('data-branch');
      if (bid) window.location.href = getBranchUrl(bid);
    });

    path.addEventListener('mouseenter', function(e) {
      showTooltip(e, this.getAttribute('data-name'));
    });
    path.addEventListener('mousemove', function(e) {
      moveTooltip(e);
    });
    path.addEventListener('mouseleave', hideTooltip);
  }

  // 3. تسميات دول إضافية
  var countryLabels = [
    { code: 'CA', name: '🇨🇦', x: 170, y: 75 },
    { code: 'BR', name: '🇧🇷', x: 280, y: 285 },
    { code: 'GB', name: '🇬🇧', x: 395, y: 97 },
    { code: 'FR', name: '🇫🇷', x: 405, y: 115 },
    { code: 'DE', name: '🇩🇪', x: 420, y: 105 },
    { code: 'RU', name: '🇷🇺', x: 570, y: 65 },
    { code: 'CN', name: '🇨🇳', x: 600, y: 145 },
    { code: 'IN', name: '🇮🇳', x: 540, y: 175 },
    { code: 'AU', name: '🇦🇺', x: 670, y: 295 },
    { code: 'ZA', name: '🇿🇦', x: 420, y: 330 },
    { code: 'JP', name: '🇯🇵', x: 650, y: 130 }
  ];

  countryLabels.forEach(function(cl) {
    var text = createElem('text', {
      x: cl.x, y: cl.y, class: 'country-label'
    });
    text.textContent = cl.name;
    worldMap.appendChild(text);
  });

  // 4. خطوط الربط من أمريكا للفروع
  var usaXY = geoToXY(-77.0, 38.9);
  markerList.forEach(function(m) {
    if (m.id === 'usa') return;
    var p = geoToXY(m.geo[0], m.geo[1]);
    var color = markerColors[m.id];

    var line = createElem('path', {
      d: 'M' + usaXY.x + ',' + usaXY.y + ' Q' + ((usaXY.x + p.x) / 2) + ',' + ((usaXY.y + p.y) / 2 - 15) + ' ' + p.x + ',' + p.y,
      class: 'conn-line',
      stroke: color
    });
    worldMap.appendChild(line);
  });

  // 5. نقاط الفروع مع تأثير نبض
  markerList.forEach(function(m) {
    var p = geoToXY(m.geo[0], m.geo[1]);
    var color = markerColors[m.id];
    var hex = parseInt(color.replace('#', ''), 16);

    // الهالة الخارجية النابضة
    var glow1 = createElem('circle', {
      cx: p.x, cy: p.y, r: 10,
      fill: color, 'fill-opacity': '0.25',
      class: 'branch-glow'
    });
    worldMap.appendChild(glow1);

    // الهالة الثانية (معاكسة)
    var glow2 = createElem('circle', {
      cx: p.x, cy: p.y, r: 7,
      fill: color, 'fill-opacity': '0.35',
      class: 'branch-glow2'
    });
    worldMap.appendChild(glow2);

    // النقطة المركزية
    var dot = createElem('circle', {
      cx: p.x, cy: p.y, r: 6,
      fill: color, stroke: '#ffffff', 'stroke-width': '2.5',
      class: 'branch-dot',
      'data-branch': m.id,
      'data-name': m.flag + ' ' + m.name
    });
    worldMap.appendChild(dot);

    dot.addEventListener('click', function() {
      var bid = this.getAttribute('data-branch');
      if (bid) window.location.href = getBranchUrl(bid);
    });

    dot.addEventListener('mouseenter', function(e) {
      showTooltip(e, this.getAttribute('data-name'));
    });
    dot.addEventListener('mousemove', function(e) {
      moveTooltip(e);
    });
    dot.addEventListener('mouseleave', hideTooltip);

    // تسمية الفرع
    var bgRect = createElem('rect', {
      x: p.x - 28, y: p.y + 10, width: 56, height: 22, rx: 4,
      fill: '#111827', 'fill-opacity': '0.85',
      stroke: '#1f2937', 'stroke-width': '1',
      class: 'branch-label-bg'
    });
    worldMap.appendChild(bgRect);

    var label = createElem('text', {
      x: p.x, y: p.y + 26, class: 'branch-label-text'
    });
    label.textContent = m.flag + ' ' + m.name;
    worldMap.appendChild(label);
  });

  // 6. وسيلة إيضاح
  var legendHtml = '';
  var legendData = [
    ['#3b82f6', '🇺🇸', 'المقر الرئيسي - أمريكا'],
    ['#f59e0b', '🇸🇾', 'فرع سوريا'],
    ['#10b981', '🇳🇱', 'فرع هولندا'],
    ['#ef4444', '🇪🇬', 'فرع مصر']
  ];
  legendData.forEach(function(item) {
    legendHtml +=
      '<div class="map-legend-item">' +
        '<div class="map-legend-dot" style="background:' + item[0] + '"></div>' +
        '<span>' + item[1] + ' ' + item[2] + '</span>' +
      '</div>';
  });
  document.getElementById('mapLegend').innerHTML = legendHtml;
}

// ---- Tooltip ----
var tooltipEl = document.getElementById('mapTooltip');

function showTooltip(e, text) {
  tooltipEl.textContent = text;
  tooltipEl.style.display = 'block';
  positionTooltip(e);
}

function moveTooltip(e) {
  positionTooltip(e);
}

function positionTooltip(e) {
  var wrapper = document.getElementById('worldMapWrapper');
  var rect = wrapper.getBoundingClientRect();
  var x = e.clientX - rect.left + 12;
  var y = e.clientY - rect.top - 10;
  tooltipEl.style.left = x + 'px';
  tooltipEl.style.top = y + 'px';
}

function hideTooltip() {
  tooltipEl.style.display = 'none';
}

// ---- Pan & Zoom للخريطة ----
(function() {
  var wrapper = document.getElementById('worldMapWrapper');
  var svg = worldMap;
  var isPanning = false;
  var startX, startY;
  var viewBox = { x: 0, y: 0, w: 800, h: 500 };

  svg.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
      isPanning = true;
      startX = e.clientX;
      startY = e.clientY;
    }
  });

  window.addEventListener('mousemove', function(e) {
    if (!isPanning) return;
    var dx = e.clientX - startX;
    var dy = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;
    var scale = svg.clientWidth / 800;
    viewBox.x -= dx / scale;
    viewBox.y -= dy / scale;
    svg.setAttribute('viewBox', viewBox.x + ' ' + viewBox.y + ' ' + viewBox.w + ' ' + viewBox.h);
  });

  window.addEventListener('mouseup', function() {
    isPanning = false;
  });

  // Zoom بالعجلة
  wrapper.addEventListener('wheel', function(e) {
    e.preventDefault();
    var dir = e.deltaY > 0 ? 1.1 : 0.9;
    var newW = Math.min(Math.max(viewBox.w * dir, 200), 1600);
    var newH = Math.min(Math.max(viewBox.h * dir, 125), 1000);
    // Center zoom on mouse position
    var rect = svg.getBoundingClientRect();
    var mx = (e.clientX - rect.left) / rect.width;
    var my = (e.clientY - rect.top) / rect.height;
    viewBox.x = viewBox.x + mx * (viewBox.w - newW);
    viewBox.y = viewBox.y + my * (viewBox.h - newH);
    viewBox.w = newW;
    viewBox.h = newH;
    svg.setAttribute('viewBox', viewBox.x + ' ' + viewBox.y + ' ' + viewBox.w + ' ' + viewBox.h);
  }, { passive: false });

  // Rest بواسطة双击
  svg.addEventListener('dblclick', function() {
    viewBox.x = 0; viewBox.y = 0; viewBox.w = 800; viewBox.h = 500;
    svg.setAttribute('viewBox', '0 0 800 500');
  });
})();

buildMap();
