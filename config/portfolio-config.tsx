import { Mail, Phone, MapPin, Clock, Coffee } from "lucide-react";

// =============================================================================
// PERSONAL INFORMATION CONFIGURATION
// =============================================================================
// Энд өөрийн хувийн мэдээллээ оруулна уу / Enter your personal information here
export const personalInfo = {
  // Үндсэн мэдээлэл / Basic Information
  name: "Ulamundrakh Baljirlkhundev",
  nickname: "Baljir", // Товч нэр / Short name
  nameJapanese: "ウラムウンダラハ バルジルフンデブ", // Япон хэл дээрх нэр / Japanese name
  title: "Senior Full-Stack Developer", // Албан тушаал / Job title
  
  // Холбоо барих мэдээлэл / Contact Information
  email: "baljir0901@gmail.com",
  phone: "090-3332-9900",
  location: "Tokyo, Japan",
  address: "Tokyo, Japan",
  
  // Хувийн мэдээлэл / Personal Details
  nationality: "Mongolia",
  dateOfBirth: "1995年09月01日",
  age: 30,
  gender: "Male",
  
  // Танилцуулга / Bio descriptions
  bio: "Senior full-stack developer with 6+ years of experience in web development, automation engineering, and mining technology. Fluent in Japanese (N2 level), English, and Mongolian. Currently working as System Engineer at VMP Japanese company while developing modern web applications using React, Next.js, and various backend technologies.",
  
  longBio: "I am a dedicated senior full-stack developer with extensive experience spanning web development, industrial automation, and mining technology. My journey began in Mongolia where I studied automation engineering and gained hands-on experience with automation systems. After completing exchange studies at Shibaura Institute of Technology in Japan, I developed a passion for combining traditional engineering with modern software development. Currently based in Tokyo, Japan, I work as a System Engineer at VMP Japanese company while pursuing freelance web development projects. My multilingual abilities (Japanese N2, English, Mongolian) and cross-cultural experience enable me to work effectively with diverse teams and clients. I specialize in PHP, JavaScript, React, and have deep expertise in industrial automation and mining software solutions.",
  
  description: "Experienced full-stack developer with expertise in modern web technologies, automation engineering, and multilingual development",
  
  // Зураг / Images
  avatar: "/portfolio.jpg", // public фолдер дотор байрлуулна / Place in public folder
  resumeUrl: "/rireksho-blank.pdf", // CV файлын зам / CV file path
  
  // Статистик / Statistics
  yearsOfExperience: 6,
  projectsCompleted: 30,
  technologiesMastered: 20,
  githubContributions: 800,
  
  // Ажлын статус / Work Status
  availability: "Available for freelance projects",
  
  // Хэлний мэдлэг / Language Skills
  languages: [
    { name: "Japanese", level: "N2", proficiency: 85 },
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
      period: "2012年9月 - 2017年1月",
      type: "Bachelor's Degree",
      description: "Specialized in mining technology engineering with focus on automation systems and industrial processes."
    },
    {
      id: 2,
      degree: "Exchange Student",
      institution: "日本の芝浦工業大学",
      institutionEn: "Shibaura Institute of Technology, Japan",
      period: "2017年4月 - 2018年3月",
      type: "Exchange Program",
      description: "One-year exchange program focusing on advanced engineering technologies and Japanese industrial practices."
    },
    {
      id: 3,
      degree: "Master of Business Administration (MBA)",
      institution: "イデル大学",
      institutionEn: "Ider University",
      period: "2020年 - 2022年",
      type: "Master's Degree",
      description: "MBA program focusing on business administration, strategic management, and entrepreneurship with emphasis on technology-driven business solutions."
    }
  ],
  
  // Миний тухай / About Me sections
  aboutSections: {
    mainDescription: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.",
    detailedDescription: "A passionate Senior Full-Stack Developer based in Tokyo, Japan. With 6+ years of experience spanning web development, industrial automation, and mining technology, I bring a unique perspective to software development. My background in automation engineering combined with modern web technologies allows me to create efficient, scalable solutions.",
    professionalSummary: "Senior full-stack developer with extensive experience in React, Next.js, PHP, and modern web technologies. Specialized in creating user-centric applications with clean, maintainable code.",
    personalMotto: "Bridging traditional engineering with modern software development to create innovative solutions."
  }
};

// =============================================================================
// SOCIAL MEDIA & EXTERNAL LINKS CONFIGURATION
// =============================================================================
// Нийгмийн сүлжээ болон гадаад холбоосууд / Social media and external links
export const socialLinks = {
  github: "https://github.com/baljir0901",
  instagram: "https://www.instagram.com/ba1jir_/",
  facebook: "https://www.facebook.com/Ba1jir",
  email: "baljir0901@gmail.com",
  // Дэмжлэгийн холбоосууд / Support links
  buyMeCoffee: "https://buymeacoffee.com/baljir", // "Buy me a coffee" холбоос / "Buy me a coffee" link
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
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "TypeScript", level: 82, color: "#3178C6" },
      { name: "JavaScript", level: 95, color: "#F7DF1E" },
      { name: "HTML/CSS", level: 92, color: "#E34F26" },
      { name: "Vue.js", level: 80, color: "#4FC08D" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    items: [
      { name: "PHP", level: 95, color: "#777BB4" },
      { name: "MySQL", level: 90, color: "#4479A1" },
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Python", level: 80, color: "#3776AB" },
      { name: "PostgreSQL", level: 78, color: "#336791" },
      { name: "MongoDB", level: 75, color: "#47A248" }
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
      { name: "Japanese (N2)", level: 85, color: "#FF6B6B" },
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
    value: "6+",
    icon: "Calendar"
  },
  {
    label: "Projects Completed",
    value: "30+",
    icon: "CheckCircle"
  },
  {
    label: "Technologies",
    value: "20+",
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
    title: "HelloBrainCode",
    description: "Comprehensive programming learning platform with interactive coding tutorials",
    longDescription: "A modern web-based programming education platform designed to help beginners and intermediate developers learn coding through interactive tutorials, hands-on exercises, and real-world projects. Features include multiple programming languages, progress tracking, and community support.",
    image: "/hellobraincode.png",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/baljir0901/hellobraincode",
    demoUrl: "https://www.hellobraincode.com",
    category: "fullstack",
    features: [
      "Interactive coding tutorials",
      "Multiple programming languages support",
      "Progress tracking and analytics",
      "Community-driven learning",
      "Real-world project examples",
      "Mobile-responsive design"
    ],
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "HelloBrain Pro",
    description: "Advanced brain training and cognitive enhancement platform",
    longDescription: "A sophisticated web application focused on cognitive enhancement and brain training exercises. Provides scientifically-backed brain training games, memory improvement techniques, and personalized learning paths to enhance mental performance.",
    image: "/hellobrain.png",
    technologies: ["Vue.js", "PHP", "MySQL", "Chart.js", "Bootstrap", "PWA"],
    githubUrl: "https://github.com/baljir0901/hellobrain-pro",
    demoUrl: "https://www.hellobrain.pro",
    category: "fullstack",
    features: [
      "Cognitive assessment tools",
      "Personalized training programs",
      "Progress analytics and insights",
      "Scientific brain training games",
      "Memory enhancement exercises",
      "Multi-language support"
    ],
    createdAt: "2024-02-20"
  },
  {
    id: 3,
    title: "10xTyping",
    description: "Professional typing speed and accuracy training platform",
    longDescription: "A comprehensive typing training application designed to improve typing speed, accuracy, and overall keyboard proficiency. Features various typing tests, lessons, and games to make learning touch typing engaging and effective.",
    image: "/10xtyping.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Local Storage", "PWA"],
    githubUrl: "https://github.com/baljir0901/10xtyping",
    demoUrl: "https://www.10xtyping.com",
    category: "frontend",
    features: [
      "Real-time typing speed measurement",
      "Accuracy tracking and analysis",
      "Multiple typing test modes",
      "Interactive typing lessons",
      "Progress history and statistics",
      "Customizable difficulty levels"
    ],
    createdAt: "2024-03-10"
  },
  {
    id: 4,
    title: "Bodol Space",
    description: "Creative thinking and idea management platform",
    longDescription: "An innovative web platform designed for creative professionals, entrepreneurs, and thinkers to organize, develop, and share their ideas. Provides tools for brainstorming, idea visualization, collaboration, and project planning.",
    image: "/bodol.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Material-UI"],
    githubUrl: "https://github.com/baljir0901/bodol-space",
    demoUrl: "https://www.bodol.space",
    category: "fullstack",
    features: [
      "Idea organization and categorization",
      "Visual brainstorming tools",
      "Real-time collaboration",
      "Project timeline management",
      "Team workspace creation",
      "Export and sharing capabilities"
    ],
    createdAt: "2024-04-05"
  },
  {
    id: 5,
    title: "PDFTatah",
    description: "Advanced PDF processing and manipulation tool",
    longDescription: "A powerful web-based PDF utility platform that provides comprehensive PDF processing capabilities including merging, splitting, converting, editing, and optimizing PDF documents. Designed for both personal and professional use with focus on security and ease of use.",
    image: "/pdftatah.png",
    technologies: ["PHP", "JavaScript", "PDF.js", "Bootstrap", "MySQL", "File API"],
    githubUrl: "https://github.com/baljir0901/pdftatah",
    demoUrl: "https://www.pdftatah.online",
    category: "fullstack",
    features: [
      "PDF merge and split functionality",
      "Document format conversion",
      "PDF compression and optimization",
      "Secure file processing",
      "Batch processing capabilities",
      "No registration required"
    ],
    createdAt: "2024-05-20"
  }
];

// =============================================================================
// WORK EXPERIENCE CONFIGURATION
// =============================================================================
// Ажлын туршлагын мэдээлэл / Work experience data
export const experiences = [
  {
    id: 1,
    title: "NC Machine engineering",
    company: "Seiko Co., Ltd.",
    period: "2022年10月 - Present",
    date: "2022年10月 - Present",
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
    title: "Automation Engineer",
    company: "ENERGY RESOURCE LLC",
    period: "2019年6月 - 2022年9月",
    date: "2019年6月 - 2022年9月",
    location: "Mongolia",
    type: "Full-time",
    description: "Led automation projects in coal mining operations, developing software solutions for industrial processes and mining equipment optimization.",
    responsibilities: [
      "Designed and implemented mining automation systems",
      "Developed custom software for coal mining operations",
      "AutoCAD technical drawings and system design",
      "Equipment programming and maintenance",
      "Project management and technical documentation"
    ],
    achievements: [
      "Reduced manual monitoring time by 60% through automation",
      "Developed PHP-based mining operation management system",
      "Successfully automated 5+ critical mining processes"
    ],
    technologies: ["AutoCAD", "Industrial Automation", "Mining Software", "PHP", "MySQL", "Python"]
  },
  {
    id: 3,
    title: "Technical Engineer",
    company: "Heavy automotive industry in Mongolia",
    period: "2018年9月 - 2019年5月",
    date: "2018年9月 - 2019年5月",
    location: "Mongolia",
    type: "Full-time",
    description: "Worked in maintenance workshop division providing technical support for mining equipment and developing maintenance management systems.",
    responsibilities: [
      "Mining equipment maintenance and repair",
      "Technical documentation and reporting",
      "Workshop management system development",
      "Equipment diagnostics and troubleshooting",
      "Client technical support"
    ],
    achievements: [
      "Increased equipment uptime by 25% through preventive maintenance",
      "Created digital maintenance tracking system",
      "Trained 10+ junior technicians on equipment operation"
    ],
    technologies: ["Equipment Maintenance", "Technical Documentation", "Workshop Management", "AutoCAD"]
  }
];

// =============================================================================
// TESTIMONIALS CONFIGURATION
// =============================================================================
// Харилцагчийн сэтгэгдэл / Client testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    initials: "SJ",
    role: "CTO at TechStart",
    company: "TechStart Inc.",
    content: "Baljir's expertise in full-stack development is exceptional. His automation engineering background brings unique value to web development projects.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    initials: "MC",
    role: "Product Manager",
    company: "Innovation Labs",
    content: "Working with Baljir was a game-changer. His technical skills combined with excellent Japanese language abilities made our project seamless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emma Davis",
    initials: "ED",
    role: "Engineering Manager",
    company: "NextGen Solutions",
    content: "Baljir's industrial automation experience combined with modern web development skills delivered exceptional results for our manufacturing system.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
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
    "Senior Full-Stack Developer",
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