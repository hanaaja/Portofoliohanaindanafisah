/*
  DATA WEBSITE HANA INDA NAFISAH
  Sumber data: CV "Program Officer_ Hana Inda Nafisah(2).pdf" yang diunggah.
  Semua foto/gambar berada dalam folder assets/ dan menggunakan format PNG.
  Gambar proyek adalah ilustrasi editorial, BUKAN hasil pengukuran atau screenshot asli.
  Ubah nama file di image untuk menggantinya dengan PNG dokumentasi proyek asli.
*/
window.portfolioData = {
  profile: {
    name: "Hana Inda Nafisah",
    role: "Telecommunication Engineering Graduate",
    heroTagline: "Telecommunication engineer working across RF, 5G, network analysis, and technology-driven innovation.",
    email: "haindanafisah@gmail.com",
    linkedin: "https://www.linkedin.com/in/hanaindanafisah/",
    photo: "assets/foto-hana.png",
    education: "Bachelor of Telecommunication Engineering",
    university: "Telkom University",
    studyPeriod: "2022–2026",
    gpa: "3.31 / 4.00",
    summary: "Telecommunication Engineering graduate with hands-on experience in 5G NR drive testing, RF planning, network performance analysis, and telecommunications infrastructure. Interested in applying data-driven engineering and problem solving to real-world challenges.",
  },
  projects: [
    {
      id: "zero-day",
      title: "ZERO-DAY DETECTION",
      subtitle: "Machine Learning-Based Network Intrusion Prevention System",
      category: "network",
      categoryLabel: "NETWORK SECURITY / THESIS",
      period: "2026",
      image: "assets/project-zero-day.png",
      context: "Undergraduate final thesis · Telkom University",
      summary: "Design of a machine learning-based Network Intrusion Prevention System (NIPS) for detecting zero-day attacks, incorporating monitoring features.",
      scope: "An academic system-design project focused on the challenges of recognizing previously unseen intrusion patterns and including monitoring in a proposed network-security workflow.",
      activities: ["Researched the design of a machine-learning-based network intrusion prevention system.", "Developed a system concept focused on zero-day attack detection and monitoring capabilities.", "Documented the thesis design as part of the Bachelor's degree requirements."],
      outcome: "Final thesis topic completed as stated in the CV. Detection accuracy, testing results, and deployment status are not specified in the source document.",
      tools: ["Machine Learning", "Network Security", "NIPS", "Monitoring", "Research"]
    },
    {
      id: "drive-test",
      title: "5G NR DRIVE TEST",
      subtitle: "Surakarta Field Measurement Campaign",
      category: "wireless",
      categoryLabel: "WIRELESS / FIELD MEASUREMENT",
      period: "2024–2025",
      image: "assets/project-drive-test.png",
      context: "Basic Transmission Laboratory · Telkom University",
      summary: "Conducted a 5G NR drive-test campaign in Surakarta, collecting measurements of radio and network performance in the field.",
      scope: "On-site measurement of wireless-network indicators and their relationship to locations and mobility conditions.",
      activities: ["Collected RSRP, SNR, throughput, mobility, and geospatial parameters.", "Supported field measurement and technical documentation activities.", "Used network measurement tools to understand observed coverage and service performance."],
      outcome: "Field measurement experience covering five categories of network/geospatial parameters. The CV does not provide numeric measurement results.",
      tools: ["5G NR", "RSRP", "SNR", "Throughput", "Mobility", "G-NetTrack Pro"]
    },
    {
      id: "rf-planning",
      title: "RF COVERAGE PLANNING",
      subtitle: "Radio Coverage Analysis — Gunukan, Semarang",
      category: "wireless",
      categoryLabel: "WIRELESS / RF ENGINEERING",
      period: "2024–2025",
      image: "assets/project-rf-planning.png",
      context: "Basic Transmission Laboratory · Telkom University",
      summary: "Conducted radio network coverage mapping and RF planning using Atoll for the Gunukan area, Semarang.",
      scope: "A radio-frequency planning and geographic coverage visualization assignment using professional RF software.",
      activities: ["Used Atoll for network coverage mapping and RF planning.", "Studied radio-network planning requirements in a defined geographic area.", "Combined telecommunication engineering fundamentals with coverage visualization."],
      outcome: "Practical experience using Atoll for radio-network coverage mapping. No simulation scores or coverage percentages are claimed.",
      tools: ["Atoll", "RF Planning", "Coverage Mapping", "Radio Networks"]
    },
    {
      id: "antenna",
      title: "ANTENNA ENGINEERING",
      subtitle: "Microstrip, MIMO, UWB & Parabolic Antenna Work",
      category: "wireless",
      categoryLabel: "WIRELESS / ANTENNA DESIGN",
      period: "2024–2025",
      image: "assets/project-antenna.png",
      context: "Basic Transmission Laboratory · Telkom University",
      summary: "Designed, simulated, and fabricated microstrip patch, MIMO, parabolic reflector, and UWB antennas using CST Studio Suite.",
      scope: "Hands-on laboratory work across several antenna types, linking electromagnetic theory with model design, simulation, and fabrication.",
      activities: ["Created antenna models and simulations in CST Studio Suite.", "Worked with microstrip patch, MIMO, parabolic reflector, and UWB antenna types.", "Participated in technical laboratory training on RF engineering and transmission systems."],
      outcome: "Practical antenna design, simulation, and fabrication experience documented in the CV. Specific performance measurements are not provided.",
      tools: ["CST Studio Suite", "MIMO", "Microstrip Patch", "UWB", "Electromagnetics"]
    },
    {
      id: "kai",
      title: "INFRASTRUCTURE MAPPING",
      subtitle: "QGIS Analysis & Monitoring — KAI DAOP 6",
      category: "network",
      categoryLabel: "INFRASTRUCTURE / DATA ANALYTICS",
      period: "JUL–SEP 2025",
      image: "assets/project-kai.png",
      context: "Internship · PT Kereta Api Indonesia (Persero), DAOP 6 Yogyakarta",
      summary: "Mapped and analyzed telecommunication and signaling infrastructure assets using geospatial and maintenance data, alongside a monitoring dashboard.",
      scope: "Infrastructure inspection, asset status analysis, monitoring visualization, and disturbance-pattern review to support maintenance planning.",
      activities: ["Mapped and analyzed 11 telecommunications and signaling infrastructure assets using QGIS.", "Classified assets into three operational-status categories and identified two maintenance-priority patterns.", "Developed a two-page monitoring dashboard with two maintenance indicators.", "Analyzed 10 technical disturbance records and joined field inspections of fiber optic, IP, and signaling equipment."],
      outcome: "11 mapped assets, 3 status categories, 2 maintenance-priority patterns, a 2-page dashboard, and analysis of 10 disturbance records, according to the CV.",
      tools: ["QGIS", "Asset Mapping", "Dashboard", "Data Analysis", "Fiber Optic", "IP Networking"]
    },
    {
      id: "aqua",
      title: "AQUA-GROWTH",
      subtitle: "IoT Aquaponics with pH and Moisture Sensors",
      category: "iot",
      categoryLabel: "IOT / COMMUNITY PROJECT",
      period: "UNIVERSITY PROJECT",
      image: "assets/project-aqua-growth.png",
      context: "Community service project · Kampung Batik Pasundan",
      summary: "Worked on an aquaponic growth system integrating pH and moisture sensors for a batik-wastewater management context.",
      scope: "Community-oriented IoT application exploring environmental monitoring inputs in an aquaponic growth system.",
      activities: ["Participated in the AQUA-GROWTH community service project team.", "Contributed to an IoT aquaponic system integrating pH and moisture sensing.", "Connected sensor monitoring concepts to local wastewater management needs."],
      outcome: "An IoT aquaponics project described in the CV. Field performance and treatment effectiveness are not specified.",
      tools: ["IoT", "Aquaponics", "pH Sensor", "Moisture Sensor", "Community Service"]
    },
    {
      id: "tomato",
      title: "SMART FARMING IOT",
      subtitle: "Sensor-Based Tomato Pest Detection Concept",
      category: "iot",
      categoryLabel: "IOT / SMART AGRICULTURE",
      period: "UNIVERSITY PROJECT",
      image: "assets/project-tomato.png",
      context: "Community Service Learning · Margamukti Village, Bandung",
      summary: "Developed an IoT-based system for detecting pests in tomato plants using temperature and humidity sensors.",
      scope: "An environmental-sensing solution designed for pest-detection applications in tomato cultivation.",
      activities: ["Developed a sensor-oriented IoT project for tomato-plant monitoring.", "Used temperature and humidity as sensing inputs.", "Participated in community service learning in Margamukti Village."],
      outcome: "Community IoT project documented in the CV. Accuracy of pest detection is not specified.",
      tools: ["IoT", "Temperature Sensor", "Humidity Sensor", "Smart Farming"]
    },
    {
      id: "innovation",
      title: "HUMAN × AI INNOVATION",
      subtitle: "GenBI Innovation Zone 1.0 — National Business Plan",
      category: "innovation",
      categoryLabel: "INNOVATION / BUSINESS STRATEGY",
      period: "2026",
      image: "assets/project-innovation.png",
      context: "National Business Plan Competition · GenBI Innovation Zone 1.0",
      summary: "Led a team to develop and pitch an innovative business plan combining Human Intelligence and Artificial Intelligence.",
      scope: "National-level business plan development connecting strategy, innovation, human judgment, and AI opportunities.",
      activities: ["Served as Team Leader and coordinated business-plan development.", "Organized team strategy, mentoring, and final pitching.", "Integrated Human Intelligence and Artificial Intelligence in the business-plan concept."],
      outcome: "3rd Place — National Business Plan Competition, GenBI Innovation Zone 1.0 (2026).",
      tools: ["Business Strategy", "Innovation", "Artificial Intelligence", "Leadership", "Pitching"]
    }
  ],
  experience: [
    { period: "JUL 2025 — SEP 2025", company: "PT KERETA API INDONESIA", subtitle: "DAOP 6, Yogyakarta · Infrastructure & Technical Analysis", points: ["Mapped 11 telecommunications and signaling assets with QGIS and reviewed maintenance-status data.", "Built a two-page monitoring dashboard and analyzed 10 technical disturbance records.", "Joined inspections of signaling, fiber-optic transmission, and IP-based infrastructure."] },
    { period: "JAN 2025 — FEB 2025", company: "PT INFOMEDIA NUSANTARA", subtitle: "Bandung · Network Monitoring & Service Quality Control", points: ["Monitored network traffic and service-performance indicators for potential abnormalities.", "Supported service quality control, technical troubleshooting, and issue escalation."] },
    { period: "SEP 2024 — SEP 2025", company: "BASIC TRANSMISSION LAB", subtitle: "Telkom University · Laboratory Engineering", points: ["Designed, simulated, and fabricated multiple antenna types using CST Studio Suite.", "Conducted RF planning with Atoll and a 5G NR drive-test campaign in Surakarta.", "Led technical training in RF engineering, antenna design, and transmission systems."] },
    { period: "AUG 2023 — AUG 2025", company: "BASIC PHYSICS LAB", subtitle: "Telkom University · Practicum Assistant", points: ["Supported undergraduate engineering physics practicum and technical training.", "Planned and conducted internal training, upgrading, and laboratory engagement activities."] }
  ],
  awards: [
    { year: "2025", name: "TOP 10 FINALIST", event: "ZTE Indonesia Business Plan Competition" },
    { year: "2023", name: "RUNNER-UP", event: "UI Innovation War — Business Case Competition" },
    { year: "2023", name: "TOP 20", event: "Wirausaha Muda Mandiri (WMM)" },
    { year: "2025", name: "BEST TEAM PROJECT", event: "Koperasi Tanggap Nutrisi Nasional (TUNAS) — LKMM KEMENDIKTI" }
  ],
  skills: [
    { number: "01", title: "RF & WIRELESS", list: ["5G NR", "RF Planning", "Drive Testing", "RSRP / SNR", "Link Budget", "Antenna Design", "MIMO"] },
    { number: "02", title: "NETWORK & INFRA", list: ["Network Monitoring", "Network Troubleshooting", "IP Networking", "Fiber Optic", "Transmission Systems", "Infrastructure Inspection"] },
    { number: "03", title: "TOOLS & SOFTWARE", list: ["Atoll", "CST Studio Suite", "QGIS", "G-NetTrack Pro", "Python", "Cisco Packet Tracer", "Excel", "Linux / Ubuntu"] },
    { number: "04", title: "PROFESSIONAL", list: ["Data Analysis", "Problem Solving", "Technical Communication", "Teamwork", "Leadership", "Project Coordination"] }
  ],
  certifications: [
    { year: "2026", title: "Networking Devices and Initial Configuration", issuer: "Cisco Networking Academy" },
    { year: "2026", title: "Network Addressing and Basic Troubleshooting", issuer: "Cisco Networking Academy" },
    { year: "2025", title: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar (LKMM-TD)", issuer: "Student Leadership Training" }
  ]
};
