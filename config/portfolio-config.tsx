import { Mail, Phone, MapPin, Clock, Github, Facebook, Instagram, Coffee } from "lucide-react";

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
  age: 29,
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
  ]
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
      { name: "English (TOEIC 670)", level: 80, color: "#4ECDC4" },
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
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform with real-time inventory management",
    longDescription: "A comprehensive e-commerce solution built with Next.js and Supabase, featuring real-time inventory tracking, secure payment processing, and advanced analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/baljir0901/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.vercel.app",
    category: "fullstack",
    features: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Advanced analytics dashboard",
      "Responsive design",
      "User authentication and authorization"
    ],
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates",
    longDescription: "A powerful task management application that enables teams to collaborate effectively with real-time updates, drag-and-drop functionality, and comprehensive project tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    githubUrl: "https://github.com/baljir0901/task-manager",
    demoUrl: "https://task-manager-demo.vercel.app",
    category: "fullstack",
    features: [
      "Real-time collaboration",
      "Drag and drop interface",
      "Project timeline tracking",
      "Team member management",
      "File attachments and comments"
    ],
    createdAt: "2024-02-20"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts",
    longDescription: "An elegant weather dashboard that provides detailed weather information, forecasts, and beautiful visualizations based on user location or search queries.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/baljir0901/weather-dashboard",
    demoUrl: "https://weather-dashboard-demo.vercel.app",
    category: "frontend",
    features: [
      "Location-based weather data",
      "7-day weather forecast",
      "Interactive weather maps",
      "Beautiful data visualizations",
      "Responsive mobile design"
    ],
    createdAt: "2024-03-10"
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
    company: "Sandvik Mongolia",
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