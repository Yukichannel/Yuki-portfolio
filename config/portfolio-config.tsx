import { Mail, Phone, MapPin, Clock, Coffee } from "lucide-react";

// =============================================================================
// PERSONAL INFORMATION CONFIGURATION
// =============================================================================
// Энд өөрийн хувийн мэдээллээ оруулна уу / Enter your personal information here
export const personalInfo = {
  // Үндсэн мэдээлэл / Basic Information
  name: "Ganbat Khashkhuu",
  nickname: "Yuki", // Товч нэр / Short name
  nameJapanese: "ガンバット・カシュフー ", // Япон хэл дээрх нэр / Japanese name
  title: " Full-Stack Developer", // Албан тушаал / Job title
  
  // Холбоо барих мэдээлэл / Contact Information
  email: "khurelbaatar.gan@gmail.com",
  phone: "070-9020-8899",
  location: "Tokyo, Japan",
  address: "Tokyo, Japan",
  
  // Хувийн мэдээлэл / Personal Details
  nationality: "Mongolia",
  dateOfBirth: "1988年03月12日",
  age: 35,
  gender: "female",
  
  // Танилцуулга / Bio descriptions
  bio: "Full-stack developer with 0.5+ years of experience in web development, automation engineering, and mining technology. Fluent in Japanese (N3 level), English, and Mongolian. Developing modern web applications using React, Next.js, and various backend technologies.",
  
  longBio: "I am a dedicated full-stack developer with extensive experience spanning web development. My journey began in Mongolia where I studied automation engineering and gained hands-on experience with automation systems. I developed a passion for combining traditional engineering with modern software development. Currently based in Tokyo, Japan, I work as a System Engineer at VMP Japanese company while pursuing freelance web development projects. My multilingual abilities (Japanese N3, English, Mongolian) and cross-cultural experience enable me to work effectively with diverse teams and clients. I specialize in PHP, JavaScript, React, and have deep expertise in industrial automation and mining software solutions.",
  
  description: "Experienced full-stack developer with expertise in modern web technologies, automation engineering, and multilingual development",
  
  // Зураг / Images
  avatar: "/portfolio.jpg", // public фолдер дотор байрлуулна / Place in public folder
  resumeUrl: "/rireksho-blank.pdf", // CV файлын зам / CV file path
  
  // Статистик / Statistics
  yearsOfExperience: 0.5,
  projectsCompleted: 9,
  technologiesMastered: 4,
  githubContributions: 20,
  
  // Ажлын статус / Work Status
  availability: "Available for freelance projects",
  
  // Хэлний мэдлэг / Language Skills
  languages: [
    { name: "Japanese", level: "N3", proficiency: 85 },
    { name: "English", level: "TOEIC 670", proficiency: 80 },
    { name: "Mongolian", level: "Native", proficiency: 100 }
  ],
  
  // Сонирхол / Interests
  interests: [
    "Mountain Hiking - Active hiker since university, achieved Sports Merit 3rd grade, climbed Mount Fuji",
    "Language Learning - Member of Toastmasters International for English conversation and speech contests",
    "Technical Drawing - Skilled in pencil drawing, especially automotive sketches in black and white",
    "Automotive Technology - Studied automotive technology in Japan and Mongolia, worked in industrial maintenance"
  ],
  
  // Боловсрол / Education
  education: [
    {
      id: 1,
      degree: "Automation Technology Engineering",
      institution: "モンゴル科学技術大学",
      institutionEn: "Mongolia University of Science and Technology",
      period: "2006年9月 - 2010年1月",
      type: "Bachelor's Degree",
      description: "Specialized in mining technology engineering with focus on automation systems and industrial processes."
    },
    {
      id: 2,
      degree: "Faculty of National Public Administration",
      institution: "モンゴル国 ERDMIIN 大学",
      institutionEn: "Graduate University of Mongolia, School of Public Administration",
      period: "2015年9月 - 2017年1月",
      type: "Master's Degree",
    },
    {
      id: 3,
      institution: "インド政府奨学金研修 ( ITEC ) 「新世代携帯電話ネットワーク」専門能力開発トレーニング",
      institutionEn: "ITEC - Indian Technical and Economic Cooperation Program",
      period: "2017年1月 - 2017年10月",
      type: "Professional Training",
      description: "Completed specialized training on next-generation mobile networks, including 4G/5G technologies and network architecture."
    },
    {
      id: 4,
      institution: "日本、えびす日本語学校",
      institutionEn: "Ebisu Japanese Language School",
      period: "2022年4月 - 2023年8月",
      type: "Language Training",
      description: "Intensive Japanese language training program focusing on conversation skills and cultural understanding."
    }
  ],
  
  // Миний тухай / About Me sections
  aboutSections: {
    mainDescription: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.",
    detailedDescription: "A passionate  Full-Stack Developer based in Tokyo, Japan. With 0.5+ years of experience spanning web development, industrial automation, and mining technology, I bring a unique perspective to software development. My background in automation engineering combined with modern web technologies allows me to create efficient, scalable solutions.",
    professionalSummary: " full-stack developer with extensive experience in React, Next.js, PHP, and modern web technologies. Specialized in creating user-centric applications with clean, maintainable code.",
    personalMotto: "Bridging traditional engineering with modern software development to create innovative solutions."
  }
};

// =============================================================================
// SOCIAL MEDIA & EXTERNAL LINKS CONFIGURATION
// =============================================================================
// Нийгмийн сүлжээ болон гадаад холбоосууд / Social media and external links
export const socialLinks = {
  github: "https://github.com/Yukichannel",
  instagram: "https://www.instagram.com/ba1jir_/",
  facebook: "https://www.facebook.com/Ba1jir",
  email: "khurelbaatar.gan@gmail.com",
  // Дэмжлэгийн холбоосууд / Support links
  buyMeCoffee: "buymeacoffee.com/yu_ki", // "Buy me a coffee" холбоос / "Buy me a coffee" link
  paypal: "", // PayPal холбоос (хэрэгтэй бол) / PayPal link (if needed)
  patreon: "", // Patreon холбоос (хэрэгтэй бол) / Patreon link (if needed)
};

// =============================================================================
// SKILLS CONFIGURATION
// =============================================================================
// Ур чадварын тохиргоо / Skills configuration
export const skills = [
  {
    category: "Frontend Development",
    icon: "Layout",
    items: [
      { name: "React", level: 70, color: "#61DAFB" },
      { name: "Next.js", level: 65, color: "#000000" },
      { name: "TypeScript", level: 60, color: "#3178C6" },
      { name: "JavaScript", level: 85, color: "#F7DF1E" },
      { name: "HTML/CSS", level: 85, color: "#E34F26" },
      { name: "Vue.js", level: 60, color: "#4FC08D" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    items: [
      { name: "PHP", level: 60, color: "#777BB4" },
      { name: "MySQL", level: 60, color: "#4479A1" },
      { name: "Node.js", level: 80, color: "#339933" },
      { name: "Python", level: 60, color: "#3776AB" },
      { name: "PostgreSQL", level: 70, color: "#336791" },
      { name: "MongoDB", level: 70, color: "#47A248" }
    ]
  },
  {
    category: "Engineering & Automation",
    icon: "Settings",
    items: [
      { name: "AutoCAD", level: 90, color: "#E51937" },
      { name: "NC Machine Operation", level: 88, color: "#4CAF50" },
      { name: "Industrial Automation", level: 85, color: "#FF9800" },
      { name: "Mining Technology", level: 90, color: "#795548" },
      { name: "5S & Kaizen", level: 82, color: "#009688" }
    ]
  },
  {
    category: "Languages",
    icon: "Globe",
    items: [
      { name: "Japanese (N3)", level: 90, color: "#FF6B6B" },
      { name: "English (TOEIC 760)", level: 80, color: "#4ECDC4" },
      { name: "Mongolian (Native)", level: 100, color: "#45B7D1" }
    ]
  }
];

// =============================================================================
// STATISTICS CONFIGURATION
// =============================================================================
// About хэсэгт харуулах статистик / Statistics for About section
export const stats = [
  {
    label: "Years Experience",
    value: "0.5+",
    icon: "Calendar"
  },
  {
    label: "Projects Completed",
    value: "10+",
    icon: "CheckCircle"
  },
  {
    label: "Technologies",
    value: "10+",
    icon: "Code"
  },
  {
    label: "Languages",
    value: "3",
    icon: "Globe"
  }
];

// =============================================================================
// PROJECTS CONFIGURATION
// =============================================================================
// Анхдагч төслүүдийн жагсаалт / Default projects list
export const projects = [
  {
    id: 1,
    title: "BurgerMaster",
    description: "Burger building and ordering application",
    longDescription: "A full-featured burger building and ordering web application that allows users to customize their burgers with various ingredients, view nutritional information, and place orders for pickup or delivery. The platform includes user authentication, order history, and an admin panel for managing menu items and orders.",
    image: "/burgermaster.png",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Yukichannel/Burger-builder",
    demoUrl: "https://studio--burger-master-js63l.us-central1.hosted.app/orders",
    category: "fullstack",
    features: [
      "Ordering burgers with custom ingredients",
      "User authentication and profiles",
      "Order history and tracking",
      "Admin panel for managing menu items",
      "Real-time order updates",
      "Responsive design for mobile and desktop"
    ],
    createdAt: "2025-09-04"
  },
  {
    id: 2,
    title: "BookStore",
    description: "Adds your favourite book in list",
    longDescription: "A comprehensive online bookstore application that allows users to browse, search, and purchase books across various genres. Features include user reviews, ratings, wishlists, and a secure checkout process. The platform also includes an admin dashboard for managing inventory, orders, and customer data.",
    image: "/bookstore.png",
    technologies: ["Vue.js", "PHP", "MySQL", "Chart.js", "Bootstrap", "PWA"],
    githubUrl: "https://github.com/Yukichannel/bookstore-v1",
    demoUrl: "https://bookstoreyuki-pmlsscbq4-yukichannels-projects.vercel.app/",
    category: "fullstack",
    features: [
      "Cognitive assessment tools",
      "Personalized training programs",
      "Progress tracking and analytics",
      "Book recommendations",
      "Secure payment gateway",
      "User-friendly interface"
    ],
    createdAt: "2025-08-15"
  },
  {
    id: 3,
    title: "Mongolkino",
    description: "Movie website for Mongolian films",
    longDescription: "A dedicated platform for Mongolian cinema enthusiasts to explore, review, and discuss Mongolian films. The website features a comprehensive database of movies, including trailers, synopses, cast information, and user reviews. It also includes a community forum for discussions and a blog section for news and articles related to the Mongolian film industry.",
    image: "/Mongolkino.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Local Storage", "PWA"],
    githubUrl: "https://github.com/Yukichannel/Mongolkino",
    demoUrl: "https://studio--mongol-kino-online.us-central1.hosted.app/",
    category: "fullstack",
    features: [
      "Real-time movie ratings and reviews",
      "Comprehensive movie database",
      "User-friendly interface",
      "Interactive movie discussions",
      "Personalized movie recommendations",
      "Bookmarking and watchlist features"
    ],
    createdAt: "2024-03-10"
  },
   {
    id: 4,
    title: "homepage landing",
    description: "Personal homepage landing page",
    longDescription: "A sleek and modern personal homepage landing page designed to showcase an individual's portfolio, skills, and contact information. The landing page features a responsive design, smooth animations, and easy navigation to different sections such as About Me, Projects, Skills, and Contact.",
    image: "/homepage.png",
    technologies: ["HTML"],
    githubUrl: "https://github.com/Yukichannel/homepage-",
    demoUrl: "https://yukichannel.github.io/homepage-/",
    category: "frontend",
    features: [
      "Responsive design for all devices",
      "Smooth scrolling animations",
      "Clean and modern interface",
      "Easy navigation between sections"
    ],
   }
];

// =============================================================================
// WORK EXPERIENCE CONFIGURATION
// =============================================================================
// Ажлын туршлагын мэдээлэл / Work experience data
export const experiences = [
  {
    id: 1,
    title: "own project",
    company: ".",
    period: "2025年05月 - Present",
    date: "2025年05月 - Present",
    location: "Japan",
    type: "Full-time",
    description: "Operating NC machining centers and contributing to precision manufacturing processes engineering while developing web applications in spare time.",
    responsibilities: [
      "Operating and maintaining NC machining centers",
      "Quality control and precision manufacturing",
      "Equipment maintenance and troubleshooting",
      "Implementing 5S and Kaizen methodologies",
      "Developing internal automation tools"
    ],
    achievements: [
      "Improved production efficiency by 15% through process optimization",
      "Developed internal web-based inventory tracking system",
      "Achieved zero defect rate for 6 consecutive months"
    ],
    technologies: ["NC Machine engineer", "5S", "Kaizen", "Quality Control", "Manufacturing"]
  },
  {
    id: 2,
    title: "Information Technology Engineer",
    company: "Mongolia, Information Communication Network LLC",
    period: "2011年02月 - 2018年12月",
    date: "2011年02月 - 2018年12月",
    location: "Mongolia",
    type: "Full-time",
    description: "Managed IT infrastructure, provided technical support, and ensured network security for corporate clients while contributing to web development projects.",
    responsibilities: [
      "Managed IT infrastructure and network security",
      "Provided technical support and training",
      "Implemented software solutions for clients",
      "Maintained and updated company website",
      "Collaborated on web development projects"
    ],
    achievements: [
      "Successfully migrated 50+ clients to new IT infrastructure",]
  },  
  {
  id: 3,
    title: "Information Technology Engineer",
    company: "C-space LLC",
    period: "2019年02月 - 2019年05月",
    date: "2019年02月 - 2019年05月",
    location: "Japan",
    type: "Full-time",
    description: "Managed IT infrastructure, provided technical support, and ensured network security for corporate clients while contributing to web development projects.",
    responsibilities: [
      "Managed IT infrastructure and network security",
      "Provided technical support and training",
      "Implemented software solutions for clients",
      "Maintained and updated company website",
      "Collaborated on web development projects"
    ],
  },
  {
  id: 4,
    title: "Network Engineer",
    company: "Hiimori LLC",
    period: "2019年07月 - 2020年05月",
    date: "2019年07月 - 2020年05月",
    location: "Japan",
    type: "Full-time",
    description: "Managed IT infrastructure, provided technical support, and ensured network security for corporate clients while contributing to web development projects.",
    responsibilities: [
      "Managed IT infrastructure and network security",
      "Provided technical support and training",
      "Implemented software solutions for clients",
    ],
  },
  {
  id: 5,
    title: "Network Engineer",
    company: "Daifuji LLC",
    period: "2020年11月 - 2021年10月",
    date: "2020年11月 - 2021年10月",
    location: "Japan",
    type: "Full-time",
    description: "Managed IT infrastructure, provided technical support, and ensured network security for corporate clients while contributing to web development projects.",
    responsibilities: [
      "Managed IT infrastructure and network security",
      "Provided technical support and training",
      "Implemented software solutions for clients",
    ],
  },
  {
  id: 6,
    title: "Office worker",
    company: "Tomotsuna Law Office",
    period: "2023年07月 - 2024年03月",
    date: "2023年07月 - 2024年03月",
    location: "Japan",
    type: "Full-time",
    description: "Did office work.",

  },
   {
  id: 7,
    title: "Accountant",
    company: "Sora Co., Ltd",
    period: "2024年04月 - Present",
    date: "2024年04月 - Present",
    location: "Japan",
    type: "Full-time",
    description: "Did accounting work and developed web applications in spare time.",
    responsibilities: [
      "Managed company accounts and financial records",
      "Prepared financial statements and reports",
      "Handled tax filings and compliance",
    ],
  },
];


// =============================================================================
// TESTIMONIALS CONFIGURATION
// =============================================================================
// Харилцагчийн сэтгэгдэл / Client testimonials
export const testimonials = [
  
];

// =============================================================================
// CONTACT INFORMATION CONFIGURATION
// =============================================================================
// Холбоо барих мэдээллийн жагсаалт / Contact information list
export const contactInfo = [
  {
    label: "Email",
    title: "Email",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    link: `mailto:${personalInfo.email}`
  },
  {
    label: "Phone",
    title: "Phone",
    value: personalInfo.phone,
    icon: Phone,
    href: `tel:${personalInfo.phone}`,
    link: `tel:${personalInfo.phone}`
  },
  {
    label: "Location",
    title: "Location",
    value: personalInfo.location,
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "Address",
    title: "Address",
    value: personalInfo.address,
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "Availability",
    title: "Availability",
    value: personalInfo.availability,
    icon: Clock,
    href: "#",
    link: "#"
  },
  {
    label: "Response Time",
    title: "Response Time",
    value: "Within 24 hours",
    icon: Clock,
    href: "#",
    link: "#"
  }
];

// =============================================================================
// SUPPORT LINKS CONFIGURATION
// =============================================================================
// Дэмжлэгийн холбоосууд / Support links configuration
export const supportLinks = {
  buyMeCoffee: {
    url: socialLinks.buyMeCoffee,
    text: "Buy me a coffee",
    icon: Coffee,
    enabled: true // false болговол харагдахгүй / Set to false to hide
  },
  paypal: {
    url: socialLinks.paypal,
    text: "Support via PayPal",
    icon: Mail,
    enabled: false // PayPal ашиглахгүй бол false / Set to false if not using PayPal
  }
};

// =============================================================================
// SEO AND META INFORMATION CONFIGURATION
// =============================================================================
// SEO болон мета мэдээллийн тохиргоо / SEO and meta information configuration
export const seoData = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.description,
  keywords: [
    " Full-Stack Developer",
    "PHP Developer",
    "React Developer",
    "JavaScript Developer",
    "Automation Engineer",
    "Japan Developer",
    "N2 Japanese",
    "Mining Technology",
    "Web Development",
    personalInfo.name
  ],
  author: personalInfo.name,
  ogImage: personalInfo.avatar
};

// =============================================================================
// THEME AND STYLING CONFIGURATION
// =============================================================================
// Загварын тохиргоо / Theme configuration
export const themeConfig = {
  // Үндсэн өнгө / Primary colors
  primaryColor: "#06B6D4", // Cyan
  secondaryColor: "#8B5CF6", // Purple
  accentColor: "#EC4899", // Pink
  
  // Градиент / Gradients
  primaryGradient: "from-cyan-400 via-purple-400 to-cyan-400",
  secondaryGradient: "from-purple-500 to-pink-500",
  
  // Анимацийн хугацаа / Animation durations
  animationDuration: {
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.5s"
  }
};

// =============================================================================
// NAVIGATION CONFIGURATION
// =============================================================================
// Навигацийн цэсний тохиргоо / Navigation menu configuration
export const navigationConfig = {
  // Цэсний элементүүд / Menu items
  menuItems: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" }
  ],
  
  // Лого тохиргоо / Logo configuration
  logo: {
    text: personalInfo.nickname,
    domain: ".online"
  }
};

// =============================================================================
// ADMIN CONFIGURATION
// =============================================================================
// Админ панелын тохиргоо / Admin panel configuration
export const adminConfig = {
  // Админ нууц үг (production дээр илүү аюулгүй байх ёстой) / Admin password (should be more secure in production)
  password: "admin123",
  
  // Админ панелын тохиргоо / Admin panel settings
  settings: {
    maxImageSize: 5 * 1024 * 1024, // 5MB
    allowedImageTypes: ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"],
    maxProjectsPerPage: 12
  }
};

// =============================================================================
// INSTRUCTIONS FOR OTHER DEVELOPERS
// =============================================================================
/*
БУСАД ХӨГЖҮҮЛЭГЧДЭД ЗОРИУЛСАН ЗААВАР / INSTRUCTIONS FOR OTHER DEVELOPERS:

1. ХУВИЙН МЭДЭЭЛЭЛ ӨӨРЧЛӨХ / CHANGING PERSONAL INFORMATION:
   - personalInfo объект дотор өөрийн мэдээллээ оруулна уу
   - Нэр, имэйл, утас, байршил зэргийг өөрчилнө үү
   - Bio болон longBio-г өөрийн тухай бичнэ үү

2. НИЙГМИЙН СҮЛЖЭЭНИЙ ХОЛБООС / SOCIAL MEDIA LINKS:
   - socialLinks объект дотор өөрийн нийгмийн сүлжээний холбоосуудыг оруулна уу
   - GitHub, Instagram, Facebook зэрэг холбоосуудыг өөрчилнө үү
   - buyMeCoffee холбоосыг өөрийн дэмжлэгийн хуудсаар солино уу

3. UR ЧАДВАР ӨӨРЧЛӨХ / CHANGING SKILLS:
   - skills массив дотор өөрийн ур чадваруудыг оруулна уу
   - Ангилал (category), нэр (name), түвшин (level), өнгө (color) өөрчилнө үү

4. ТӨСӨЛ НЭМЭХ / ADDING PROJECTS:
   - projects массив дотор өөрийн төслүүдийг оруулна уу
   - Эсвэл /admin хуудас ашиглан шинэ төсөл нэмнэ үү

5. ЗУРАГ СОЛИХ / CHANGING IMAGES:
   - public фолдер дотор portfolio.jpg файлыг өөрийн зургаар солино уу
   - personalInfo.avatar зам нь зөв байгаа эсэхийг шалгана уу

6. ӨНГӨ ЗАГВАР / THEME COLORS:
   - themeConfig объект дотор өнгөнүүдийг өөрчилж болно
   - CSS файл дотор custom өнгөнүүд нэмж болно

7. ХОЛБОО БАРИХ МЭДЭЭЛЭЛ / CONTACT INFORMATION:
   - contactInfo массив дотор холбоо барих мэдээллээ оруулна уу
   - Шинэ холбоо барих арга нэмж болно

АНХААРАХ ЗҮЙЛ / IMPORTANT NOTES:
- Энэ файлыг өөрчилсний дараа аппликейшнийг дахин эхлүүлэх хэрэггүй
- Бүх өөрчлөлт шууд харагдана
- Зураг файлуудыг public фолдерт хийнэ үү
- Production дээр deploy хийхээсээ өмнө бүх холбоосууд ажиллаж байгаа эсэхийг шалгана уу
*/