export type ProjectStatus = "Live Demo" | "Private Project" | "GitHub";

export interface ProjectRepo {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  url?: string; // Live deploy link jika Live Demo, Link repo jika GitHub, kosong jika Private Project
  repos?: ProjectRepo[]; // Optional jika proyek memiliki beberapa repositori (misal Frontend & Backend)
  urlPictProject: string[]; // URL / path foto screenshot tampilan proyek
  techStack: string[];
  features: string[];
  myRole: string;
  challenge: string[];
  solution: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  cvUrl: string;
  cvFileName: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const profileData: Profile = {
  name: "Akbar Zaqi Fiktarizaen",
  role: "Junior Software & AI Engineer",
  bio: "Software & AI Engineer focused on modern web development and computer vision implementation. Passionate about exploring cutting-edge technologies and designing scalable, efficient, and impactful digital solutions through clean code.",
  photoUrl: "/foto.jpeg",
  cvUrl: "/CV_AkbarZaqiFiktarizaen_WebDev.pdf",
  cvFileName: "CV_AkbarZaqiFiktarizaen_WebDev.pdf",
  socials: {
    github: "https://github.com/akbarzaqi",
    linkedin: "https://linkedin.com/in/akbarzaqi",
    email: "mailto:zakiakbar143@gmail.com",
  },
};

export const techStackData: string[] = [
  "JavaScript",
  "TypeScript",
  "Python",
  "C++",
  "PHP",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Shadcn/ui",
  "Monorepo",
  "AI SDK",
  "NestJS",
  "Node.js",
  "Express.js",
  "Hapi.js",
  "Laravel",
  "REST API",
  "Zod",
  "BetterAuth",
  "PostgreSQL",
  "pgvector",
  "MySQL",
  "Redis",
  "Prisma ORM",
  "Eloquent ORM",
  "OpenRouter",
  "LangChain",
  "Gotenberg",
  "SheetJS",
  "JSZip",
  "BullMQ",
  "Linux",
  "Docker",
  "MinIO",
  "Git",
  "GitHub",
];

export const projectsData: Project[] = [
  {
    title: "Laundry Management System",
    description:
      "Sistem manajemen laundry berbasis web untuk mengelola data pelanggan, transaksi, paket laundry, cabang outlet, keanggotaan (membership), dan pengguna melalui dashboard admin yang terintegrasi.",
    status: "GitHub",
    url: "https://github.com/akbarzaqi/Laundry",
    urlPictProject: [
      "/projects/laundry-management/dashboard.png",
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    features: [
      "Dashboard admin interaktif dengan statistik transaksi dan ringkasan pengguna",
      "Manajemen data pelanggan dan sistem keanggotaan (membership)",
      "Pengelolaan paket layanan laundry dan banyak cabang outlet",
      "Pelacakan status proses transaksi dan verifikasi pembayaran",
      "Manajemen pengguna dengan kontrol akses berbasis peran (role-based access)",
      "Fitur cetak nota dan rekap laporan data transaksi",
    ],
    myRole: "Full Stack Developer",
    challenge: [
      "Mengelola relasi data yang saling terhubung antara pelanggan, paket layanan, outlet, dan transaksi.",
      "Menjaga konsistensi status transaksi dan proses pembayaran di setiap tahapan alur kerja laundry.",
    ],
    solution: [
      "Merancang skema database relasional untuk mengelola data pelanggan, paket, outlet, membership, dan transaksi secara terstruktur.",
      "Mengimplementasikan fungsi CRUD dan manajemen status transaksi otomatis untuk operasional inti laundry.",
      "Membangun dashboard admin terpusat untuk memantau ringkasan data operasional secara langsung.",
    ],
  },
  {
    title: "Curhatin - AI Chatbot",
    description:
      "Aplikasi web percakapan berbasis AI yang dirancang sebagai teman virtual bagi pengguna untuk berbagi pikiran, perasaan, dan cerita pribadi melalui obrolan yang alami.",
    status: "GitHub",
    url: "https://github.com/akbarzaqi/curhatin-frontend.git",
    repos: [
      { label: "Frontend", url: "https://github.com/akbarzaqi/curhatin-frontend.git" },
      { label: "Backend", url: "https://github.com/akbarzaqi/curhatin-backend.git" },
    ],
    urlPictProject: [
      "/projects/curhatin/curhatin.png",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "groq-sdk",
    ],
    features: [
      "Chatbot percakapan cerdas bertenaga Artificial Intelligence (AI)",
      "Antarmuka obrolan interaktif untuk berbagi cerita dan keluh kesah pribadi",
      "Pengalaman percakapan responsif dan interaktif secara waktu nyata (real-time)",
      "Desain antarmuka yang optimal untuk layar desktop maupun perangkat seluler",
      "Pengalaman pengguna yang nyaman dan ramah privasi",
    ],
    myRole: "Frontend Developer & AI Integration",
    challenge: [
      "Merancang antarmuka percakapan yang terasa nyaman, hangat, dan alami bagi pengguna saat membagikan cerita pribadi.",
      "Menciptakan pengalaman chat yang responsif dan tetap lancar selama dialog percakapan berlangsung terus-menerus.",
    ],
    solution: [
      "Membangun antarmuka chat yang bersih, rapi, dan intuitif dengan fokus pada kenyamanan interaksi pengguna.",
      "Mengintegrasikan frontend dengan layanan AI chatbot (Groq SDK) untuk memproses pesan pengguna dan menyajikan respons percakapan cerdas.",
      "Menerapkan tata letak responsif untuk memastikan konsistensi tampilan di perangkat mobile maupun desktop.",
    ],
  },
  {
    title: "LearnCheck - AI Learning Platform",
    description:
      "Platform pembelajaran interaktif dengan kuis bertenaga AI dan umpan balik yang dipersonalisasi untuk membantu siswa mengevaluasi pemahaman serta menemukan bagian materi yang perlu diperdalam.",
    status: "GitHub",
    url: "https://github.com/LearnCheckA25-CS152/LearnCheck-FrontEnd",
    repos: [
      { label: "Frontend", url: "https://github.com/LearnCheckA25-CS152/LearnCheck-FrontEnd" },
      { label: "Backend", url: "https://github.com/LearnCheckA25-CS152/LearnCheck-Backend.git" },
    ],
    urlPictProject: [
      "/projects/learncheck/dashboard.png",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "AI API",
      "REST API",
    ],
    features: [
      "Kuis interaktif yang dihasilkan secara dinamis oleh AI",
      "Umpan balik (feedback) AI yang dipersonalisasi berdasarkan hasil kuis siswa",
      "Riwayat kuis lengkap dengan ringkasan statistik performa belajar",
      "Kustomisasi tema tampilan (dark/light), jenis font, dan ukuran teks",
      "Desain responsif yang menyesuaikan berbagai ukuran layar perangkat",
      "Penghitung waktu mundur (timer) kuis berdurasi 5 menit",
      "Validasi dan penilaian jawaban otomatis berbasis kecerdasan buatan",
      "Integrasi materi pembelajaran dan data pengguna melalui parameter URL",
    ],
    myRole: "Frontend Developer & AI API Integration Engineer",
    challenge: [
      "Membangun alur kuis interaktif yang mampu mengambil pertanyaan buatan AI secara dinamis dari server backend.",
      "Mengintegrasikan validasi jawaban dan umpan balik terpersonalisasi AI ke dalam antarmuka aplikasi frontend.",
      "Mengelola status hasil kuis dan preferensi kustomisasi pengguna dengan tetap menjaga performa antarmuka yang cepat.",
    ],
    solution: [
      "Mengembangkan alur kuis frontend terstruktur untuk memuat soal dari backend dan memandu pengguna melalui asesmen waktu nyata.",
      "Mengintegrasikan API backend untuk memproses pembuatan soal AI, evaluasi jawaban, dan feedback personal.",
      "Menerapkan penyimpanan lokal (localStorage) agar pengguna dapat tetap meninjau riwayat dan evaluasi kuis setelah selesai.",
      "Membangun pengaturan preferensi pengguna fleksibel (tema gelap/terang, gaya dan ukuran font, lebar layout).",
      "Mengimplementasikan UI responsif untuk menjamin pengalaman belajar yang nyaman di semua perangkat.",
    ],
  },
  {
    title: "Kost Pak Aji - Management System",
    description:
      "Sistem manajemen rumah kos lengkap dengan antarmuka terpisah untuk administrator properti dan penyewa guna mengelola kamar, kontrak sewa, invoice bulanan, serta pembayaran.",
    status: "GitHub",
    url: "https://github.com/akbarzaqi/EasyKost-nextjs",
    repos: [
      { label: "Frontend", url: "https://github.com/akbarzaqi/EasyKost-nextjs" },
      { label: "Backend", url: "https://github.com/akbarzaqi/EasyKost-RestAPI.git" },
    ],
    urlPictProject: [
      "/projects/kost-pak-aji/dashboard.png",
      "/projects/kost-pak-aji/detail-kamar.png",
      "/projects/kost-pak-aji/status-bayar.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Laravel",
      "REST API",
      "MySQL",
      "Laravel Sanctum",
    ],
    features: [
      "Dashboard admin dengan ringkasan statistik properti dan pembayaran",
      "Manajemen kamar dengan CRUD, pencarian, pemfilteran, dan unggah foto",
      "Pengelolaan kontrak sewa penyewa",
      "Manajemen invoice dan tagihan sewa bulanan",
      "Verifikasi bukti transfer dan pelacakan status pembayaran",
      "Dashboard penyewa dengan informasi kamar, tagihan, dan riwayat pembayaran",
      "Pembayaran invoice dan unggah bukti transfer pembayaran",
      "Kontrol akses berbasis peran (role-based access) untuk admin dan penyewa",
    ],
    myRole: "Frontend Developer & API Integration Engineer",
    challenge: [
      "Membangun dua antarmuka berbeda untuk administrator dan penyewa dengan hak akses serta alur kerja yang berbeda.",
      "Mengintegrasikan frontend dengan REST API untuk kamar, penyewaan, invoice, pembayaran, dan manajemen pengguna.",
      "Menangani autentikasi dan kontrol akses berbasis peran antara frontend dan backend.",
    ],
    solution: [
      "Mengembangkan antarmuka admin dan penyewa yang responsif menggunakan Next.js, TypeScript, Tailwind CSS, dan shadcn/ui.",
      "Mengintegrasikan REST API dari backend Laravel untuk mengelola data kamar, sewa, invoice, pembayaran, dan pengguna.",
      "Menerapkan autentikasi dan kontrol akses berbasis peran menggunakan sistem autentikasi backend (Laravel Sanctum).",
      "Membangun komponen UI dan tabel data yang dapat digunakan kembali untuk mengelola data operasional secara efisien.",
    ],
  },
  {
    title: "RSCUAD - Admin Dashboard LPJ KRSBI Humanoid",
    description:
      "Dashboard administratif untuk mengelola Laporan Pertanggungjawaban (LPJ) keuangan tim Robot Humanoid R-SCUAD KRSBI, mencakup pemasukan, pengeluaran, dokumentasi nota kuitansi, dan laporan realisasi anggaran.",
    status: "GitHub",
    url: "https://github.com/akbarzaqi/RSCUAD-Administrator",
    urlPictProject: [
      "/projects/rscuad-admin/dashboard.png",
      "/projects/rscuad-admin/laporan.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "SheetJS",
    ],
    features: [
      "Manajemen periode anggaran berdasarkan tahun kegiatan",
      "Pencatatan pemasukan dan pengeluaran dengan kalkulasi total otomatis",
      "Unggah bukti nota/kuitansi dan dokumentasi transaksi",
      "Pratinjau (preview) laporan keuangan sesuai format resmi KRSBI Humanoid",
      "Ekspor laporan keuangan ke format Excel (.xlsx) dengan multi-sheet",
      "Pengelolaan status laporan (Draft dan Final)",
      "Riwayat arsip keuangan lintas periode anggaran",
      "Sistem autentikasi dan kontrol akses berbasis peran (role-based access)",
    ],
    myRole: "Full Stack Developer",
    challenge: [
      "Mengelola data keuangan lintas periode anggaran agar setiap transaksi tetap terstruktur dan terpisah rapi per tahun.",
      "Menangani unggah berkas nota kuitansi dan menghubungkan catatan transaksi dengan dokumen pendukungnya.",
      "Menghasilkan laporan keuangan terstruktur dan fitur ekspor Excel otomatis dari data transaksi dinamis.",
    ],
    solution: [
      "Merancang sistem manajemen keuangan berbasis periode untuk mengelompokkan data pemasukan dan pengeluaran per tahun anggaran.",
      "Mengimplementasikan fungsi CRUD untuk pemasukan, pengeluaran, dan kategori belanja disertai kalkulasi saldo otomatis.",
      "Mengintegrasikan Supabase untuk database PostgreSQL, autentikasi pengguna, dan penyimpanan berkas (storage).",
      "Menerapkan kompresi gambar otomatis sebelum unggah bukti nota kuitansi guna menghemat kuota penyimpanan.",
      "Membangun generator laporan keuangan dan fungsi ekspor Excel menggunakan pustaka SheetJS.",
    ],
  },
  {
    title: "PintarAjar - AI Teaching Assistant",
    description:
      "Asisten alur kerja pengajaran bertenaga AI yang dirancang untuk membantu guru menyusun dan mengelola perangkat ajar Kurikulum Merdeka, asesmen, serta materi pembelajaran secara lebih efisien.",
    status: "Live Demo",
    url: "https://pintarajar.web.id/",
    urlPictProject: [
      "/projects/pintarajar/home.png",
      "/projects/pintarajar/generate-page.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "pgvector",
      "Better Auth",
      "Redis",
      "BullMQ",
      "MinIO",
      "OpenRouter",
      "Turborepo",
      "pnpm",
    ],
    features: [
      "Pembuatan dokumen perangkat ajar Kurikulum Merdeka secara otomatis berbantuan AI",
      "Manajemen alur kerja pengajaran terstruktur berbasis kelas",
      "Pengelolaan dokumen pembelajaran lengkap: Capaian Pembelajaran (CP), Alur Tujuan Pembelajaran (ATP), Program Semester (Prosem), dan Modul Ajar",
      "Asisten chatbot AI interaktif khusus untuk guru",
      "Pengelolaan asesmen kuis dan materi bahan ajar",
      "Penyimpanan berkas dan manajemen dokumen digital terpusat",
      "Kontrol akses berbasis peran (role-based access) untuk guru dan administrator",
      "Landing page modern serta dashboard guru yang responsif di semua perangkat",
    ],
    myRole: "Full Stack Developer & AI Integration Engineer",
    challenge: [
      "Membangun alur kerja pengajaran terintegrasi yang menghubungkan perangkat ajar, kelas, asesmen, dan bantuan AI.",
      "Mengintegrasikan kapabilitas AI ke dalam aplikasi dengan tetap mempertahankan format konten edukasi yang terstruktur dan valid.",
      "Mengelola autentikasi, relasi basis data yang kompleks, penyimpanan berkas, dan pemrosesan antrean latar belakang (background queue) dalam arsitektur monorepo full-stack.",
    ],
    solution: [
      "Mengembangkan aplikasi menggunakan arsitektur monorepo Turborepo dengan Next.js pada sisi frontend dan NestJS pada sisi backend.",
      "Mengimplementasikan PostgreSQL dengan Prisma ORM dan pgvector untuk mendukung basis data relasional serta pencarian vektor berbasis AI.",
      "Mengintegrasikan layanan AI berbasis OpenRouter untuk membantu guru dalam menghasilkan dan menyunting konten bahan ajar.",
      "Menerapkan Better Auth untuk autentikasi yang aman serta Redis dengan BullMQ untuk pemrosesan tugas antrean latar belakang.",
      "Mengintegrasikan MinIO sebagai penyimpanan objek yang kompatibel dengan S3 untuk mengelola berkas dan dokumen perangkat ajar yang diunggah.",
    ],
  },
];

export const experienceData: Experience[] = [
  {
    role: "Asisten Laboratorium - Robotika Teknik Elektro",
    organization: "Universitas Ahmad Dahlan",
    period: "2026 - Sekarang",
    description: [
      "Membimbing mahasiswa dalam memahami fundamental Robot Operating System (ROS) dan sistem robotika otonom.",
      "Mendampingi sesi praktikum laboratorium, konfigurasi lingkungan Linux, serta troubleshooting sistem robotika.",
    ],
    skills: ["ROS", "Linux", "Robotics", "Python"],
  },
  {
    role: "React & Back-End With AI Cohort",
    organization: "Asah Bootcamp (Dicoding)",
    period: "Agustus 2025 - Januari 2026",
    description: [
      "Mengembangkan aplikasi web full-stack menggunakan JavaScript, React, dan arsitektur backend modern.",
      "Membangun RESTful API yang andal, menerapkan prinsip clean code, dan berkolaborasi tim menggunakan Git/GitHub.",
    ],
    skills: ["React", "Node.js", "REST API", "Git", "GitHub"],
  },
  {
    role: "Asisten Laboratorium Informatika",
    organization: "Universitas Ahmad Dahlan",
    period: "2025",
    description: [
      "Bertindak sebagai asisten pengajar praktikum mata kuliah Pemrograman Berorientasi Objek (PBO / OOP).",
      "Membimbing mahasiswa dalam menerapkan konsep OOP yang bersih, struktur kode modular, dan dasar arsitektur perangkat lunak.",
    ],
    skills: ["OOP", "Java / C++", "Teaching", "Mentoring"],
  },
  {
    role: "Programmer Tim Robot Humanoid",
    organization: "Universitas Ahmad Dahlan",
    period: "2024 - Sekarang",
    description: [
      "Melakukan riset dan pengembangan sistem otonom robot sepak bola humanoid untuk kompetisi nasional (KRI) dan internasional (RoboCup).",
      "Merancang algoritma computer vision pendeteksi bola & gawang serta mengontrol pergerakan robot menggunakan Python dan C++.",
    ],
    skills: ["Computer Vision", "Python", "C++", "Image Processing"],
  },
  {
    role: "Web Developer (Magang / Internship)",
    organization: "Seven Inc Jogja",
    period: "Juni - Desember 2022",
    description: [
      "Mendalami framework Laravel dan pola arsitektur MVC untuk pengembangan sistem web dinamis berbasis PHP.",
      "Mengembangkan platform web lowongan kerja secara menyeluruh, mencakup antarmuka pengguna (UI/UX), logika bisnis, dan pengelolaan database.",
    ],
    skills: ["Laravel", "PHP", "MySQL", "MVC"],
  },
];
