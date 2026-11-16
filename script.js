const translations = {
  ar: {
    skip: "تخطّي إلى المحتوى", brand: "عبدالرحمن رفعت", navHome: "الرئيسية", navFocus: "المسارات المتخصصة", navBackend: "Python & Backend", navAutomation: "Automation & Scripting", navQa: "QA & Testing", navProjects: "المشاريع", navAbout: "عني والـ CV", navCertificates: "الشهادات", navMore: "مجالات أخرى", navGaming: "Gaming & إبداع", navContact: "تواصل معي",
    navAria: "القائمة الرئيسية", currentPageKicker: "الصفحة الحالية", drawerKicker: "التنقّل", drawerMainGroup: "الرئيسية والمسارات", drawerWorkGroup: "الشغل والتعلّم", drawerOtherGroup: "مجالات أخرى والهوايات", drawerFooter: "اختر قسمًا لعرض تفاصيله", menuOpen: "افتح القائمة", menuClose: "اقفل القائمة", closeMenu: "إغلاق القائمة", switchLanguage: "التبديل إلى الإنجليزية", themeLight: "فاتح", themeDark: "داكن", switchToLight: "التبديل للوضع الفاتح", switchToDark: "التبديل للوضع الداكن",
    homeOverviewKicker: "لوحة التحكم الرئيسية", homeOverviewTitleText: "مساراتي، خبراتي،<br /><em>وشغفي التقني.</em>", homeOverviewIntro: "خريطة شاملة لكل ما أقدمه. اضغط على أي قسم للدخول إلى شاشته المستقلة بتفاصيلها وتجاربها التفاعلية الكاملة.",
    homeBackendBrief: "تطوير الـ APIs، قواعد البيانات، والأنظمة المكتوب كودها بأساس هندسي سليم.",
    homeQaBrief: "كشف الثغرات، اختبار الحدود، وكتابة سيناريوهات الفحص بـ Pytest وعقلية الـ Tester.",
    homeAutomationBrief: "سكريبتات Python وأدوات CLI لتقليل المهام المتكررة وحزم الملفات آلياً.",
    homeDataBrief: "استكشاف البيانات ومعالجتها عبر Pandas وMatplotlib ونماذج تعلم الآلة.",
    homeSecurityBrief: "خلفية معتمدة من Fortinet وRed Hat ولينكس في إدارة وحماية الشبكات.",
    homeWebBrief: "مواقع وتجارب ويب متجاوبة عملتها لنفسي ولعملاء في مجالات متنوعة.",
    homeCreativeBrief: "تصميم صور، فوتوشوب، ومونتاج فيديوهات لليوتيوب ومحتوى الألعاب.",
    homeGamingBrief: "الألعاب الاستراتيجية، صناعة المحتوى، المونتاج، والهوية البصرية للقناة.",
    openTrack: "فتح المسار ↗", testCode: "اختبر الكود ↗", details: "تفاصيل ↗", gamingZone: "منطقة اللعب ↗", homeGamingTitle: "Refaat Gaming & محتوى",
    homeProjectsKicker: "أبرز الأعمال", homeProjectsTitle: "مشاريع منتقاة", viewAllProjects: "عرض كل المشاريع",
    homeCertKicker: "توثيق رسمي", homeCertTitle: "شهادات وتدريبات", viewAllCertificates: "كل الشهادات", homeCertCount: "شهادة تخصصية مضافة", homeProjectsEmpty: "هنا هتظهر المشاريع.",
    heroEyebrow: "هندسة إلكترونية · برمجة · جودة واختبار", heroPretitle: "أهلًا، أنا", heroName: "عبدالرحمن<br />رفعت السيد", heroRole: "Python Backend & QA Engineer",
    heroDescription: "أدرس الهندسة الإلكترونية بمنوف (قسم الأمن السيبراني وتحليلات البيانات). أجمع بين بناء الـ Backend المتين بـ Python وفلسفة الـ QA في كشف الأخطاء واختبار قيم الحدود لضمان برمجيات موثوقة.",
    heroPrimary: "استعراض المشاريع", heroSecondary: "عني والـ CV", heroQaBtn: "مختبر اختبار الكود", availability: "منفتح على فرص تدريب وعمل", location: "السنبلاوين، مصر", heroVertical: "البداية الصح: تفكيك المشكلة قبل كتابة أول سطر", scrollCue: "انزل واكتشف",
    statNti: "تدريب Fortinet NTI مكثف", statScore: "درجة امتياز التخرج في NTI", statProjects: "مشاريع برمجية وتطبيقية", statCerts: "شهادة تقنية موثقة", dockStatus: "متاح للتواصل المباشر والفرص المهنية",
    focusKicker: "المسارات المتخصصة", focusTitle: "بين بناء الكود<br /><em>والتأكد من صموده.</em>", focusIntro: "تركيزي ينصب على مسارين متكاملين: كتابة Backend متين بـ Python، واختباره وتتبّع حدوده وثغراته كـ QA Tester. هذه المسارات ليست نظرية، بل مطبقة بمشاريع عملية أشارك تفاصيلها هنا.",
    statusCore: "التركيز البرمجي", statusQaFocus: "شغف الجودة والاختبار", statusExploring: "أتمتة وحزم", statusLearning: "مسار بتعلمه",
    backendTitle: "Python & Backend Development", backendDescription: "تصميم REST APIs عبر FastAPI، إدارة قواعد بيانات SQLite والتعامل مع ملفات البيانات، ربط خدمات الذكاء الاصطناعي وبناء لوحات التحكم بـ PyQt.",
    qaTitle: "Quality Assurance & Testing", qaDescription: "عقلية فاحصة تبحث عن أسباب الانهيار قبل وصول البرنامج للمستخدم. أطبق مفاهيم Boundary Value Analysis واختبارات الوحدات بـ Pytest وكتابة تقارير عيوب واضحة.",
    automationTitle: "Automation & Scripting", automationDescription: "أدوات مخصصة لأتمتة معالجة وضغط الصور (Pillow/CLI)، تجهيز النسخ الاحتياطية وتوليد التقارير التلقائية لتقليص العمل اليدوي.",
    seeTrack: "دخول المسار والتجربة الحية", seeQaTrack: "شاهد مختبر الـ QA التفاعلي", seeAutomationTrack: "استكشف أدوات الأتمتة",
    backendPageKicker: "المسار البرمجي الأساسي", backendPageTitle: "Python & Backend Engineering",
    backendPageIntro: "أبني الـ Backend بعين مهندس: تنظيم دقيق للكود عبر وحدات مستقلة (Routers)، مصادقة محكمة ببروتوكول OAuth 2.0، حماية ضد الحقن والتمرير العشوائي للمدخلات، ودمج سلس لخدمات الذكاء الاصطناعي والإشعارات.",
    backendLearningTag: "FastAPI · SQLite · APIs", goToQa: "انتقل لاختبار الكود (QA)",
    backendProjectsBtn: "مشاريع الـ Backend الكاملة", automationProjectsBtn: "مشاريع الأتمتة", backToTracks: "كل المسارات",
    apiConsoleSub: "محاكي اختبار الـ Endpoints التفاعلي",
    bArch1Title: "مصادقة وحماية آمنة (OAuth2 & Session Tokens)", bArch1Desc: "في مشروعي Smart Email Guardian، قمت بتطبيق دورة Google OAuth2 كاملة بحماية State Cookie ضد هجمات CSRF، وقراءة البريد بصلاحية Read-Only مشددة لضمان أمان خصوصية المستخدم.",
    bArch2Title: "معالجة البيانات والتقارير (Pandas & PyQt)", bArch2Desc: "في نظام إدارة محل الذهب، تم بناء معمارية كاملة لحساب الأوزان والأسعار وحركة البيع اليومية مع توليد فواتير تلقائية ونسخ احتياطي مجدول وحماية بملفات أمان مشفرة.",
    bArch3Title: "حل المشكلات بكفاءة C++ و خوارزميات صلبة", bArch3Desc: "خلفيتي في C++ علمتني التحكم في الذاكرة والتعامل الصارم مع أنواع البيانات والتحقق من المدخلات (Input Validation) لمنع حدوث Buffer Overflows أو أخطاء القسمة على صفر.",
    qaPageKicker: "مسار اختبار البرمجيات والجودة", qaPageTitle: "Software Quality Assurance & Testing",
    qaPageIntro: "الكود لا يعتبر منجزاً إلا إذا صمد أمام الفحص العنيف. عقلية الـ QA بالنسبة لي هي التفكير في: ماذا يحدث لو أدخل المستخدم قيمة سالبة؟ لو انقطع الاتصال في منتصف العملية؟ لو أُرسلت حمولة XSS مشبوهة؟ هنا أتحول من دور الباني إلى دور الفاحص الدقيق.",
    qaRelatedProjects: "المشاريع المفحوصة",
    btnRunTestsLabel: "تشغيل حزمة الاختبارات (Run Pytest)",
    testStatusReady: "جاهز للتشغيل",
    tcPending: "معلق",
    testSummaryInitial: "اضغط على زر التشغيل أعلاه لتشغيل المحاكي ومشاهدة نتائج التحقق الآن.",
    bugChallengeTag: "[//] تحدي الفحص والاختبار",
    bugChallengeTitle: "تحدي صائد الثغرات: هل تستطيع كشف العيب؟", bugChallengeDesc: "الكود التالي به خطأ حدودي شائع (Boundary / Off-by-one Error). اضغط على السطر المصاب لاكتشاف الثغرة وتأكيد حسك التفتيشي!",
    bugRewardTitle: "تم كشف العيب بنجاح (Off-By-One Boundary Bug)", bugRewardDesc: "عندما تكون السلة بقيمة 100 بالظبط، سيفشل الشرط ويُحرم العميل من الخصم المستحق. هذا هو جوهر الـ Boundary Value Testing!",
    qaM1Title: "تحليل قيم الحدود (Boundary Value Analysis)", qaM1Desc: "التركيز على نقاط الانهيار الكلاسيكية: 0، القيمة العظمى، ما دونها وما فوقها، والقيم السالبة وغير المتوقعة.",
    qaM2Title: "تقسيم التكافؤ (Equivalence Partitioning)", qaM2Desc: "تصنيف المدخلات إلى فئات صالحة وغير صالحة لتغطية أعلى نسبة اختبار بأقل عدد من الحالات دون تكرار عشوائي.",
    qaM3Title: "تقارير عيوب واضحة (Defect Lifecycle)", qaM3Desc: "كتابة تقرير Bug مهني يحتوي على: خطوات إعادة الإنتاج، النتيجة المتوقعة، النتيجة الفعلية، وسجلات الأخطاء للوصول للحل فوراً.",
    qaM4Title: "أتمتة الفحص (Pytest & Postman)", qaM4Desc: "كتابة اختبارات آلية للـ Endpoints والتحقق من صحة كود الاستجابة (Status Codes)، الـ Headers، وصحة هيكل JSON الراجع.",
    automationPageKicker: "أدوات وسكريبتات الأتمتة", automationPageTitle: "Automation & Scripting",
    automationPageIntro: "أي عملية متكررة تستهلك أكثر من بضع دقائق يجب أن تُعهد إلى سكريبت. أستخدم Python لبناء أدوات سريعة لضغط الوسائط وحزم الأرشيف والتعامل التلقائي مع الملفات والجداول.",
    downloadCompress: "تحميل سكريبت MediaPress (Python)",
    projectsKicker: "مختارات من الشغل", projectsTitle: "أفكار حقيقية بدأت<br /><em>بمشكلة وتطورت لكود.</em>", projectsIntro: "مجموعة من المشاريع التطبيقية في الـ Backend والأتمتة و C++ والويب والتحليل. كل مشروع يوضح الفكرة، التقنيات، ورابط الكود على GitHub.",
    filterLabel: "صنّف المشاريع", filterAll: "الكل", filterBackend: "Backend", filterQa: "QA & Testing", filterAutomation: "Automation", filterData: "Data", filterWeb: "Web", filterSecurity: "Security", filterCpp: "C++",
    projectNote: "جميع مشاريعي تم بناؤها وتجربتها بهدف التعلم العميق والتطبيق العملي الواقعي.",
    detailsButton: "تفاصيل المشروع", codeButton: "افتح الكود على GitHub", noLink: "دراسة حالة تقنية",
    aboutKicker: "الشخص وراء الكود", aboutTitle: "بحب أفهم<br /><em>ليه وكيف الحاجة بتشتغل.</em>",
    aboutLead: "أنا عبدالرحمن رفعت السيد، طالب في السنة النهائية بكلية الهندسة الإلكترونية بمنوف، قسم الأمن السيبراني وتحليلات البيانات. البرمجة بالنسبة لي ليست مجرد كتابة سطور، بل هي أسلوب تفكير هندسي يبدأ بفهم المشكلة بعمق، وتنتهي ببرنامج متين ومختبر بدقة.",
    aboutBody: "أجد متعتي الحقيقية في نقطة التقاء التطوير (Backend) باكتشاف الخلل (QA). هذا المزيج يجعلني أكتب كوداً يسهل اختباره وصيانته، وأبحث دائماً عن حالات الحافة (Edge Cases) لضمان موثوقية الأنظمة.",
    profileRole: "مهندس برمجيات واختبار", profileStatus: "طالب هندسة إلكترونية بمنوف · 2026",
    valueOne: "تفكير تحليلي ومنهجي", valueTwo: "شغف التجربة وكشف الأخطاء", valueThree: "دقة هندسية في التفاصيل",
    cvCardTitle: "السيرة الذاتية الرسمية (ATS Resume)", cvCardDesc: "جاهزة للمراجعة، مصممة بصيغة متوافقة مع أنظمة الـ ATS وتلخص كل المشروعات والشهادات.", viewCvBtn: "عرض وتحميل السيرة الذاتية (CV)",
    educationLabel: "التعليم الأكاديمي", schoolName: "كلية الهندسة الإلكترونية بمنوف", department: "قسم الأمن السيبراني وتحليلات البيانات", present: "حتى الآن", finalYear: "السنة النهائية (مشروع التخرج)",
    trainingLabel: "التدريب المهني المكثف", trainingSchool: "المعهد القومي للاتصالات (NTI)", trainingDesc: "Fortinet Cybersecurity Track (120 ساعة - نتيجة 95% امتياز)", trainingDate: "يونيو — سبتمبر 2026", trainingVerified: "معتمد رسميًا",
    aboutQuote: "افهم المشكلة أولاً. فككها لعناصرها البسيطة. ابنِ الحل، ثم اختبر حدوده بكل طريقة ممكنة.", outsideCode: "خارج نطاق الكود", creativeInterests: "صناعة المحتوى · مونتاج الفيديوهات · تصميم الجرافيك · الألعاب الاستراتيجية",
    certKicker: "تعلم موثق وشهادات", certTitle: "كل شهادة هي خطوة<br /><em>في بناء الأساس الهندسي.</em>", certIntro: "شهادات وتدريبات معتمدة في الأمن السيبراني، إدارة أنظمة Red Hat Linux، أساسيات الشبكات، البرمجة، ودورة حياة البرمجيات الآمنة (SSDLC). اضغط على أي شهادة لفتح ملف الـ PDF الأصلي.",
    hoursSummary: "ساعة تدريب Fortinet مكثف", scoreSummary: "نتيجة الامتياز في NTI", certCountSummary: "شهادة معتمدة موثقة", certOpen: "فتح ملف الشهادة (PDF)",
    certGalleryLabel: "المعرض البصري للشهادات المعتمدة", certFilterAll: "الكل (11)", certFilterSecurity: "أمن سيبراني (5)", certFilterLinux: "أنظمة لينكس (1)", certFilterNetworks: "شبكات وسحابة (4)", certFilterProgramming: "برمجة (1)",
    fieldHint: "انقر للتفاصيل الكاملة ↗", certZoomBtn: "معاينة مكبرة", certPdfBtn: "فتح PDF", certLightboxTitle: "معاينة الشهادة المعتمدة",
    moreKicker: "مساحات أخرى أتقنها وأستكشفها", moreTitle: "تنوع معرفي يخدم<br /><em>رؤيتي البرمجية الشاملة.</em>", moreIntro: "فهم تحليل البيانات والشبكات ولينكس وتطوير الويب يمنحني ميزة فهم المنظومة التقنية ككل وكيف تتكامل معاً.",
    dataTitle: "تحليل البيانات (Data Analytics)", dataDescription: "تنظيف واستكشاف مجموعات البيانات واستخلاص الرؤى عبر Pandas وNumPy وMatplotlib ومشاريع تعلم الآلة (MLP).",
    securityTitle: "الأمن السيبراني والشبكات", securityDescription: "تكوين السياسات الأمنية، أنظمة لينكس Red Hat، إدارة الصلاحيات، وتحليل حركة البيانات وفهم متجهات الهجوم الشائعة.",
    webTitle: "تطوير الويب وشغل العملاء", webDescription: "بناء واجهات ويب تفاعلية متجاوبة لعملاء متنوعين (مطاعم، أعمال، سياحة، رعاية صحية) باستخدام HTML, CSS, JS, وReact.",
    creativeTitle: "التصميم والمونتاج", creativeDescription: "خبرة في برنامج فوتوشوب وتصميم الهويات البصرية، ومونتاج الفيديو لليوتيوب، وهو ما يثري حسّي في الـ UI/UX والتفاصيل البصرية.",
    gamingKicker: "منطقة اللعب والتحليل الاستراتيجي", gamingTitle: "استراتيجية.<br /><em>صبر. وقرار حاسم.</em>",
    gamingDescription: "الألعاب الاستراتيجية ليست مجرد تسلية، بل هي تدريب ذهني يومي على إدارة الموارد المحدودة، التنبؤ بحركات الخصم، والتصرف تحت الضغط—وهي نفس المهارات التي أحتاجها في تتبّع أخطاء البرمجيات وتحليل الأنظمة المعقدة.",
    gamingIdentity: "الهوية البصرية للقناة", offlineCaption: "تصميم شاشة البث (Offline Screen) — تصميم شخصي", gamingFoot: "في الكود كما في الاستراتيجية: الخطة الذكية والصبر هما أساس كل فوز.",
    contactKicker: "جاهز لبدء محادثة؟", contactTitle: "عندك فرصة تدريب أو مشروع؟<br /><em>خلّينا نتواصل.</em>", contactDescription: "سواء كنت تبحث عن مطور Python Backend شغوف، أو QA Tester بعين فاحصة تبحث عن الأخطاء وتضمن جودة البرنامج، يسعدني دائماً التواصل والتعاون.",
    emailLabel: "البريد الإلكتروني المباشر", whatsappLabel: "واتساب / هاتف", linkedinLabel: "Abdelrahman Refaat", footerText: "تصميم وبرمجة عبدالرحمن رفعت السيد — مطور برمجيات واختبار", backTop: "الرجوع للأعلى", dialogClose: "إغلاق التفاصيل", modalNoLink: "دراسة حالة تقنية موثقة"
  },
  en: {
    skip: "Skip to content", brand: "Abdelrahman Refaat", navHome: "Home", navFocus: "Specialized Tracks", navBackend: "Python & Backend", navAutomation: "Automation & Scripting", navQa: "QA & Testing", navProjects: "Projects", navAbout: "About & Resume", navCertificates: "Certificates", navMore: "Other Fields", navGaming: "Gaming & Creative", navContact: "Contact Me",
    navAria: "Main navigation", currentPageKicker: "CURRENT PAGE", drawerKicker: "NAVIGATION", drawerMainGroup: "HOME & SPECIALIZATIONS", drawerWorkGroup: "WORK & LEARNING", drawerOtherGroup: "OTHER FIELDS & HOBBIES", drawerFooter: "Choose a section to explore", menuOpen: "Open navigation menu", menuClose: "Close navigation menu", closeMenu: "Close menu", switchLanguage: "Switch to Arabic", themeLight: "Light", themeDark: "Dark", switchToLight: "Switch to light theme", switchToDark: "Switch to dark theme",
    homeOverviewKicker: "MAIN DASHBOARD", homeOverviewTitleText: "My tracks, expertise,<br /><em>and engineering passion.</em>", homeOverviewIntro: "A complete map of my capabilities. Click any section to jump directly to its dedicated, interactive view.",
    homeBackendBrief: "Building robust REST APIs, clean database schemas, and reliable Python services.",
    homeQaBrief: "Boundary value testing, defect discovery, and test suites written with Pytest and a tester mindset.",
    homeAutomationBrief: "Python CLI tools and automation scripts to eliminate repetitive tasks and streamline workflows.",
    homeDataBrief: "Data wrangling, exploratory analysis, and visualization with Pandas, NumPy, and Matplotlib.",
    homeSecurityBrief: "Certified Fortinet & Red Hat Linux foundations in network defense and system management.",
    homeWebBrief: "Responsive, modern websites and applications crafted for diverse business domains.",
    homeCreativeBrief: "Photoshop graphic design, video editing, and visual identity for YouTube & gaming channels.",
    homeGamingBrief: "Strategy games, content creation, stream production, and Refaat Gaming branding.",
    openTrack: "Explore Track ↗", testCode: "Test Code ↗", details: "Details ↗", gamingZone: "Play Zone ↗", homeGamingTitle: "Refaat Gaming & Content",
    homeProjectsKicker: "HIGHLIGHTS", homeProjectsTitle: "Selected Projects", viewAllProjects: "View All Projects",
    homeCertKicker: "CREDENTIALS", homeCertTitle: "Certificates & Training", viewAllCertificates: "All Certificates", homeCertCount: "specialized certificates added", homeProjectsEmpty: "Projects will appear here.",
    heroEyebrow: "ELECTRONIC ENGINEERING · CODE · QUALITY & TESTING", heroPretitle: "Hello, I’m", heroName: "Abdelrahman<br />Refaat Elsayed", heroRole: "Python Backend & QA Engineer",
    heroDescription: "Engineering student at Menouf (Cybersecurity & Data Analytics). Blending the builder's mindset of Python backend development with the critical eye of QA testing to deliver rock-solid software.",
    heroPrimary: "View Projects", heroSecondary: "About Me & CV", heroQaBtn: "Code Testing Lab", availability: "Open to internships & junior roles", location: "Sinbillawain, Egypt", heroVertical: "True engineering starts with breaking the problem down before coding", scrollCue: "SCROLL TO EXPLORE",
    statNti: "Intensive Fortinet NTI Training", statScore: "Graduation Score at NTI", statProjects: "Software & Hands-on Projects", statCerts: "Verified Technical Certificates", dockStatus: "Online & Available for opportunities",
    focusKicker: "SPECIALIZED TRACKS", focusTitle: "Between building code<br /><em>and verifying its resilience.</em>", focusIntro: "My focus pairs two complementary disciplines: crafting clean Python backends and testing their limits as a QA tester. These are demonstrated through applied, working projects.",
    statusCore: "Core Focus", statusQaFocus: "Testing Passion", statusExploring: "Automation & Tooling", statusLearning: "Learning Track",
    backendTitle: "Python & Backend Development", backendDescription: "Architecting FastAPI REST services, managing SQLite/Pandas persistence, integrating LLM providers, and building PyQt desktop management software.",
    qaTitle: "Quality Assurance & Testing", qaDescription: "A probing mindset that catches defects before users do. Applying Boundary Value Analysis, Pytest unit tests, and thorough defect reporting.",
    automationTitle: "Automation & Scripting", automationDescription: "Custom CLI utilities for image optimization with Pillow, automated ZIP packaging, and routine workflow reduction.",
    seeTrack: "Explore Track & Live Console", seeQaTrack: "Open Interactive QA Lab", seeAutomationTrack: "Explore Automation Tools",
    backendPageKicker: "PRIMARY ENGINEERING TRACK", backendPageTitle: "Python & Backend Engineering",
    backendPageIntro: "I approach backend development with an engineer's rigor: clean modular routers, secure Google OAuth 2.0 flow with state tokens, strict input validation, and seamless AI & notification integrations.",
    backendLearningTag: "FastAPI · SQLite · APIs", goToQa: "Switch to Code Testing (QA)",
    backendProjectsBtn: "Full Backend Projects", automationProjectsBtn: "Automation Projects", backToTracks: "All Tracks",
    apiConsoleSub: "Interactive Endpoint Testing Simulator",
    bArch1Title: "Secure Auth & Session Tokens (OAuth 2.0)", bArch1Desc: "Implemented a complete Google OAuth2 flow in Smart Email Guardian with CSRF-resistant state cookies and read-only Gmail scopes to protect privacy.",
    bArch2Title: "Data Processing & Reporting (Pandas & PyQt)", bArch2Desc: "Engineered a full desktop system for gold shop operations with live inventory valuation, automated invoice generation, and secured backup routines.",
    bArch3Title: "Strong Foundations in C++ & Algorithmic Logic", bArch3Desc: "My C++ background instilled strict memory and type discipline, input sanitization, and defensive guards against boundary overflows.",
    qaPageKicker: "QUALITY ASSURANCE & TESTING TRACK", qaPageTitle: "Software Quality Assurance & Testing",
    qaPageIntro: "Code isn't done until it survives rigorous examination. The QA mindset asks: What happens on negative inputs? On network drops? On unexpected payloads? Here I transition from builder to meticulous investigator.",
    qaRelatedProjects: "Tested Projects",
    btnRunTestsLabel: "Run Test Suite (Pytest)",
    testStatusReady: "READY TO EXECUTE",
    tcPending: "Pending",
    testSummaryInitial: "Click the run button above to execute the test suite simulator and observe live results.",
    bugChallengeTag: "[//] QA INSPECTION CHALLENGE",
    bugChallengeTitle: "Bug Hunter Challenge: Can you spot the defect?", bugChallengeDesc: "The snippet below contains a classic boundary error. Click the faulty line to catch the bug and verify your QA instincts!",
    bugRewardTitle: "Defect Identified (Off-By-One Boundary Bug)", bugRewardDesc: "When cart_total is exactly 100, the condition fails and the customer misses their valid discount. This is the foundation of Boundary Value Testing!",
    qaM1Title: "Boundary Value Analysis (BVA)", qaM1Desc: "Targeting classic failure points: zero, maximum boundaries, off-by-one values, and unexpected negative numbers.",
    qaM2Title: "Equivalence Partitioning (EP)", qaM2Desc: "Dividing input domains into valid and invalid classes to achieve high test coverage with concise, non-redundant test cases.",
    qaM3Title: "Actionable Defect Lifecycle", qaM3Desc: "Drafting reproducible bug reports with steps, expected vs actual behavior, and system logs for immediate resolution.",
    qaM4Title: "Automated Verification (Pytest & Postman)", qaM4Desc: "Writing automated assertions for REST endpoints, checking HTTP status codes, header integrity, and response JSON schemas.",
    automationPageKicker: "AUTOMATION & TOOLING", automationPageTitle: "Automation & Scripting",
    automationPageIntro: "Any repetitive task eating up valuable minutes belongs in a script. I use Python to build fast utilities for media compression, directory archiving, and data pipelines.",
    downloadCompress: "Download MediaPress (Python)",
    projectsKicker: "PORTFOLIO", projectsTitle: "Ideas that started<br /><em>with a problem and became code.</em>", projectsIntro: "A collection of applied programming, backend, C++, web, and data projects. Each card highlights the core problem, stack, and source code.",
    filterLabel: "FILTER PROJECTS", filterAll: "All", filterBackend: "Backend", filterQa: "QA & Testing", filterAutomation: "Automation", filterData: "Data", filterWeb: "Web", filterSecurity: "Security", filterCpp: "C++",
    projectNote: "All projects are built and tested with a focus on genuine understanding and real-world utility.",
    detailsButton: "Project Details", codeButton: "View on GitHub", noLink: "Technical Case Study",
    aboutKicker: "THE PERSON BEHIND THE CODE", aboutTitle: "I like to understand<br /><em>how and why things work.</em>",
    aboutLead: "I’m Abdelrahman Refaat Elsayed, a final-year Electronic Engineering student at Menouf University, specializing in Cybersecurity and Data Analytics. Programming to me is engineering problem-solving: deeply analyzing the problem and constructing reliable, testable software.",
    aboutBody: "I find my greatest excitement where backend development meets quality assurance. This intersection ensures I write clean, maintainable code while rigorously hunting edge cases.",
    profileRole: "Software & QA Engineer", profileStatus: "Menouf Electronic Engineering Student · 2026",
    valueOne: "Analytical Engineering Thinking", valueTwo: "Curiosity & Defect Investigation", valueThree: "Attention to System Reliability",
    cvCardTitle: "Official ATS Resume", cvCardDesc: "Tailored and ready for recruiters, ATS-compliant, summarizing verified projects, certifications, and technical proficiencies.", viewCvBtn: "View & Download CV (ATS)",
    educationLabel: "ACADEMIC EDUCATION", schoolName: "Faculty of Electronic Engineering, Menouf", department: "Cybersecurity & Data Analytics Department", present: "Present", finalYear: "Final Year (Graduation Project)",
    trainingLabel: "INTENSIVE VOCATIONAL TRAINING", trainingSchool: "National Telecommunication Institute (NTI)", trainingDesc: "Fortinet Cybersecurity Track (120 Hours - 95% Excellence Score)", trainingDate: "Jun — Sep 2026", trainingVerified: "Officially Certified",
    aboutQuote: "Understand the problem first. Break it down to its essentials. Build the solution, then test its limits relentlessly.", outsideCode: "BEYOND THE TERMINAL", creativeInterests: "Content Creation · Video Editing · Graphic Design · Strategy Gaming",
    certKicker: "VERIFIED CREDENTIALS", certTitle: "Every certificate marks a milestone<br /><em>in building solid fundamentals.</em>", certIntro: "Accredited training in cybersecurity, Red Hat Linux systems, computer networks, Python, and the Secure Software Development Lifecycle (SSDLC). Click any certificate to view the official PDF.",
    hoursSummary: "Hours of Intensive Fortinet Training", scoreSummary: "Graduation Score at NTI", certCountSummary: "Verified Technical Certificates", certOpen: "Open Certificate (PDF)",
    certGalleryLabel: "VERIFIED CREDENTIALS GALLERY", certFilterAll: "All (11)", certFilterSecurity: "Cybersecurity (5)", certFilterLinux: "Linux Systems (1)", certFilterNetworks: "Networks & Cloud (4)", certFilterProgramming: "Programming (1)",
    fieldHint: "Click for deep details ↗", certZoomBtn: "Zoom Preview", certPdfBtn: "View PDF", certLightboxTitle: "Verified Certificate Preview",
    moreKicker: "CROSS-DISCIPLINARY SKILLS", moreTitle: "Broad technical insight<br /><em>supporting software architecture.</em>", moreIntro: "Knowledge in data analytics, networking, Linux administration, and web technologies grants me a systemic view of modern applications.",
    dataTitle: "Data Analytics", dataDescription: "Cleaning, exploring datasets, and extracting insights using Pandas, NumPy, Matplotlib, and machine-learning models (MLP).",
    securityTitle: "Cybersecurity & Networks", securityDescription: "Configuring security policies, Red Hat Linux administration, user permissions, network traffic analysis, and common attack vectors.",
    webTitle: "Web Development & Client Work", webDescription: "Building responsive websites and applications for diverse industries (restaurants, business portfolios, healthcare, travel) with HTML5, CSS3, JS, and React.",
    creativeTitle: "Design & Video Editing", creativeDescription: "Hands-on experience in Photoshop branding and video editing for YouTube, elevating my attention to UI aesthetics and usability.",
    gamingKicker: "PLAY & STRATEGY ZONE", gamingTitle: "Strategy.<br /><em>Patience. One decisive move.</em>",
    gamingDescription: "Strategy games are mental workouts in resource management, anticipating opponent maneuvers, and decision-making under uncertainty—the exact skills needed when tracking elusive software defects.",
    gamingIdentity: "CHANNEL VISUAL IDENTITY", offlineCaption: "Stream offline screen design — personal graphic project", gamingFoot: "In code as in strategy: a sharp plan and patience win the game.",
    contactKicker: "GET IN TOUCH", contactTitle: "Have an internship or project?<br /><em>Let’s connect.</em>", contactDescription: "Whether you need a dedicated Python backend developer or a meticulous QA tester committed to software quality, I’d love to connect.",
    emailLabel: "Direct Email", whatsappLabel: "WhatsApp / Phone", linkedinLabel: "Abdelrahman Refaat", footerText: "Designed and built by Abdelrahman Refaat Elsayed — Software & QA Engineer", backTop: "Back to top", dialogClose: "Close details", modalNoLink: "Technical Case Study"
  }
};

// CURATED HIGH-IMPACT PROJECTS (REMOVED TRIVIAL BEGINNER LABS)
const projects = [
  {
    id: "guardian", category: ["backend", "security", "qa"], art: "email", accent: "blue",
    code: "https://github.com/AbdelrahmanRefaat-72",
    title: { ar: "Smart Email Guardian (مشروع التخرج)", en: "Smart Email Guardian (Grad Project)" },
    type: { ar: "تطبيق ويب · FastAPI & AI", en: "WEB APP · FASTAPI & AI" },
    summary: { ar: "نظام أمني ذكي لفحص البريد الإلكتروني، كشف الرسائل المشبوهة، والتلخيص بالذكاء الاصطناعي مع إشعارات تيليجرام.", en: "Smart email triage engine detecting suspicious indicators, summarizing via LLM, and dispatching Telegram alerts." },
    details: { ar: "تطبيق يجمع واجهة React مع Backend بـFastAPI وقاعدة SQLite. يتضمن Google OAuth2 بصلاحية قراءة فقط، فحص علامات التصيد والاحتيال، تلخيص الرسائل بنماذج الذكاء الاصطناعي (Gemini / Groq)، وتأمين الجلسات عبر State Cookies.", en: "Combines a React frontend with a FastAPI backend and SQLite. Features Google OAuth2 (read-only Gmail), phishing heuristics, AI summarization (Gemini/Groq), and secure session state cookies." },
    stack: ["Python", "FastAPI", "SQLite", "Google OAuth2", "Gemini API", "Pytest"]
  },
  {
    id: "guardian-tests", category: ["qa", "backend"], art: "console", accent: "teal",
    code: "https://github.com/AbdelrahmanRefaat-72",
    title: { ar: "حزمة اختبارات وفحص Smart Email Guardian", en: "Email Guardian Test Suite (QA)" },
    type: { ar: "حزمة اختبارات آلية · Pytest", en: "AUTOMATED TEST SUITE · PYTEST" },
    summary: { ar: "حزمة اختبارات وحدة وتكامل بـ Pytest للتحقق من أمان الـ OAuth، فحص هجمات الـ Injection، وتتبع سلوك الحدود.", en: "Pytest unit & integration test bench verifying OAuth state validation, injection fuzzing, and boundary constraints." },
    details: { ar: "تطبيق عملي لمفاهيم اختبار البرمجيات على Backend المشروع: محاكاة ردود Google OAuth (Mocking)، اختبار رفض الجلسات منتهية الصلاحية، وفحص تنقية المدخلات من وسوم HTML المشبوهة.", en: "Hands-on QA suite applying mock fixtures for Google OAuth, expired token status assertions (401), and boundary fuzzing against malicious payloads." },
    stack: ["Pytest", "API Testing", "Mocking", "Boundary Value Analysis"]
  },
  {
    id: "gold", category: ["backend", "automation", "data"], art: "store", accent: "lime",
    code: "https://github.com/AbdelrahmanRefaat-72",
    title: { ar: "نظام إدارة محل ذهب شامل", en: "Gold Store Operations System" },
    type: { ar: "برنامج مكتبي · إدارة وبيانات", en: "DESKTOP ERP · PYTHON & DATA" },
    summary: { ar: "برنامج Python متكامل بواجهة PyQt لإدارة المخزون والمبيعات والفواتير والتقارير والنسخ الاحتياطي المشفر.", en: "Full-featured Python PyQt desktop software for gold inventory, sales transactions, automated invoicing, and secured backups." },
    details: { ar: "واجهة PyQt متطورة لإدارة الأصناف، حساب الأسعار بحسب العيار، تسجيل حركة البيع اليومية، طباعة الفواتير، استخراج تقارير الأرباح عبر Pandas/Excel، ونظام أمان للمستخدمين مع مفاتيح تشفير.", en: "PyQt desktop application managing karat-based pricing, sales records, invoice generation, Pandas-powered financial reports, and user access keys." },
    stack: ["Python", "PyQt", "Pandas", "Excel", "Data Security"]
  },
  {
    id: "weekly", category: ["cpp", "data", "qa"], art: "chart", accent: "coral",
    code: "https://github.com/AbdelrahmanRefaat-72/weekly-analyzer",
    title: { ar: "Weekly Analyzer (تحليل البيانات الأسبوعية)", en: "Weekly Analyzer" },
    type: { ar: "برنامج C++ · خوارزميات وتحقق", en: "C++ CONSOLE APP · DATA & QA" },
    summary: { ar: "أداة C++ لإدخال وتحليل القيم اليومية وحساب المتوسطات مع تحقق صارم من صحة المدخلات ومنع أخطاء الحدود.", en: "C++ utility calculating weekly and cumulative statistics with rigorous input validation and edge-case guards." },
    details: { ar: "برنامج C++ يقرأ القيم اليومية، يتحقق من سلامة الأرقام (Input Validation)، ويحسب المتوسطات والإجماليات الأسبوعية والعامة مع معالجة حالات القسمة على صفر والمدخلات غير الرقمية.", en: "C++ console program validating numeric bounds, calculating moving averages and weekly aggregates, with defensive checks against zero-division." },
    stack: ["C++", "Input Validation", "Defensive Logic", "Algorithms"]
  },
  {
    id: "compress", category: ["automation"], art: "compress", accent: "lime",
    code: "assets/source/compress.py",
    title: { ar: "MediaPress · أداة ضغط الملفات والصور", en: "MediaPress · Media Compressor" },
    type: { ar: "أداة CLI سريعة", en: "PYTHON CLI UTILITY" },
    summary: { ar: "أداة سطر أوامر بـ Python لضغط الصور والمجلدات آلياً وحساب نسبة المساحة الموفرة بدقة.", en: "Python CLI tool that batch compresses images with Pillow and packages archives, reporting exact space saved." },
    details: { ar: "تتعامل الأداة مع دفعات الصور عبر Pillow مع تحكم بدرجة الجودة، وتحزم المجلدات في أرشيف ZIP مضغوط، مع طباعة إحصائيات الحجم قبل وبعد الضغط.", en: "Processes image batches with Pillow quality tuning and packages directories into ZIP archives with terminal progress and compression statistics." },
    stack: ["Python", "Pillow", "ZIPfile", "CLI"]
  },
  {
    id: "atm", category: ["automation", "data", "qa"], art: "terminal", accent: "teal",
    code: "https://github.com/AbdelrahmanRefaat-72/simple-ATM",
    title: { ar: "Simple ATM Simulator", en: "Simple ATM Simulator" },
    type: { ar: "تطبيق Python · بيانات وتحقق", en: "PYTHON APP · DATA PERSISTENCE" },
    summary: { ar: "محاكاة نظام صراف آلي يتعامل مع العمليات المصرفية، التحقق من الرصيد وحفظ البيانات في Excel.", en: "Simulates banking transactions (deposits, withdrawals, balance checks) with Pandas Excel persistence." },
    details: { ar: "محاكاة شاملة لتدفق المعاملات البنكية مع تطبيق شروط الحدود (رفض السحب عند عدم كفاية الرصيد، التحقق من كلمة السر، وتحديث ملف Excel فوري).", en: "Banking flow simulation applying boundary condition rules (insufficient funds guard, PIN validation, and instant Excel record synchronization)." },
    stack: ["Python", "Pandas", "Boundary Testing", "Excel"]
  },
  {
    id: "cipher", category: ["security", "cpp"], art: "shield", accent: "teal",
    code: "https://github.com/AbdelrahmanRefaat-72/rail-fence-cipher",
    title: { ar: "Rail Fence Cipher (تشفير السكك)", en: "Rail Fence Cipher" },
    type: { ar: "تطبيق تشفير وأمن", en: "CRYPTOGRAPHY TOOL" },
    summary: { ar: "تطبيق لخوارزمية تشفير وفك تشفير النصوص الكلاسيكية عبر مسارات السكك المتعرجة.", en: "Implementation of the classic transposition cipher algorithm for encrypting and decrypting messages." },
    details: { ar: "تطبيق خوارزمي يوضح مبادئ التبديل المكاني للحروف مع معالجة المسافات والرموز وحالات الحدود.", en: "Algorithmic implementation demonstrating transposition cipher mechanics, matrix indexing, and boundary spacing." },
    stack: ["C++", "Cryptography", "Algorithms"]
  },
  {
    id: "pomodoro", category: ["cpp", "automation"], art: "chart", accent: "amber",
    code: "https://github.com/AbdelrahmanRefaat-72/pomodoro-timer",
    title: { ar: "Pomodoro Productivity Engine", en: "Pomodoro Productivity Engine" },
    type: { ar: "أداة تنظيم الوقت", en: "PRODUCTIVITY TOOL" },
    summary: { ar: "تطبيق زمني يدير دورات العمل والاستراحة آلياً لتحسين التركيز والإنتاجية.", en: "Pomodoro time management tool handling work cycles and breaks with audio/visual status cues." },
    details: { ar: "تطبيق زمني يدير دورات العمل (25 دقيقة) والاستراحة (5 دقائق) مع معالجة الإشعارات والتحكم الصارم في الحالات.", en: "Time management tool managing state machine transitions between work, short breaks, and long breaks." },
    stack: ["Python", "State Machine", "CLI"]
  },
  {
    id: "analysis", category: ["data"], art: "data", accent: "violet", code: "",
    title: { ar: "تحليل بيانات ألعاب الفيديو", en: "Video Games Data Study" },
    type: { ar: "مشروع دراسي · تحليل واستكشاف", en: "ACADEMIC DATA STUDY" },
    summary: { ar: "دراسة استكشافية لمجموعة بيانات ضخمة لألعاب الفيديو واستخراج أنماط المبيعات والتقييمات.", en: "Exploratory study on video game datasets discovering sales trends and platform performance." },
    details: { ar: "تنظيف البيانات، التعامل مع القيم المفقودة، بناء الرسوم البيانية الاستكشافية وتحديد أكثر المنصات نجاحاً عبر التاريخ.", en: "Data cleaning, missing value imputation, exploratory plotting with Matplotlib, and historical platform analysis." },
    stack: ["Python", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    id: "clientweb", category: ["web"], art: "browser", accent: "amber", code: "",
    title: { ar: "مواقع تجارية وخدمية متكاملة", en: "Commercial Client Web Platforms" },
    type: { ar: "تطوير واجهات ويب", en: "FRONTEND WEB DEVELOPMENT" },
    summary: { ar: "مجموعة نماذج ومواقع حقيقية لعملاء في مجالات المطاعم، الرعاية الصحية، التعليم، والسياحة.", en: "Client websites and responsive portals spanning restaurants, healthcare, education, and travel." },
    details: { ar: "بناء صفحات أعمال وواجهات متوافقة مع كل مقاسات الشاشات، مع التركيز على سهولة الوصول وسرعة التحميل والتصميم المتجاوب.", en: "Crafted accessible, fast-loading responsive websites with modern layout systems and interactive interfaces." },
    stack: ["HTML5", "CSS3", "JavaScript", "React"]
  }
];

const certificates = [
  { file: "Abdelrahman Refaat Elsayed.pdf", preview: "Abdelrahman Refaat Elsayed.jpg", category: "security", issuer: "NTI · Fortinet", icon: "FT", title: { ar: "تدريب Fortinet المعتمد للأمن السيبراني", en: "Fortinet Cybersecurity Training" }, meta: { ar: "NTI · 120 ساعة مكثفة · نتيجة امتياز 95% · 2026", en: "NTI · 120 hours · 95% Excellence Score · 2026" } },
  { file: "Red Hat System Administration I.pdf", preview: "Red Hat System Administration I.jpg", category: "linux", issuer: "Red Hat", icon: "RH", title: { ar: "إدارة أنظمة لينكس Red Hat I", en: "Red Hat System Administration I" }, meta: { ar: "إتمام معتمد · 9 ساعات و11 دقيقة", en: "Course completion · 9h 11m" } },
  { file: "Secure Software Development Lifecycle (SSDLC).pdf", preview: "Secure Software Development Lifecycle (SSDLC).jpg", category: "security", issuer: "Mahara-Tech / NTI", icon: "SD", title: { ar: "دورة حياة البرمجيات الآمنة (SSDLC)", en: "Secure Software Development Lifecycle" }, meta: { ar: "أمان البرمجيات وضوابط الجودة · 5 ساعات", en: "Software security & quality gates · 5h" } },
  { file: "Cybersecurity For Beginners.pdf", preview: "Cybersecurity For Beginners.jpg", category: "security", issuer: "Mahara-Tech / NTI", icon: "CS", title: { ar: "أساسيات الأمن السيبراني الشاملة", en: "Cybersecurity For Beginners" }, meta: { ar: "8 دورات متخصصة · 35 ساعة تدريبية", en: "8 specialized courses · 35 hours" } },
  { file: "Ethical Hacking.pdf", preview: "Ethical Hacking.jpg", category: "security", issuer: "Mahara-Tech / NTI", icon: "EH", title: { ar: "الاختراق الأخلاقي وفحص الثغرات", en: "Ethical Hacking Foundations" }, meta: { ar: "فحص الثغرات ومفاهيم الحماية · 3.5 ساعات", en: "Vulnerability analysis & defense · 3.5h" } },
  { file: "Python Programming Basics.pdf", preview: "Python Programming Basics.jpg", category: "programming", issuer: "Mahara-Tech", icon: "Py", title: { ar: "أساسيات البرمجة بلغة Python", en: "Python Programming Basics" }, meta: { ar: "هياكل البيانات والتحكم في التدفق", en: "Data structures & control flow" } },
  { file: "Implementation of Computer Network Fundamentals.pdf", preview: "Implementation of Computer Network Fundamentals.jpg", category: "networks", issuer: "Mahara-Tech", icon: "IP", title: { ar: "تطبيق أساسيات شبكات الحاسب", en: "Implementation of Network Fundamentals" }, meta: { ar: "البروتوكولات وعنونة الشبكات والـ Routing", en: "Protocols, addressing & routing" } },
  { file: "Course_Certificate_En.pdf", preview: "Course_Certificate_En.jpg", category: "networks", issuer: "Cisco / OpenEDG", icon: "NW", title: { ar: "أساسيات شبكات الحاسب (Computer Networks)", en: "Computer Network Fundamentals" }, meta: { ar: "طبقات الشبكات ونموذج OSI", en: "OSI model & network layers" } },
  { file: "Attendance_Certificate.pdf", preview: "Attendance_Certificate.jpg", category: "security", issuer: "NTI", icon: "NS", title: { ar: "مقدمة في أمن الشبكات", en: "Introduction to Network Security" }, meta: { ar: "حضور وتدريب متخصص", en: "Specialized training attendance" } },
  { file: "Cloud and Virtualization Concepts.pdf", preview: "Cloud and Virtualization Concepts.jpg", category: "networks", issuer: "Mahara-Tech", icon: "CL", title: { ar: "مفاهيم السحابة والافتراضية (Cloud)", en: "Cloud & Virtualization Concepts" }, meta: { ar: "البنية السحابية وأنظمة الـ Virtualization", en: "Cloud architectures & hypervisors" } },
  { file: "Network Virtualization Concepts.pdf", preview: "Network Virtualization Concepts.jpg", category: "networks", issuer: "Mahara-Tech", icon: "NV", title: { ar: "مفاهيم افتراضية الشبكات", en: "Network Virtualization Concepts" }, meta: { ar: "الشبكات المعرفة برمجياً والافتراضية", en: "Software defined networking" } }
];

const visualMarkup = {
  email: '<span class="art-caption-label">MAIL / SIGNAL</span><div class="art-email-window"><div class="art-email-head"><span>INBOX / 04</span><b>SCAN</b></div><div class="art-email-row"></div><div class="art-email-row"></div><div class="art-risk">SUSPICIOUS SIGNAL</div></div>',
  store: '<span class="art-caption-label">INVENTORY / SALES</span><div class="art-store"><div class="art-store-header"><span>GOLD / DESK</span><span>LIVE DATA</span></div><div class="art-store-row"><i></i><i></i><b></b></div><div class="art-store-row"><i></i><i></i><b></b></div></div>',
  compress: '<span class="art-caption-label">INPUT → OUTPUT</span><div class="art-compress"><div class="art-file-stack"><i class="art-file"></i><i class="art-file"></i></div><span class="art-compress-arrow">→</span><span class="art-zip">ZIP</span></div>',
  chart: '<span class="art-caption-label">WEEK / TOTAL / AVG</span><span class="art-data-label">ANALYSIS / 01</span><div class="art-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div>',
  data: '<span class="art-caption-label">DATA / EXPLORE</span><span class="art-data-label">ROWS → INSIGHT</span><div class="art-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div>',
  terminal: '<span class="art-caption-label">ACCOUNT / SESSION</span><div class="art-terminal"><span><b>$</b> python atm.py</span><span>1 / login account</span><span><b>→ balance verified</b></span></div>',
  browser: '<span class="art-caption-label">CLIENT / WEB</span><div class="art-browser"><div class="art-browser-head"><i></i><i></i><i></i></div><div class="art-browser-body"><div class="art-browser-lines"><span></span><span></span></div></div></div>',
  shield: '<span class="art-caption-label">CIPHER / CRYPTO</span><div class="art-shield">⌁</div>',
  console: '<span class="art-caption-label">PRACTICE / BUILD</span><div class="art-console"><span><b>$</b> compile --project</span><span>logic.check() <b>✓</b></span><span>input.validate() <b>✓</b></span></div>'
};

const fieldData = {
  data: {
    kicker: { ar: "تحليل البيانات واستخلاص الأنماط", en: "DATA WRANGLING & ANALYSIS" },
    title: { ar: "تحليل البيانات والتعلم الآلي (Data Analytics)", en: "Data Analytics & Machine Learning" },
    body: {
      ar: "دراستي الأكاديمية بقسم الأمن السيبراني وتحليلات البيانات في هندسة منوف منحتني فهماً عميقاً لكيفية التعامل مع البيانات الضخمة. أستخدم Python ومكتبات Pandas وNumPy لتنظيف وتجهيز مجموعات البيانات المعقدة، ومعالجة القيم المفقودة والشاذة، واستخلاص الرؤى الإحصائية وتجسيدها بصرياً عبر Matplotlib وSeaborn.",
      en: "My specialization in Cybersecurity and Data Analytics at Menouf Electronic Engineering provided me with strong analytical rigor. I utilize Python alongside Pandas and NumPy to clean, sanitize, and manipulate tabular datasets, resolving missing records and outliers, and constructing insightful visual dashboards with Matplotlib and Seaborn."
    },
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebooks", "Scikit-Learn (MLP)"],
    highlights: {
      ar: [
        "تنظيف ومعالجة مئات الآلاف من السجلات وبناء خطوط تحويل البيانات (Data Pipelines).",
        "دراسة تحليلية معمقة لبيانات مبيعات ألعاب الفيديو العالمية عبر التاريخ وتحديد أنماط النجاح للمنصات.",
        "بناء نماذج تعلم آلي أولية مثل الشبكات العصبية متعددة الطبقات (MLP) لتصنيف البيانات والتنبؤ."
      ],
      en: [
        "Data pipeline engineering: wrangling and transforming thousands of raw records with Pandas.",
        "Comprehensive empirical study on global video game sales datasets, identifying platform longevity trends.",
        "Implementing foundational machine-learning models, including Multi-Layer Perceptrons (MLP) for classification."
      ]
    }
  },
  security: {
    kicker: { ar: "الأمن السيبراني وهندسة الشبكات", en: "NETWORK DEFENSE & LINUX SYSTEMS" },
    title: { ar: "الأمن السيبراني والشبكات وإدارة لينكس", en: "Cybersecurity, Networks & System Administration" },
    body: {
      ar: "أمتلك تدريباً مهنياً مكثفاً معتمداً من المعهد القومي للاتصالات (NTI) في مسار Fortinet للأمن السيبراني (120 ساعة تدريبية بنتيجة امتياز 95%)، إلى جانب تدريب Red Hat System Administration. أفهم المنظومة الشبكية من أدنى طبقاتها حتى جدران الحماية المتقدمة وسياسات الوصول.",
      en: "I hold accredited vocational training from Egypt's National Telecommunication Institute (NTI) in the Fortinet Cybersecurity Track (120 hours with a 95% Excellence Score), paired with Red Hat System Administration training. I analyze network architectures from foundational packets up to stateful firewall inspection and hardened access policies."
    },
    tools: ["Fortinet Firewalls", "Red Hat Linux (RHEL)", "TCP/IP & OSI Model", "Wireshark", "Routing & Switching", "SSDLC Security Gates"],
    highlights: {
      ar: [
        "إعداد وتكوين جدران الحماية وسياسات الترشيح وتأمين بيئات العمل الشبكية (Firewall Policies & NAT).",
        "إدارة أنظمة Linux: التحكم بالمستخدمين والصلاحيات، مراقبة الخدمات، والتشخيص عبر موجه الأوامر Bash.",
        "تطبيق معايير دورة حياة البرمجيات الآمنة (SSDLC) وفحص بروتوكولات التشفير والتحقق من الشهادات الرقمية."
      ],
      en: [
        "Configuring security policies, perimeter filters, NAT tables, and secure tunnels on enterprise appliances.",
        "Linux administration: permission boundaries, daemon surveillance, storage volume maintenance, and Bash scripting.",
        "Enforcing Secure Software Development Lifecycle (SSDLC) checkpoints and validating cryptographic certificates."
      ]
    }
  },
  web: {
    kicker: { ar: "تطوير تطبيقات الويب الحديثة", en: "MODERN WEB & CLIENT SOLUTIONS" },
    title: { ar: "تطوير واجهات وتطبيقات الويب", en: "Full-Stack & Frontend Web Development" },
    body: {
      ar: "طوّرت مواقع وتطبيقات ويب حقيقية لعملاء في قطاعات متعددة: مطاعم ومطابخ سحابية، شركات خدمات وأعمال، قطاع الرعاية الصحية، ومنصات سياحة وتعليم. أركز على التصميم المتجاوب السريع، وتجربة المستخدم الخالية من التعقيد، وربط الواجهات بالـ APIs الخلفية بسلاسة.",
      en: "I have engineered real-world client websites and portals across diverse commercial domains: food & restaurant menus, corporate business platforms, healthcare clinics, and travel agencies. My focus centers on high-speed responsive layouts, effortless user flows, and tight RESTful API integration."
    },
    tools: ["HTML5 & Modern CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design", "REST API Integration", "UI/UX Usability"],
    highlights: {
      ar: [
        "بناء منصات متجاوبة 100% تتكيف فورياً مع كل أحجام الشاشات من الهواتف حتى الشاشات العريضة.",
        "معمارية كود نظيفة قائمة على المكونات (Component-driven) تسهل التعديل والتوسع المستقبلي.",
        "تحسين سرعة التحميل ومراعاة معايير السيو (SEO) وسهولة الوصول (Accessibility)."
      ],
      en: [
        "100% responsive implementations adapting seamlessly from mobile viewports to ultra-wide displays.",
        "Clean, maintainable component-driven architecture allowing frictionless future feature expansion.",
        "Optimized asset pipelines, fast first-contentful paint, and semantic web accessibility compliance."
      ]
    }
  },
  creative: {
    kicker: { ar: "الهوية البصرية والمحتوى الرقمي", en: "BRANDING, EDITING & CREATIVE FLOW" },
    title: { ar: "التصميم الجرافيكي والمونتاج وصناعة المحتوى", en: "Visual Identity, Video Editing & Content Creation" },
    body: {
      ar: "منذ سنوات وأنا أصنع محتوى الألعاب الاستراتيجية على YouTube وTikTok عبر قناة Refaat Gaming. هذا الشغف علمني برنامج Photoshop باحتراف لتصميم الهويات البصرية والشعارات والـ Thumbnails الجذابة، إلى جانب إتقان المونتاج وسرد القصص المرئية، وهو ما ينعكس بشكل مباشر على حسي العالي في تصميم الواجهات (UI/UX).",
      en: "For years I have created and edited strategy gaming content on YouTube and TikTok under the Refaat Gaming brand. This craft cultivated deep Adobe Photoshop expertise in branding, logos, and click-through thumbnail design, alongside video pacing and visual narrative—giving me an intuitive eye for UI ergonomics and visual polish."
    },
    tools: ["Adobe Photoshop", "Video Editing Suites", "Visual Storytelling", "Stream Brand Assets", "UI Typography & Color Theory"],
    highlights: {
      ar: [
        "تصميم الهوية البصرية المتكاملة لقناة Refaat Gaming: الشعار الرسمي، البانر، وشاشات البث المباشر (Offline Screens).",
        "مونتاج أكثر من 100 فيديو ومحتوى قصير مع التركيز على الإيقاع السريع والتفاعل البصري.",
        "تطبيق نظرية الألوان وتوازن العناصر البصرية في تصاميم واجهات المستخدم والويب."
      ],
      en: [
        "Crafted the complete visual branding system for Refaat Gaming: official identity, channel art, and offline stream assets.",
        "Produced and edited extensive long-form and short-form video content with sharp pacing and engagement hooks.",
        "Directly translating visual harmony, color theory, and typographical contrast into software UI design."
      ]
    }
  }
};

let currentLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "ar";
let currentTheme = localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
let activeFilter = "all";
let activeCertFilter = "all";
const htmlRoot = document.documentElement;
const nav = document.getElementById("primaryNav");
const menuToggle = document.getElementById("menuToggle");
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const projectGrid = document.getElementById("projectGrid");
const projectDialog = document.getElementById("projectDialog");
const viewPanels = [...document.querySelectorAll("main > .view-panel")];
const viewIds = new Set(viewPanels.map((panel) => panel.id));
const pageTitleKeys = { home: "navHome", focus: "navFocus", backend: "navBackend", qa: "navQa", automation: "navAutomation", projects: "navProjects", about: "navAbout", certificates: "navCertificates", more: "navMore", gaming: "navGaming", contact: "navContact" };

function applyLanguage(language) {
  currentLanguage = language;
  const t = translations[language];
  htmlRoot.lang = language;
  htmlRoot.dir = language === "ar" ? "rtl" : "ltr";
  document.title = language === "ar" ? "عبدالرحمن رفعت السيد — مطوّر برمجيات واختبار" : "Abdelrahman Refaat Elsayed — Software & QA Engineer";
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) {
    descEl.content = language === "ar"
      ? "عبدالرحمن رفعت السيد — مهندس برمجيات واختبار (Python Backend & QA Engineer)."
      : "Abdelrahman Refaat Elsayed — Electronic engineering student focused on Python, backend development, and QA testing.";
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (t[key]) element.innerHTML = t[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (t[key]) element.setAttribute("aria-label", t[key]);
  });
  document.querySelectorAll("[data-alt-ar]").forEach((element) => {
    element.alt = language === "ar" ? element.dataset.altAr : element.dataset.altEn;
  });
  document.getElementById("languageLabel").textContent = language === "ar" ? "EN" : "AR";
  languageToggle.setAttribute("aria-label", t.switchLanguage);

  // Update dynamic elements
  const testStatus = document.getElementById("testSuiteStatus");
  if (testStatus && !testStatus.classList.contains("is-running") && !testStatus.classList.contains("is-passed")) {
    testStatus.textContent = t.testStatusReady;
  }
  const testSummary = document.getElementById("testSummaryBar");
  if (testSummary && !testSummary.querySelector("strong")) {
    testSummary.textContent = t.testSummaryInitial;
  }
  const bugReward = document.getElementById("bugRewardCard");
  const bugTarget = document.querySelector(".code-line.is-bug-target");
  if (bugReward && (!bugTarget || !bugTarget.classList.contains("is-bug-found"))) {
    bugReward.hidden = true;
  }

  setMenuLabel(false);
  updateThemeControls();
  renderProjects();
  renderCertificates();
  renderHomeOverview();
  updateCurrentPageTitle();
  localStorage.setItem("portfolio-language", language);
}

function updateThemeControls() {
  const t = translations[currentLanguage];
  const toLight = currentTheme === "light";
  document.getElementById("themeIcon").textContent = toLight ? "☾" : "☼";
  document.getElementById("themeLabel").textContent = toLight ? (currentLanguage === "ar" ? "داكن" : "Dark") : (currentLanguage === "ar" ? "فاتح" : "Light");
  themeToggle.setAttribute("aria-label", toLight ? t.switchToDark : t.switchToLight);
}

function applyTheme(theme) {
  currentTheme = theme === "light" ? "light" : "dark";
  htmlRoot.dataset.theme = currentTheme;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = currentTheme === "light" ? "#f5f4ed" : "#111313";
  updateThemeControls();
  localStorage.setItem("portfolio-theme", currentTheme);
}

function getCategoryLabel(category) {
  const labels = {
    backend: "Backend",
    qa: "QA & Testing",
    automation: "Automation",
    data: currentLanguage === "ar" ? "تحليل بيانات" : "Data Analysis",
    web: currentLanguage === "ar" ? "تطوير ويب" : "Web Dev",
    security: currentLanguage === "ar" ? "أمن وشبكات" : "Security",
    cpp: "C++"
  };
  return labels[category] || category;
}

function renderProjects() {
  const visibleProjects = projects.filter((project) => activeFilter === "all" || project.category.includes(activeFilter));
  projectGrid.innerHTML = visibleProjects.map((project) => `
    <article class="project-card reveal is-visible" data-project-id="${project.id}" data-category="${project.category[0]}" style="--card-accent: var(--project-accent-${project.accent});">
      <div class="project-art art--${project.art}" aria-hidden="true">${visualMarkup[project.art] || ""}</div>
      <div class="project-card-body">
        <div class="project-meta"><span>${project.type[currentLanguage]}</span><span class="project-badge">${getCategoryLabel(project.category[0])}</span></div>
        <h3>${project.title[currentLanguage]}</h3>
        <p>${project.summary[currentLanguage]}</p>
        <div class="project-card-footer">
          <div class="project-tech">${project.stack.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("<b>·</b>")}</div>
          <button class="project-open" type="button" data-open-project="${project.id}"><span>${translations[currentLanguage].detailsButton}</span><span>↗</span></button>
        </div>
      </div>
    </article>`).join("");
  document.getElementById("projectCount").textContent = String(visibleProjects.length).padStart(2, "0");
  initTiltCards();
}

function renderCertificates() {
  const t = translations[currentLanguage];
  const grid = document.getElementById("certVisualGrid");
  if (!grid) return;

  const filtered = certificates.filter(
    (c) => activeCertFilter === "all" || c.category === activeCertFilter
  );

  grid.innerHTML = filtered.map((cert) => {
    const previewUrl = `assets/certificates/previews/${encodeURIComponent(cert.preview)}`;
    const pdfUrl = `assets/certificates/${encodeURIComponent(cert.file)}`;
    const title = cert.title[currentLanguage];
    const meta = cert.meta[currentLanguage];

    return `
      <article class="cert-card-visual reveal is-visible" data-cert-cat="${cert.category}">
        <div class="cert-preview-wrap" data-zoom-src="${previewUrl}" data-zoom-title="${title}">
          <span class="cert-badge-issuer">${cert.issuer}</span>
          <img src="${previewUrl}" alt="${title}" class="cert-preview-img" loading="lazy" />
          <div class="cert-preview-overlay">
            <span class="cert-preview-zoom-btn">🔍 ${t.certZoomBtn}</span>
          </div>
        </div>
        <div class="cert-card-info">
          <h3 class="cert-card-title">${title}</h3>
          <p class="cert-card-meta">${meta}</p>
          <div class="cert-card-actions">
            <button type="button" class="cert-action-btn cert-action-btn--preview" data-zoom-src="${previewUrl}" data-zoom-title="${title}">
              <span>🔍 ${t.certZoomBtn}</span>
            </button>
            <a href="${pdfUrl}" target="_blank" rel="noreferrer" class="cert-action-btn cert-action-btn--pdf">
              <span>📄 ${t.certPdfBtn} ↗</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-zoom-src]").forEach((el) => {
    el.addEventListener("click", () => {
      openCertLightbox(el.dataset.zoomSrc, el.dataset.zoomTitle);
    });
  });
}

function openCertLightbox(src, title) {
  const lightbox = document.getElementById("certLightbox");
  const img = document.getElementById("certLightboxImg");
  const titleEl = document.getElementById("certLightboxTitle");
  if (!lightbox || !img) return;

  img.src = src;
  img.alt = title;
  if (titleEl) titleEl.textContent = title;
  lightbox.showModal();
}

function setMenuLabel(open) {
  const t = translations[currentLanguage];
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? t.menuClose : t.menuOpen);
  nav.setAttribute("aria-hidden", String(!open));
  nav.classList.toggle("is-open", open);
  document.getElementById("navBackdrop").classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

function updateCurrentPageTitle() {
  const t = translations[currentLanguage];
  const activePanel = viewPanels.find((panel) => panel.classList.contains("is-active"));
  const title = t[pageTitleKeys[activePanel?.id] || "navHome"];
  document.getElementById("currentPageTitle").textContent = title;
  document.title = currentLanguage === "ar"
    ? `${title} — عبدالرحمن رفعت السيد`
    : `${title} — Abdelrahman Refaat Elsayed`;
}

function renderHomeOverview() {
  const projectPreview = document.getElementById("homeProjectPreview");
  if (projectPreview) {
    projectPreview.innerHTML = projects.slice(0, 3).map((project) => `
      <a class="home-project-row" href="#projects" data-filter-link="${project.category[0]}">
        <span class="home-project-mark">${project.title[currentLanguage].slice(0, 1)}</span>
        <span class="home-project-copy"><b>${project.title[currentLanguage]}</b><small>${project.summary[currentLanguage]}</small></span>
        <span class="home-project-arrow">↗</span>
      </a>`).join("") || `<p class="home-empty">${translations[currentLanguage].homeProjectsEmpty}</p>`;
  }

  const certificatePreview = document.getElementById("homeCertificatePreview");
  if (certificatePreview) {
    certificatePreview.innerHTML = certificates.slice(0, 3).map((certificate) => {
      const path = `assets/certificates/${encodeURIComponent(certificate.file)}`;
      return `<a class="home-cert-row" href="${path}" target="_blank" rel="noreferrer"><span class="home-cert-icon">${certificate.icon}</span><span><b>${certificate.title[currentLanguage]}</b><small>${certificate.meta[currentLanguage]}</small></span><span class="home-project-arrow">↗</span></a>`;
    }).join("");
  }
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;
  const t = translations[currentLanguage];
  document.getElementById("dialogKicker").textContent = `${project.type[currentLanguage]} / ${project.stack.slice(0, 2).join(" · ")}`;
  document.getElementById("dialogTitle").textContent = project.title[currentLanguage];
  document.getElementById("dialogDescription").textContent = project.details[currentLanguage];
  document.getElementById("dialogTags").innerHTML = project.stack.map((tag) => `<span>${tag}</span>`).join("");
  document.getElementById("dialogArt").innerHTML = visualMarkup[project.art] || "";
  const link = document.getElementById("dialogLink");
  const linkLabel = document.getElementById("dialogLinkLabel");
  if (project.code) {
    link.href = project.code;
    link.hidden = false;
    linkLabel.textContent = project.code.endsWith(".py") ? (currentLanguage === "ar" ? "تحميل الكود المصدري" : "Download Source (.py)") : (currentLanguage === "ar" ? "فتح الكود على GitHub ↗" : "View Repository on GitHub ↗");
  } else {
    link.hidden = false;
    link.href = "https://github.com/AbdelrahmanRefaat-72";
    linkLabel.textContent = currentLanguage === "ar" ? "استعراض حساب GitHub ↗" : "Visit GitHub Profile ↗";
  }
  if (!projectDialog.open) projectDialog.showModal();
}

function activateView(requestedId, { writeHash = true, resetScroll = true } = {}) {
  const activeId = viewIds.has(requestedId) ? requestedId : "home";
  viewPanels.forEach((panel) => panel.classList.toggle("is-active", panel.id === activeId));
  document.querySelectorAll(".primary-nav a[href^='#']").forEach((link) => {
    link.classList.toggle("is-current", link.getAttribute("href") === `#${activeId}`);
  });
  setMenuLabel(false);
  updateCurrentPageTitle();
  if (writeHash && window.location.hash !== `#${activeId}`) {
    try {
      window.history.pushState(null, "", `#${activeId}`);
    } catch {
      window.location.hash = activeId;
    }
  }
  if (resetScroll) window.scrollTo({ top: 0, behavior: "auto" });
  observeReveals();
}

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
}

// -------------------------------------------------------------
// INTERACTIVE CLI TERMINAL SIMULATOR (BILINGUAL)
// -------------------------------------------------------------
function getTerminalResponses(lang) {
  if (lang === "ar") {
    return {
      whoami: {
        cmd: "whoami",
        res: "عبدالرحمن رفعت السيد · هندسة إلكترونية بمنوف (أمن سيبراني وتحليلات بيانات). مطور Python Backend وفاحص QA."
      },
      stack: {
        cmd: "cat stack.json",
        res: "لغات: Python 3.12, C++, SQL, JS | أطر عمل: FastAPI, PyQt, Pytest, Pandas | أنظمة: Red Hat Linux, Fortinet, Git."
      },
      run_test: {
        cmd: "pytest -q tests/test_sanity.py",
        res: "[PASS] 5 passed in 0.14s (Email scan: OK, OAuth state: OK, Boundary check: OK, Zero-div guard: OK)"
      },
      gaming: {
        cmd: "refaat-gaming --status",
        res: "قناة Refaat Gaming | ألعاب استراتيجية: Rise of Kingdoms, Stronghold, Sea of Thieves, PUBG | تركيز تكتيكي وصبر."
      }
    };
  }
  return {
    whoami: {
      cmd: "whoami",
      res: "Abdelrahman Refaat Elsayed · Electronic Engineering @ Menouf Univ (Cybersecurity & Data). Python Backend Builder & QA Explorer."
    },
    stack: {
      cmd: "cat stack.json",
      res: "Languages: Python 3.12, C++, SQL, JS | Frameworks: FastAPI, PyQt, Pytest, Pandas | Systems: Red Hat Linux, Fortinet Firewalls, Git."
    },
    run_test: {
      cmd: "pytest -q tests/test_sanity.py",
      res: "[PASS] 5 passed in 0.14s (Email scan: OK, OAuth state: OK, Boundary check: OK, Zero-div guard: OK)"
    },
    gaming: {
      cmd: "refaat-gaming --status",
      res: "Channel: Refaat Gaming | Genres: Strategy & Tactics (Rise of Kingdoms, Stronghold, Sea of Thieves, PUBG) | Calculated patience."
    }
  };
}

function initHeroTerminal() {
  const terminalBody = document.getElementById("heroTerminalOutput");
  const buttons = document.querySelectorAll(".t-action-btn");
  if (!terminalBody || !buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.tcmd;
      const data = getTerminalResponses(currentLanguage)[key];
      if (!data) return;

      const lineHtml = `
        <div class="terminal-line"><span class="t-prompt">$</span> <span class="t-cmd">${data.cmd}</span></div>
        <div class="terminal-res ${key === 'run_test' ? 't-success' : ''}">${data.res}</div>
      `;
      terminalBody.insertAdjacentHTML("beforeend", lineHtml);
      terminalBody.scrollTop = terminalBody.scrollHeight;
    });
  });
}

// -------------------------------------------------------------
// INTERACTIVE API CONSOLE (BACKEND PAGE)
// -------------------------------------------------------------
const apiScenarios = {
  auth: {
    badge: "HTTP 200 OK",
    badgeClass: "status-200",
    latency: "18ms latency",
    output: `{
  "status": "authenticated",
  "provider": "google_oauth2",
  "user": {
    "name": "Abdelrahman Refaat",
    "email": "abdelrahmanrefaat127@gmail.com",
    "scope": ["gmail.readonly", "profile"]
  },
  "csrf_state_token": "verified_http_only_cookie",
  "expires_in": 3600
}`
  },
  scan: {
    badge: "HTTP 200 OK",
    badgeClass: "status-200",
    latency: "24ms latency",
    output: `{
  "verdict": "FLAGGED_SUSPICIOUS",
  "risk_score": 0.88,
  "heuristics_matched": [
    "UNEXPECTED_SENDER_DOMAIN",
    "URGENT_ACTION_DEMAND",
    "MISMATCHED_REDIRECT_URL"
  ],
  "ai_summary": "Email demands password reset within 24h. Phishing payload quarantined.",
  "action_taken": "Quarantined and Telegram webhook alert dispatched"
}`
  },
  gold: {
    badge: "HTTP 200 OK",
    badgeClass: "status-200",
    latency: "12ms latency",
    output: `{
  "store_status": "ONLINE",
  "inventory_summary": {
    "karat_24_weight_grams": 450.25,
    "karat_21_weight_grams": 1280.80,
    "karat_18_weight_grams": 640.10
  },
  "daily_transactions_count": 34,
  "last_backup": "2026-11-12T12:00:00Z",
  "integrity_status": "Pandas DataFrame synchronized with security.key"
}`
  }
};

function initApiConsole() {
  const buttons = document.querySelectorAll(".api-btn");
  const badge = document.getElementById("apiStatusBadge");
  const latency = document.getElementById("apiLatency");
  const output = document.getElementById("apiConsoleOutput");
  if (!buttons.length || !output) return;

  function setEndpoint(key) {
    const data = apiScenarios[key] || apiScenarios.auth;
    badge.textContent = data.badge;
    badge.className = `status-badge ${data.badgeClass}`;
    latency.textContent = data.latency;
    output.textContent = data.output;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      setEndpoint(btn.dataset.endpoint);
    });
  });

  setEndpoint("auth");
}

// -------------------------------------------------------------
// INTERACTIVE QA TEST RUNNER BENCH (QA PAGE)
// -------------------------------------------------------------
function initTestRunner() {
  const btnRun = document.getElementById("btnRunTests");
  const rows = document.querySelectorAll(".test-case-row");
  const statusTag = document.getElementById("testSuiteStatus");
  const summaryBar = document.getElementById("testSummaryBar");
  if (!btnRun || !rows.length) return;

  let isRunning = false;

  btnRun.addEventListener("click", () => {
    if (isRunning) return;
    isRunning = true;
    btnRun.disabled = true;
    btnRun.style.opacity = "0.6";

    const isAr = currentLanguage === "ar";
    statusTag.textContent = isAr ? "جاري الفحص..." : "EXECUTING TESTS...";
    statusTag.className = "runner-tag is-running";
    summaryBar.innerHTML = `<span style="color: #ffbd2e;">[RUN] ${isAr ? "تشغيل حزمة Pytest على المسارات الحرجة للتطبيق..." : "Running Pytest suite on critical application paths..."}</span>`;

    // Reset rows
    rows.forEach((row) => {
      row.className = "test-case-row";
      row.querySelector(".tc-icon").textContent = "○";
      row.querySelector(".tc-badge").textContent = isAr ? "قيد التشغيل" : "Running...";
      row.querySelector(".tc-badge").style.color = "#ffbd2e";
      row.querySelector(".tc-time").textContent = "--";
    });

    let currentStep = 0;
    const testTimes = ["0.04s", "0.03s", "0.05s", "0.02s", "0.04s"];

    function executeNext() {
      if (currentStep < rows.length) {
        const row = rows[currentStep];
        row.classList.add("is-active");

        setTimeout(() => {
          row.classList.remove("is-active");
          row.classList.add("is-passed");
          row.querySelector(".tc-icon").textContent = "✓";
          row.querySelector(".tc-badge").textContent = "PASSED";
          row.querySelector(".tc-badge").style.color = "";
          row.querySelector(".tc-time").textContent = testTimes[currentStep];
          currentStep++;
          executeNext();
        }, 220);
      } else {
        // Complete
        isRunning = false;
        btnRun.disabled = false;
        btnRun.style.opacity = "1";
        statusTag.textContent = isAr ? "اجتياز كامل (5/5)" : "ALL TESTS PASSED (5/5)";
        statusTag.className = "runner-tag is-passed";
        summaryBar.innerHTML = isAr ? `
          <strong style="color: #76d5bd;">[PASS] تم اجتياز 5 اختبارات في 0.18 ثانية — تغطية كاملة للحدود والمدخلات!</strong>
          <div style="font-size: 11.5px; color: #a4aea0; margin-top: 3px;">تم التحقق من حماية الجلسات، منع القسمة على صفر، والتعامل مع المدخلات الشاذة بنجاح.</div>
        ` : `
          <strong style="color: #76d5bd;">[PASS] 5 passed in 0.18s — 100% Boundary & Input Coverage Achieved!</strong>
          <div style="font-size: 11.5px; color: #a4aea0; margin-top: 3px;">All defensive bounds, authentication cookies, and division guards verified successfully.</div>
        `;
      }
    }

    setTimeout(executeNext, 150);
  });
}

// -------------------------------------------------------------
// BUG HUNTER CHALLENGE (QA PAGE)
// -------------------------------------------------------------
function initBugChallenge() {
  const bugTarget = document.querySelector(".code-line.is-bug-target");
  const rewardCard = document.getElementById("bugRewardCard");
  if (!bugTarget || !rewardCard) return;

  rewardCard.hidden = true;

  bugTarget.addEventListener("click", () => {
    bugTarget.classList.add("is-bug-found");
    rewardCard.hidden = false;
    rewardCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

// -------------------------------------------------------------
// 3D TILT EFFECT ON CARDS
// -------------------------------------------------------------
function initTiltCards() {
  const cards = document.querySelectorAll(".home-path-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotX = ((y - midY) / midY) * -5;
      const rotY = ((x - midX) / midX) * 5;
      card.style.transform = `perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initFieldDialog() {
  const cards = document.querySelectorAll(".interest-card[data-field]");
  const dialog = document.getElementById("fieldDialog");
  const closeBtn = document.getElementById("fieldDialogClose");
  const kickerEl = document.getElementById("fieldDialogKicker");
  const titleEl = document.getElementById("fieldDialogTitle");
  const bodyEl = document.getElementById("fieldDialogBody");

  if (!cards.length || !dialog) return;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const fieldKey = card.dataset.field;
      const data = fieldData[fieldKey];
      if (!data) return;

      const lang = currentLanguage;
      if (kickerEl) kickerEl.textContent = data.kicker[lang];
      if (titleEl) titleEl.textContent = data.title[lang];

      const highlightsHtml = data.highlights[lang].map((h) => `<li>${h}</li>`).join("");
      const tagsHtml = data.tools.map((tool) => `<span>${tool}</span>`).join("");

      const sectionTitleTools = lang === "ar" ? "الأدوات والتقنيات الأساسية:" : "Core Tools & Technologies:";
      const sectionTitleHighlights = lang === "ar" ? "أبرز الإنجازات والتطبيقات العملية:" : "Key Accomplishments & Applied Projects:";

      bodyEl.innerHTML = `
        <p>${data.body[lang]}</p>
        <div class="field-dialog-section-title">${sectionTitleTools}</div>
        <div class="field-dialog-tags">${tagsHtml}</div>
        <div class="field-dialog-section-title">${sectionTitleHighlights}</div>
        <ul class="field-dialog-highlights">${highlightsHtml}</ul>
      `;

      dialog.showModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
}

function initCertFilters() {
  const filterBtns = document.querySelectorAll(".cert-filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeCertFilter = btn.dataset.certFilter;
      renderCertificates();
    });
  });

  const certClose = document.getElementById("certLightboxClose");
  const certLightbox = document.getElementById("certLightbox");
  if (certClose && certLightbox) {
    certClose.addEventListener("click", () => certLightbox.close());
    certLightbox.addEventListener("click", (e) => {
      if (e.target === certLightbox) certLightbox.close();
    });
  }
}

// -------------------------------------------------------------
// EVENT LISTENERS & SETUP
// -------------------------------------------------------------
languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "ar" ? "en" : "ar"));
themeToggle.addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
menuToggle.addEventListener("click", () => setMenuLabel(menuToggle.getAttribute("aria-expanded") !== "true"));
document.getElementById("drawerClose").addEventListener("click", () => setMenuLabel(false));
document.getElementById("navBackdrop").addEventListener("click", () => setMenuLabel(false));
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuLabel(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuLabel(false);
    if (projectDialog.open) projectDialog.close();
    const fieldDialog = document.getElementById("fieldDialog");
    if (fieldDialog && fieldDialog.open) fieldDialog.close();
    const certLightbox = document.getElementById("certLightbox");
    if (certLightbox && certLightbox.open) certLightbox.close();
  }
});
document.getElementById("dialogClose").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

projectGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-project]");
  if (button) openProject(button.dataset.openProject);
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((filter) => filter.classList.toggle("is-active", filter === button));
    renderProjects();
  });
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-filter-link]");
  if (!link) return;
  const filterVal = link.dataset.filterLink;
  const filterButton = document.querySelector(`.filter-button[data-filter="${filterVal}"]`);
  if (filterButton) {
    activeFilter = filterVal;
    document.querySelectorAll(".filter-button").forEach((btn) => btn.classList.toggle("is-active", btn === filterButton));
    renderProjects();
  }
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#']");
  if (!link) return;
  const targetHref = link.getAttribute("href");
  if (targetHref === "#") return;
  const requestedId = decodeURIComponent(targetHref.slice(1));
  if (!viewIds.has(requestedId)) return;
  
  if (requestedId === "projects" && !link.hasAttribute("data-filter-link")) {
    activeFilter = "all";
    document.querySelectorAll(".filter-button").forEach((filter) => filter.classList.toggle("is-active", filter.dataset.filter === "all"));
    renderProjects();
  }
  event.preventDefault();
  activateView(requestedId);
});

window.addEventListener("hashchange", () => activateView(window.location.hash.slice(1), { writeHash: false }));
window.addEventListener("popstate", () => activateView(window.location.hash.slice(1), { writeHash: false }));
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById("scrollProgress").style.width = `${progress}%`;
  document.getElementById("siteHeader").classList.toggle("is-scrolled", window.scrollY > 28);
}, { passive: true });

// Gaming imagery localization
document.querySelectorAll(".gaming-banner-frame img").forEach((image) => {
  image.dataset.altAr = "بانر قناة Refaat Gaming";
  image.dataset.altEn = "Refaat Gaming channel banner";
});
document.querySelectorAll(".gaming-logo").forEach((image) => {
  image.dataset.altAr = "شعار قناة Refaat Gaming";
  image.dataset.altEn = "Refaat Gaming logo";
});
document.querySelectorAll(".offline-card img").forEach((image) => {
  image.dataset.altAr = "تصميم شاشة البث لقناة Refaat Gaming";
  image.dataset.altEn = "Refaat Gaming stream screen design";
});

// Initialize Everything
applyLanguage(currentLanguage);
applyTheme(currentTheme);
activateView(window.location.hash.slice(1) || "home", { writeHash: false, resetScroll: false });
observeReveals();
initHeroTerminal();
initApiConsole();
initTestRunner();
initBugChallenge();
initTiltCards();
initFieldDialog();
initCertFilters();
