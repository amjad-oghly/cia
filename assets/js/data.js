const branches = {
  usa: {
    id: 'usa',
    name: 'الولايات المتحدة',
    nameEn: 'United States',
    flag: '🇺🇸',
    type: 'main',
    info: 'المقر الرئيسي للوكالة - يضم مركز القيادة والسيطرة العالمية وأقسام الاستخبارات والتقنية.',
    svgX: 220, svgY: 180,
          building: {
      name: 'مقر الوكالة الرئيسي',
      floors: [
        {
          level: 0,
          name: 'القبو (البنية التحتية)',
          rooms: [
            {
              id: 'B01', name: 'غرفة السيرفرات الرئيسية', department: 'البنية التحتية',
              employees: [
                { id: 'u0011', name: 'روبرت ديفيس', rank: 'مهندس أنظمة أول', photo: '', specialty: 'إدارة الخوادم والمراكز', email: 'r.davis@cia.gov', phone: '+1-202-555-0201' },
                { id: 'u0012', name: 'باتريشيا غارسيا', rank: 'مسؤول قواعد بيانات', photo: '', specialty: 'Oracle / SQL / NoSQL', email: 'p.garcia@cia.gov', phone: '+1-202-555-0202' },
                { id: 'u0013', name: 'توماس مارتينيز', rank: 'فني صيانة أجهزة', photo: '', specialty: 'صيانة الخوادم والتخزين', email: 't.martinez@cia.gov', phone: '+1-202-555-0203' }
              ]
            }
          ]
        },
        {
          level: 1,
          name: 'الطابق الأرضي',
          rooms: [
            {
              id: '101', name: 'قسم تقنية المعلومات (IT)', department: 'تقنية المعلومات',
              employees: [
                { id: 'u1011', name: 'تشارلز روبنسون', rank: 'مدير تقنية المعلومات', photo: '', specialty: 'إدارة الشبكات والأنظمة', email: 'c.robinson@cia.gov', phone: '+1-202-555-0204' },
                { id: 'u1012', name: 'جينيفر كلارك', rank: 'مهندس شبكات', photo: '', specialty: 'Cisco / BGP / SD-WAN', email: 'j.clark@cia.gov', phone: '+1-202-555-0205' },
                { id: 'u1013', name: 'كريستوفر لويس', rank: 'محلل حركة بيانات', photo: '', specialty: 'مراقبة الشبكة وتحليل الأداء', email: 'c.lewis@cia.gov', phone: '+1-202-555-0206' },
                { id: 'u1014', name: 'أماندا ووكر', rank: 'كبير مبرمجي النظم', photo: '', specialty: 'Full Stack / Python / Java', email: 'a.walker@cia.gov', phone: '+1-202-555-0207' }
              ]
            },
            {
              id: '102', name: 'قسم التدريب والتطوير (TD)', department: 'التدريب والتطوير',
              employees: [
                { id: 'u1021', name: 'سامي يوسف', rank: 'مدير التدريب والتطوير', photo: '', specialty: 'تطوير الكوادر البشرية', email: 's.youssef@cia.gov', phone: '+1-202-555-0301' },
                { id: 'u1022', name: 'نورة السعيد', rank: 'أخصائية تدريب', photo: '', specialty: 'تصميم البرامج التدريبية', email: 'n.alsaeed@cia.gov', phone: '+1-202-555-0302' },
                { id: 'u1023', name: 'فهد العتيبي', rank: 'محلل أداء', photo: '', specialty: 'قياس الأداء والتقييم', email: 'f.alotaibi@cia.gov', phone: '+1-202-555-0303' }
              ]
            }
          ]
        },
        {
          level: 2,
          name: 'الطابق الأول',
          rooms: [
            {
              id: '201', name: 'قسم المالية', department: 'المالية',
              employees: [
                { id: 'u2011', name: 'مايكل براون', rank: 'مدير المالية', photo: '', specialty: 'الإدارة المالية والميزانيات', email: 'm.brown@cia.gov', phone: '+1-202-555-0401' },
                { id: 'u2012', name: 'سارة جونسون', rank: 'محاسب أول', photo: '', specialty: 'المحاسبة والتدقيق', email: 's.johnson@cia.gov', phone: '+1-202-555-0402' },
                { id: 'u2013', name: 'جون سميث', rank: 'محلل مالي', photo: '', specialty: 'تحليل التكاليف والميزانيات', email: 'j.smith@cia.gov', phone: '+1-202-555-0403' }
              ]
            },
            {
              id: '202', name: 'قسم الموارد البشرية (HR)', department: 'الموارد البشرية',
              employees: [
                { id: 'u2021', name: 'إيما ويلسون', rank: 'مديرة الموارد البشرية', photo: '', specialty: 'إدارة الموارد البشرية', email: 'e.wilson@cia.gov', phone: '+1-202-555-0404' },
                { id: 'u2022', name: 'ليندا أندرسون', rank: 'أخصائية توظيف', photo: '', specialty: 'التوظيف والاستقطاب', email: 'l.anderson@cia.gov', phone: '+1-202-555-0405' },
                { id: 'u2023', name: 'براين هال', rank: 'منسق شؤون موظفين', photo: '', specialty: 'شؤون الموظفين والرواتب', email: 'b.hall@cia.gov', phone: '+1-202-555-0406' }
              ]
            }
          ]
        },
        {
          level: 3,
          name: 'الطابق الثاني',
          rooms: [
            {
              id: '301', name: 'قسم الأمن السيبراني', department: 'الأمن السيبراني',
              employees: [
                { id: 'u3011', name: 'ديانا روبرتس', rank: 'مدير الأمن السيبراني', photo: '', specialty: 'إدارة أمن المعلومات', email: 'd.roberts@cia.gov', phone: '+1-202-555-0501' },
                { id: 'u3012', name: 'إدوارد تورنر', rank: 'خبير اختراق أخلاقي', photo: '', specialty: 'اختبار الاختراق والثغرات', email: 'e.turner@cia.gov', phone: '+1-202-555-0502' },
                { id: 'u3013', name: 'ميشيل فيليبس', rank: 'محللة أمن سيبراني', photo: '', specialty: 'تحليل الهجمات والاستجابة', email: 'm.phillips@cia.gov', phone: '+1-202-555-0503' },
                { id: 'u3014', name: 'ناتالي يونغ', rank: 'مهندسة جدران نارية', photo: '', specialty: 'Firewall / IDS / IPS', email: 'n.young@cia.gov', phone: '+1-202-555-0504' }
              ]
            },
            {
              id: '302', name: 'قسم العمليات الميدانية', department: 'العمليات الميدانية',
              employees: [
                { id: 'u3021', name: 'جورج سكوت', rank: 'قائد العمليات الميدانية', photo: '', specialty: 'التخطيط والتنفيذ الميداني', email: 'g.scott@cia.gov', phone: '+1-202-555-0505' },
                { id: 'u3022', name: 'هيلين آدامز', rank: 'ضابط عمليات', photo: '', specialty: 'التجنيد والتعامل مع المصادر', email: 'h.adams@cia.gov', phone: '+1-202-555-0506' },
                { id: 'u3023', name: 'فرانك باكر', rank: 'ضابط عمليات ميدانية', photo: '', specialty: 'مكافحة التجسس', email: 'f.baker@cia.gov', phone: '+1-202-555-0507' }
              ]
            },
            {
              id: '303', name: 'قسم التحليل الاستخباراتي', department: 'التحليل الاستخباراتي',
              employees: [
                { id: 'u3031', name: 'وليام كينغ', rank: 'محلل استخبارات أول', photo: '', specialty: 'تحليل البيانات الاستخباراتية', email: 'w.king@cia.gov', phone: '+1-202-555-0508' },
                { id: 'u3032', name: 'إليزابيث رايت', rank: 'محللة استخبارات', photo: '', specialty: 'استخبارات المصادر المفتوحة (OSINT)', email: 'e.wright@cia.gov', phone: '+1-202-555-0509' },
                { id: 'u3033', name: 'دانيال لوبيز', rank: 'باحث استخباراتي', photo: '', specialty: 'شؤون الشرق الأوسط', email: 'd.lopez@cia.gov', phone: '+1-202-555-0510' },
                { id: 'u3034', name: 'كاثرين هيل', rank: 'مترجمة استخباراتية', photo: '', specialty: 'الترجمة (العربية / الفارسية / الروسية)', email: 'k.hill@cia.gov', phone: '+1-202-555-0511' }
              ]
            }
          ]
        },
        {
          level: 4,
          name: 'الطابق الثالث (الإدارة العليا)',
          rooms: [
            {
              id: '401', name: 'مكتب الإدارة العليا', department: 'الإدارة العليا',
              employees: [
                { id: 'u4011', name: 'جيمس هـ. موريسون', rank: 'رئيس وكالة الاستخبارات المركزية (CIA)', photo: '', specialty: 'القيادة الاستراتيجية وإدارة الأمن القومي', email: 'jh.morrison@cia.gov', phone: '+1-202-555-0001' },
                { id: 'u4012', name: 'كاثرين م. بينيت', rank: 'نائب رئيس الوكالة', photo: '', specialty: 'إدارة العمليات الاستخباراتية', email: 'km.bennett@cia.gov', phone: '+1-202-555-0002' },
                { id: 'u4013', name: 'ريتشارد ل. هاربر', rank: 'مدير العمليات', photo: '', specialty: 'تنسيق الفروع والعمليات الخارجية', email: 'rl.harper@cia.gov', phone: '+1-202-555-0003' }
              ]
            }
          ]
        }
      ]
    },
    protocols: [
      { name: 'IPSec (IKEv2)', port: '500/4500', usage: 'VPN آمن بين الفروع', type: 'encryption' },
      { name: 'SSH (OpenSSH)', port: '22', usage: 'إدارة الأجهزة عن بعد', type: 'remote' },
      { name: 'TLS 1.3', port: '443', usage: 'اتصالات مشفرة للويب والبريد', type: 'encryption' },
      { name: 'DNSSEC', port: '53', usage: 'تأمين استعلامات DNS', type: 'security' },
      { name: 'SNMPv3', port: '161', usage: 'مراقبة أجهزة الشبكة', type: 'monitoring' }
    ]
  },

  syria: {
    id: 'syria',
    name: 'سوريا',
    nameEn: 'Syria',
    flag: '🇸🇾',
    type: 'sub',
    info: 'الفرع الإقليمي - الشرق الأوسط - يغطي عمليات المنطقة العربية والخليج.',
    svgX: 305, svgY: 215,
      building: {
      name: 'المركز الإقليمي - دمشق',
      floors: [
        {
          level: 0,
          name: 'القبو',
          rooms: [
            {
              id: 'SB01', name: 'غرفة السيرفرات', department: 'البنية التحتية',
              employees: [
                { id: 'ss001', name: 'مهند الصباغ', rank: 'مهندس أنظمة', photo: '', specialty: 'إدارة الخوادم', email: 'm.sabbagh@cia.sy', phone: '+963-11-555-0091' },
                { id: 'ss002', name: 'رامي خضر', rank: 'فني شبكات', photo: '', specialty: 'صيانة البنية التحتية', email: 'r.kheder@cia.sy', phone: '+963-11-555-0092' }
              ]
            }
          ]
        },
        {
          level: 1,
          name: 'الطابق الأرضي',
          rooms: [
            {
              id: 'S101', name: 'الإدارة العليا', department: 'الإدارة العليا',
              employees: [
                { id: 's1011', name: 'أحمد الحسن', rank: 'مدير الفرع', photo: '', specialty: 'إدارة العمليات الإقليمية', email: 'a.hassan@cia.sy', phone: '+963-11-555-0101' },
                { id: 's1012', name: 'ليلى الخطيب', rank: 'نائب مدير الفرع', photo: '', specialty: 'التخطيط الاستراتيجي', email: 'l.khatib@cia.sy', phone: '+963-11-555-0102' }
              ]
            },
            {
              id: 'S102', name: 'قسم الموارد البشرية (HR)', department: 'الموارد البشرية',
              employees: [
                { id: 'sh101', name: 'هند سليمان', rank: 'مديرة الموارد البشرية', photo: '', specialty: 'إدارة شؤون الموظفين', email: 'h.soliman@cia.sy', phone: '+963-11-555-0106' },
                { id: 'sh102', name: 'بشرى عيسى', rank: 'أخصائية توظيف', photo: '', specialty: 'الاستقطاب والتعيين', email: 'b.issa@cia.sy', phone: '+963-11-555-0107' }
              ]
            },
            {
              id: 'S103', name: 'قسم المالية', department: 'المالية',
              employees: [
                { id: 'sf101', name: 'وائل جمعة', rank: 'مدير المالية', photo: '', specialty: 'الإدارة المالية', email: 'w.jomaa@cia.sy', phone: '+963-11-555-0108' },
                { id: 'sf102', name: 'سحر عيد', rank: 'محاسبة', photo: '', specialty: 'المحاسبة والتدقيق', email: 's.eid@cia.sy', phone: '+963-11-555-0109' }
              ]
            }
          ]
        },
        {
          level: 2,
          name: 'الطابق الأول',
          rooms: [
            {
              id: 'S201', name: 'غرفة الأمن', department: 'الحماية',
              employees: [
                { id: 's2011', name: 'سامر علي', rank: 'ضابط أمن', photo: '', specialty: 'أمن المنشآت', email: 's.ali@cia.sy', phone: '+963-11-555-0103' },
                { id: 's2012', name: 'نور عثمان', rank: 'حارس أمن', photo: '', specialty: 'مراقبة الدخول', email: 'n.othman@cia.sy', phone: '+963-11-555-0104' },
                { id: 's2013', name: 'باسل خوري', rank: 'فني كاميرات', photo: '', specialty: 'أنظمة المراقبة', email: 'b.khoury@cia.sy', phone: '+963-11-555-0105' }
              ]
            },
            {
              id: 'S202', name: 'غرفة العمليات الميدانية', department: 'العمليات الميدانية',
              employees: [
                { id: 's2021', name: 'عمار ديب', rank: 'قائد عمليات', photo: '', specialty: 'التخطيط الميداني', email: 'a.deeb@cia.sy', phone: '+963-11-555-0201' },
                { id: 's2022', name: 'رنا شريف', rank: 'ضابط عمليات', photo: '', specialty: 'المصادر البشرية', email: 'r.sharif@cia.sy', phone: '+963-11-555-0202' },
                { id: 's2023', name: 'خالد سليمان', rank: 'ضابط استخبارات', photo: '', specialty: 'تحليل المنطقة', email: 'k.soliman@cia.sy', phone: '+963-11-555-0203' },
                { id: 's2024', name: 'مريم عبدو', rank: 'باحثة', photo: '', specialty: 'شؤون المنطقة', email: 'm.abdo@cia.sy', phone: '+963-11-555-0204' }
              ]
            },
            {
              id: 'S203', name: 'قسم تقنية المعلومات (IT)', department: 'تقنية المعلومات',
              employees: [
                { id: 's2031', name: 'زياد حومصي', rank: 'مهندس شبكات', photo: '', specialty: 'WAN / VPN', email: 'z.homsi@cia.sy', phone: '+963-11-555-0205' },
                { id: 's2032', name: 'هبة صالح', rank: 'فنية حاسوب', photo: '', specialty: 'صيانة الأجهزة', email: 'h.saleh@cia.sy', phone: '+963-11-555-0206' }
              ]
            }
          ]
        }
      ]
    },
    protocols: [
      { name: 'IPSec (IKEv2)', port: '500/4500', usage: 'VPN مع المقر الرئيسي', type: 'encryption' },
      { name: 'SSH', port: '22', usage: 'إدارة الأجهزة', type: 'remote' },
      { name: 'TLS 1.3', port: '443', usage: 'بريد واتصالات مشفرة', type: 'encryption' },
      { name: 'L2TP', port: '1701', usage: 'تأمين الاتصالات الميدانية', type: 'tunnel' }
    ]
  },

  netherlands: {
    id: 'netherlands',
    name: 'هولندا',
    nameEn: 'Netherlands',
    flag: '🇳🇱',
    type: 'sub',
    info: 'الفرع الأوروبي - يغطي عمليات أوروبا الغربية والمركز التقني المتقدم.',
    svgX: 290, svgY: 160,
      building: {
      name: 'المركز التقني الأوروبي - أمستردام',
      floors: [
        {
          level: 0,
          name: 'القبو',
          rooms: [
            {
              id: 'NB01', name: 'غرفة السيرفرات', department: 'البنية التحتية',
              employees: [
                { id: 'ns001', name: 'يان ديكر', rank: 'مهندس أنظمة', photo: '', specialty: 'VMware / SAN / Linux', email: 'j.dekker@cia.nl', phone: '+31-20-555-0001' },
                { id: 'ns002', name: 'ليزا فان دن بيرغ', rank: 'فنية خوادم', photo: '', specialty: 'صيانة الخوادم', email: 'l.vdberg@cia.nl', phone: '+31-20-555-0002' }
              ]
            }
          ]
        },
        {
          level: 1,
          name: 'الطابق الأرضي',
          rooms: [
            {
              id: 'N101', name: 'الإدارة العليا', department: 'الإدارة العليا',
              employees: [
                { id: 'n1011', name: 'بيتر فان دير بيرغ', rank: 'مدير الفرع', photo: '', specialty: 'إدارة العمليات الأوروبية', email: 'p.vdberg@cia.nl', phone: '+31-20-555-0101' },
                { id: 'n1012', name: 'آنا دي يونغ', rank: 'نائب مدير الفرع', photo: '', specialty: 'التنسيق والإدارة', email: 'a.dejong@cia.nl', phone: '+31-20-555-0102' }
              ]
            },
            {
              id: 'N102', name: 'قسم المالية', department: 'المالية',
              employees: [
                { id: 'nf101', name: 'بيتر هيندريكس', rank: 'مدير المالية', photo: '', specialty: 'الإدارة المالية', email: 'p.hendrix@cia.nl', phone: '+31-20-555-0105' },
                { id: 'nf102', name: 'ماريا فان دير فال', rank: 'محاسبة', photo: '', specialty: 'المحاسبة والموازنات', email: 'm.vdwal@cia.nl', phone: '+31-20-555-0106' }
              ]
            },
            {
              id: 'N103', name: 'قسم تقنية المعلومات (IT)', department: 'تقنية المعلومات',
              employees: [
                { id: 'ni101', name: 'توم فان دير ليندن', rank: 'مدير تقنية المعلومات', photo: '', specialty: 'إدارة الأنظمة', email: 't.vdlinden@cia.nl', phone: '+31-20-555-0107' },
                { id: 'ni102', name: 'كيم دي فريس', rank: 'مهندس شبكات', photo: '', specialty: 'Cisco / SD-WAN', email: 'k.devries@cia.nl', phone: '+31-20-555-0108' }
              ]
            }
          ]
        },
        {
          level: 2,
          name: 'الطابق الأول',
          rooms: [
            {
              id: 'N201', name: 'قسم الموارد البشرية (HR)', department: 'الموارد البشرية',
              employees: [
                { id: 'n2011', name: 'ماركوس باكر', rank: 'مدير HR', photo: '', specialty: 'التوظيف', email: 'm.bakker@cia.nl', phone: '+31-20-555-0103' },
                { id: 'n2012', name: 'صوفيا هيندريكس', rank: 'منسقة تدريب', photo: '', specialty: 'تطوير الكوادر', email: 's.hendrix@cia.nl', phone: '+31-20-555-0104' }
              ]
            },
            {
              id: 'N202', name: 'مختبر الأمن السيبراني', department: 'الأمن السيبراني',
              employees: [
                { id: 'n2021', name: 'لوكاس فيرمير', rank: 'خبير أمن سيبراني', photo: '', specialty: 'اختبار الاختراق', email: 'l.vermeer@cia.nl', phone: '+31-20-555-0201' },
                { id: 'n2022', name: 'إيفا فان لوين', rank: 'محلل ثغرات', photo: '', specialty: 'تحليل البرمجيات', email: 'e.vanloen@cia.nl', phone: '+31-20-555-0202' },
                { id: 'n2023', name: 'توماس برينك', rank: 'مطور أدوات أمنية', photo: '', specialty: 'Python / C++', email: 't.brink@cia.nl', phone: '+31-20-555-0203' }
              ]
            },
            {
              id: 'N203', name: 'مركز البيانات', department: 'البنية التحتية',
              employees: [
                { id: 'n2031', name: 'ديرك كويبر', rank: 'مهندس مراكز بيانات', photo: '', specialty: 'VMware / SAN', email: 'd.kuyper@cia.nl', phone: '+31-20-555-0204' },
                { id: 'n2032', name: 'نادية شيلت', rank: 'مسؤولة أنظمة', photo: '', specialty: 'Linux / Windows Server', email: 'n.schilt@cia.nl', phone: '+31-20-555-0205' },
                { id: 'n2033', name: 'أوسكار ديكر', rank: 'فني دعم', photo: '', specialty: 'Help Desk', email: 'o.dekker@cia.nl', phone: '+31-20-555-0206' }
              ]
            },
            {
              id: 'N204', name: 'غرفة الاستخبارات التقنية (SIGINT)', department: 'SIGINT',
              employees: [
                { id: 'n2041', name: 'هانس مولر', rank: 'خبير SIGINT', photo: '', specialty: 'اعتراض الإشارات', email: 'h.muller@cia.nl', phone: '+31-20-555-0301' },
                { id: 'n2042', name: 'كلارا فيسر', rank: 'محللة إشارات', photo: '', specialty: 'تحليل الترددات', email: 'c.visser@cia.nl', phone: '+31-20-555-0302' },
                { id: 'n2043', name: 'ماثيو بلوم', rank: 'فني هوائيات', photo: '', specialty: 'RF / SATCOM', email: 'm.bloom@cia.nl', phone: '+31-20-555-0303' }
              ]
            }
          ]
        }
      ]
    },
    protocols: [
      { name: 'IPSec', port: '500/4500', usage: 'VPN إلى المقر الرئيسي', type: 'encryption' },
      { name: 'TLS 1.3', port: '443', usage: 'اتصالات ويب آمنة', type: 'encryption' },
      { name: 'SSH', port: '22', usage: 'إدارة الخوادم', type: 'remote' },
      { name: 'OpenVPN', port: '1194', usage: 'اتصالات ميدانية', type: 'tunnel' },
      { name: 'HTTPS', port: '443', usage: 'بوابات آمنة', type: 'web' }
    ]
  },

  egypt: {
    id: 'egypt',
    name: 'مصر',
    nameEn: 'Egypt',
    flag: '🇪🇬',
    type: 'sub',
    info: 'الفرع الإقليمي - شمال أفريقيا - يغطي عمليات أفريقيا والبحر المتوسط.',
    svgX: 310, svgY: 230,
      building: {
      name: 'المركز الإقليمي - القاهرة',
      floors: [
        {
          level: 0,
          name: 'القبو',
          rooms: [
            {
              id: 'EB01', name: 'غرفة السيرفرات', department: 'البنية التحتية',
              employees: [
                { id: 'es001', name: 'أيمن عطية', rank: 'مهندس خوادم', photo: '', specialty: 'إدارة السيرفرات', email: 'a.attia@cia.eg', phone: '+20-2-555-0091' },
                { id: 'es002', name: 'محمود فؤاد', rank: 'فني شبكات', photo: '', specialty: 'الكابلات والبنية التحتية', email: 'm.fouad@cia.eg', phone: '+20-2-555-0092' }
              ]
            }
          ]
        },
        {
          level: 1,
          name: 'الطابق الأرضي',
          rooms: [
            {
              id: 'E101', name: 'الإدارة العليا', department: 'الإدارة العليا',
              employees: [
                { id: 'e1011', name: 'محمد عبد الله', rank: 'مدير الفرع', photo: '', specialty: 'الإدارة الإقليمية', email: 'm.abdallah@cia.eg', phone: '+20-2-555-0101' },
                { id: 'e1012', name: 'فاطمة الزهراء', rank: 'نائب مدير الفرع', photo: '', specialty: 'التنظيم والمتابعة', email: 'f.zahraa@cia.eg', phone: '+20-2-555-0102' }
              ]
            },
            {
              id: 'E102', name: 'قسم الموارد البشرية (HR)', department: 'الموارد البشرية',
              employees: [
                { id: 'eh101', name: 'كريم منصور', rank: 'مدير الموارد البشرية', photo: '', specialty: 'إدارة شؤون الموظفين', email: 'k.mansour@cia.eg', phone: '+20-2-555-0103' },
                { id: 'eh102', name: 'هبة رشاد', rank: 'أخصائية توظيف', photo: '', specialty: 'الاستقطاب', email: 'h.rashad@cia.eg', phone: '+20-2-555-0106' }
              ]
            },
            {
              id: 'E103', name: 'قسم المالية', department: 'المالية',
              employees: [
                { id: 'ef101', name: 'هاني عبد الرحمن', rank: 'مدير المالية', photo: '', specialty: 'الإدارة المالية', email: 'h.abdelrahman@cia.eg', phone: '+20-2-555-0107' },
                { id: 'ef102', name: 'أمل جابر', rank: 'محاسبة', photo: '', specialty: 'المحاسبة', email: 'a.gaber@cia.eg', phone: '+20-2-555-0108' }
              ]
            }
          ]
        },
        {
          level: 2,
          name: 'الطابق الأول',
          rooms: [
            {
              id: 'E201', name: 'قسم الأمن', department: 'الأمن',
              employees: [
                { id: 'e2011', name: 'طارق جمال', rank: 'رئيس الأمن', photo: '', specialty: 'تأمين المنشآت', email: 't.gamal@cia.eg', phone: '+20-2-555-0104' },
                { id: 'e2012', name: 'داليا مرسي', rank: 'ضابط أمن', photo: '', specialty: 'التحقيقات', email: 'd.morsi@cia.eg', phone: '+20-2-555-0105' }
              ]
            },
            {
              id: 'E202', name: 'غرفة العمليات', department: 'العمليات',
              employees: [
                { id: 'e2021', name: 'حسام الدين شريف', rank: 'قائد عمليات', photo: '', specialty: 'العمليات الإقليمية', email: 'h.sharif@cia.eg', phone: '+20-2-555-0201' },
                { id: 'e2022', name: 'ناهد يوسف', rank: 'ضابط استخبارات', photo: '', specialty: 'تحليل المنطقة', email: 'n.youssef@cia.eg', phone: '+20-2-555-0202' },
                { id: 'e2023', name: 'شادي رءوف', rank: 'باحث ميداني', photo: '', specialty: 'شؤون أفريقيا', email: 's.raouf@cia.eg', phone: '+20-2-555-0203' },
                { id: 'e2024', name: 'منى عادل', rank: 'محللة', photo: '', specialty: 'التحليل السياسي', email: 'm.adel@cia.eg', phone: '+20-2-555-0204' }
              ]
            },
            {
              id: 'E203', name: 'قسم تقنية المعلومات (IT)', department: 'تقنية المعلومات',
              employees: [
                { id: 'e2031', name: 'إيهاب سعيد', rank: 'مهندس شبكات', photo: '', specialty: 'WAN / SD-WAN', email: 'e.saeed@cia.eg', phone: '+20-2-555-0205' },
                { id: 'e2032', name: 'سارة محمود', rank: 'فنية أمن سيبراني', photo: '', specialty: 'Firewall / IDS', email: 's.mahmoud@cia.eg', phone: '+20-2-555-0206' },
                { id: 'e2033', name: 'علي إبراهيم', rank: 'مبرمج', photo: '', specialty: 'Web / Database', email: 'a.ibrahim@cia.eg', phone: '+20-2-555-0207' }
              ]
            }
          ]
        }
      ]
    },
    protocols: [
      { name: 'IPSec', port: '500/4500', usage: 'VPN إلى المقر الرئيسي', type: 'encryption' },
      { name: 'SSH', port: '22', usage: 'إدارة الأجهزة', type: 'remote' },
      { name: 'TLS 1.2', port: '443', usage: 'اتصالات ويب', type: 'encryption' },
      { name: 'PPTP', port: '1723', usage: 'اتصالات ميدانية', type: 'tunnel' }
    ]
  }
};

const companyInfo = {
  name: 'وكالة الاستخبارات المركزية',
  nameEn: 'Central Intelligence Agency',
  logo: 'CIA',
  description: 'شبكة الفروع العالمية للوكالة - مقر رئيسي وثلاثة فروع إقليمية تعمل بتناغم لضمان أمن الاتصالات والعمليات الاستخباراتية حول العالم.',
  employeesCount: function() {
    let total = 0;
    for (const id in branches) {
      for (const floor of branches[id].building.floors) {
        for (const room of floor.rooms) {
          total += room.employees.length;
        }
      }
    }
    return total;
  },
  branchesCount: 4,
  protocolsCount: function() {
    let total = 0;
    for (const id in branches) {
      total += branches[id].protocols.length;
    }
    return total;
  }
};

const branchList = ['usa', 'syria', 'netherlands', 'egypt'];
