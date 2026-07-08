protectPage();

const username = getCurrentUser();
document.getElementById('welcomeUser').textContent = 'مرحباً، ' + username;

const params = new URLSearchParams(window.location.search);
const branchId = params.get('id') || 'usa';
const branch = branches[branchId];

if (!branch) {
  window.location.href = 'dashboard.html';
}

const avatarColors = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
  '#8b5cf6', '#ec4899', '#14b8a6', '#f97316',
  '#6366f1', '#84cc16', '#06b6d4', '#d946ef'
];

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

function getInitials(name) {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

// ---- Render Header ----
document.getElementById('branchNavTitle').textContent = '| ' + branch.name;
document.getElementById('branchTitle').innerHTML = '<span class="flag">' + branch.flag + '</span> ' + branch.name + ' (' + branch.nameEn + ')';
document.getElementById('branchSubtitle').textContent = branch.building.name;
document.getElementById('branchInfo').textContent = branch.info;

// ---- Build Sidebar Map ----
function buildSidebarMap() {
  const svg = document.getElementById('sidebarMap');
  const ns = 'http://www.w3.org/2000/svg';

  const continents = [
    { d: 'M50,120 Q100,80 180,90 Q220,100 230,140 Q240,180 200,200 Q150,210 100,200 Q60,190 50,160 Z' },
    { d: 'M180,210 Q200,200 220,210 Q240,240 230,280 Q210,320 190,330 Q170,320 160,280 Q155,240 180,210 Z' },
    { d: 'M260,100 Q290,80 320,90 Q340,100 340,130 Q330,160 300,170 Q270,165 260,140 Z' },
    { d: 'M270,180 Q300,170 330,180 Q350,210 340,260 Q320,300 290,310 Q270,300 260,260 Q255,220 270,180 Z' },
    { d: 'M340,90 Q400,70 480,80 Q530,100 540,140 Q530,180 500,200 Q450,210 400,200 Q360,190 340,160 Z' },
    { d: 'M480,250 Q510,240 540,250 Q560,270 550,290 Q530,300 500,295 Q475,285 475,265 Z' }
  ];

  continents.forEach(function(c) {
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', c.d);
    path.setAttribute('class', 'country');
    svg.appendChild(path);
  });

  branchList.forEach(function(id) {
    const b = branches[id];
    const isActive = id === branchId;
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', b.svgX);
    circle.setAttribute('cy', b.svgY);
    circle.setAttribute('r', isActive ? 8 : 5);
    circle.setAttribute('class', 'branch-marker');
    circle.setAttribute('fill', isActive ? '#60a5fa' : '#4b5563');
    svg.appendChild(circle);
    circle.addEventListener('click', function() {
      window.location.href = 'branch.html?id=' + id;
    });
  });
}

buildSidebarMap();

// ---- Build Sidebar Branch List ----
function buildSidebarList() {
  const container = document.getElementById('sidebarBranches');
  branchList.forEach(function(id) {
    const b = branches[id];
    const item = document.createElement('a');
    item.className = 'sidebar-branch-item' + (id === branchId ? ' active' : '');
    item.href = 'branch.html?id=' + id;
    item.innerHTML =
      '<span class="flag">' + b.flag + '</span>' +
      '<span>' + b.name + '</span>' +
      '<span class="badge ' + b.type + '">' + (b.type === 'main' ? 'رئيسي' : 'فرعي') + '</span>';
    container.appendChild(item);
  });
}

buildSidebarList();

// ---- Render Floors ----
function renderFloors() {
  const container = document.getElementById('floorsContainer');
  branch.building.floors.forEach(function(floor, idx) {
    const floorCard = document.createElement('div');
    floorCard.className = 'floor-card';

    const roomCount = floor.rooms.length;
    let empCount = 0;
    floor.rooms.forEach(function(r) { empCount += r.employees.length; });

    floorCard.innerHTML =
      '<div class="floor-header" onclick="toggleFloor(this)">' +
        '<span class="floor-icon">🏢</span>' +
        '<span class="floor-level">الطابق ' + floor.level + '</span>' +
        '<span class="floor-name">' + floor.name + '</span>' +
        '<span style="font-size:12px;color:#6b7280;">' + roomCount + ' غرف | ' + empCount + ' موظف</span>' +
        '<span class="floor-toggle open">▼</span>' +
      '</div>' +
      '<div class="floor-body" id="floorBody_' + idx + '"></div>';

    container.appendChild(floorCard);
    renderRooms(idx, floor.rooms);
  });
}

function toggleFloor(el) {
  const body = el.nextElementSibling;
  const toggle = el.querySelector('.floor-toggle');
  if (body.style.display === 'none') {
    body.style.display = 'grid';
    toggle.classList.add('open');
  } else {
    body.style.display = 'none';
    toggle.classList.remove('open');
  }
}

function renderRooms(floorIdx, rooms) {
  const container = document.getElementById('floorBody_' + floorIdx);
  rooms.forEach(function(room) {
    const roomCard = document.createElement('div');
    roomCard.className = 'room-card';

    let empHtml = '';
    room.employees.forEach(function(emp) {
      const color = getAvatarColor(emp.name);
      const initials = getInitials(emp.name);
      empHtml +=
        '<div class="employee-item" onclick="openModal(\'' + emp.id + '\',\'' + room.department + '\')">' +
          '<div class="employee-avatar" style="background:' + color + '">' + initials + '</div>' +
          '<div class="employee-info">' +
            '<div class="emp-name">' + emp.name + '</div>' +
            '<div class="emp-rank">' + emp.rank + '</div>' +
          '</div>' +
          '<button class="employee-detail-btn" onclick="event.stopPropagation();openModal(\'' + emp.id + '\',\'' + room.department + '\')">👤</button>' +
        '</div>';
    });

    roomCard.innerHTML =
      '<div class="room-title">' +
        '<span class="room-id">' + room.id + '</span>' +
        '<span class="room-name">' + room.name + '</span>' +
        '<span class="room-dept">' + room.department + '</span>' +
      '</div>' +
      '<div class="employees-list">' + empHtml + '</div>';

    container.appendChild(roomCard);
  });
}

renderFloors();

// ---- Employee Modal ----
var currentBranchId = branchId;

function openModal(empId, dept) {
  const branchData = branches[currentBranchId];
  let emp = null;
  for (var f = 0; f < branchData.building.floors.length; f++) {
    for (var r = 0; r < branchData.building.floors[f].rooms.length; r++) {
      var room = branchData.building.floors[f].rooms[r];
      for (var e = 0; e < room.employees.length; e++) {
        if (room.employees[e].id === empId) {
          emp = room.employees[e];
          break;
        }
      }
      if (emp) break;
    }
    if (emp) break;
  }

  if (!emp) return;

  const color = getAvatarColor(emp.name);
  const initials = getInitials(emp.name);

  document.getElementById('modalAvatar').style.background = color;
  document.getElementById('modalAvatar').textContent = initials;
  document.getElementById('modalName').textContent = emp.name;
  document.getElementById('modalRank').textContent = emp.rank + ' | ' + dept;

  var detailsHtml =
    '<div class="modal-detail-row"><span class="detail-icon">🏢</span><span class="detail-label">القسم</span><span class="detail-value">' + dept + '</span></div>' +
    '<div class="modal-detail-row"><span class="detail-icon">🎯</span><span class="detail-label">التخصص</span><span class="detail-value">' + emp.specialty + '</span></div>' +
    '<div class="modal-detail-row"><span class="detail-icon">📧</span><span class="detail-label">البريد</span><span class="detail-value">' + emp.email + '</span></div>' +
    '<div class="modal-detail-row"><span class="detail-icon">📞</span><span class="detail-label">الهاتف</span><span class="detail-value">' + emp.phone + '</span></div>';

  document.getElementById('modalDetails').innerHTML = detailsHtml;
  document.getElementById('employeeModal').classList.add('open');
}

function closeModal() {
  document.getElementById('employeeModal').classList.remove('open');
}

document.getElementById('employeeModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// ---- Render Protocols ----
function renderProtocols() {
  const grid = document.getElementById('protocolsGrid');
  branch.protocols.forEach(function(p) {
    const card = document.createElement('div');
    card.className = 'protocol-card';
    card.innerHTML =
      '<div class="protocol-name">' + p.name + '</div>' +
      '<div class="protocol-port">المنفذ: ' + p.port + '</div>' +
      '<div class="protocol-usage">' + p.usage + '</div>' +
      '<span class="protocol-type ' + p.type + '">' + getTypeLabel(p.type) + '</span>';
    grid.appendChild(card);
  });
}

function getTypeLabel(type) {
  const labels = {
    encryption: 'تشفير',
    remote: 'إدارة عن بعد',
    security: 'أمان',
    monitoring: 'مراقبة',
    tunnel: 'نفق',
    web: 'ويب'
  };
  return labels[type] || type;
}

renderProtocols();
