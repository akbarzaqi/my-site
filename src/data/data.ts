export type ProjectStatus = "Live Demo" | "Private Project" | "GitHub";

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  url?: string; // Live deploy link jika Live Demo, Link repo jika GitHub, kosong jika Private Project
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
      "Web-based laundry management system for managing customers, transactions, laundry packages, outlets, memberships, and users through an integrated admin dashboard.",
    status: "GitHub",
    url: "YOUR_GITHUB_REPO_URL",
    urlPictProject: [
      "/projects/laundry-management/dashboard.png",
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    features: [
      "Admin dashboard with transaction and user statistics",
      "Customer and membership management",
      "Laundry package and outlet management",
      "Transaction and payment status tracking",
      "User management with role-based access",
      "Transaction data printing",
    ],
    myRole: "Full Stack Developer",
    challenge: [
      "Managing interconnected data between customers, packages, outlets, and transactions.",
      "Maintaining consistent transaction and payment statuses throughout the laundry workflow.",
    ],
    solution: [
      "Designed a relational database to manage customers, packages, outlets, memberships, and transactions.",
      "Implemented CRUD functionality and transaction status management for the core laundry operations.",
      "Built an admin dashboard to provide a centralized overview of operational data.",
    ],
  },
];

export const experienceData: Experience[] = [
  {
    role: "Laboratory Assistant - Electrical Engineering Robotics",
    organization: "Universitas Ahmad Dahlan",
    period: "2026 - Present",
    description: [
      "Mentored students in the fundamentals of Robot Operating System (ROS) and autonomous robotics.",
      "Assisted with lab sessions, Linux environment configurations, and robotics system troubleshooting.",
    ],
    skills: ["ROS", "Linux", "Robotics", "Python"],
  },
  {
    role: "React & Back-End With AI Cohort",
    organization: "Asah Bootcamp (Dicoding)",
    period: "August 2025 - January 2026",
    description: [
      "Developed full-stack web applications using JavaScript, React, and back-end architectures.",
      "Engineered robust REST APIs, applied solid programming principles, and managed teamwork via Git/GitHub.",
    ],
    skills: ["React", "Node.js", "REST API", "Git", "GitHub"],
  },
  {
    role: "Informatics Laboratory Assistant",
    organization: "Universitas Ahmad Dahlan",
    period: "2025",
    description: [
      "Served as teaching assistant for the Object-Oriented Programming (OOP) course.",
      "Guided students in applying clean OOP concepts and software architecture fundamentals.",
    ],
    skills: ["OOP", "Java / C++", "Teaching", "Mentoring"],
  },
  {
    role: "Programmer, Humanoid Robot Team",
    organization: "Universitas Ahmad Dahlan",
    period: "2024 - Present",
    description: [
      "Conducted R&D on humanoid autonomous robot systems for national (KRI) and international (RoboCup) competitions.",
      "Engineered computer vision algorithms and robot motion behaviors using Python and C++.",
    ],
    skills: ["Computer Vision", "Python", "C++", "Image Processing"],
  },
  {
    role: "Web Developer (Internship)",
    organization: "Seven Inc Jogja",
    period: "June - December 2022",
    description: [
      "Mastered Laravel framework and MVC architectural patterns for PHP-based web systems.",
      "Developed a complete job-listing web platform covering UI/UX, core business logic, and database management.",
    ],
    skills: ["Laravel", "PHP", "MySQL", "MVC"],
  },
];
