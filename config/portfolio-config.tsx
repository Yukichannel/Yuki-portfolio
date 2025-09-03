import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Personal Information
export const personalInfo = {
  name: "Ulamundrakh Baljirlkhundev",
  nickname: "Baljir",
  nameJapanese: "ウラムウンダラハ バルジルフンデブ",
  title: "Senior Full-Stack Developer",
  description: "Experienced full-stack developer with expertise in modern web technologies, automation engineering, and multilingual development",
  email: "baljir0901@gmail.com",
  phone: "090-3332-9900",
  location: "Tokyo, Japan",
  address: "Tokyo, Japan",
  nationality: "Mongolia",
  dateOfBirth: "1995年09月01日",
  age: 29,
  gender: "Male",
  bio: "Senior full-stack developer with 6+ years of experience in web development, automation engineering, and mining technology. Fluent in Japanese (N2 level), English, and Mongolian. Currently working as System Engineer at VMP Japanese company while developing modern web applications using React, Next.js, and various backend technologies.",
  longBio: "I am a dedicated senior full-stack developer with extensive experience spanning web development, industrial automation, and mining technology. My journey began in Mongolia where I studied automation engineering and gained hands-on experience with automation systems. After completing exchange studies at Shibaura Institute of Technology in Japan, I developed a passion for combining traditional engineering with modern software development. Currently based in Tokyo, Japan, I work as a System Engineer at VMP Japanese company while pursuing freelance web development projects. My multilingual abilities (Japanese N2, English, Mongolian) and cross-cultural experience enable me to work effectively with diverse teams and clients. I specialize in PHP, JavaScript, React, and have deep expertise in industrial automation and mining software solutions.",
  avatar: "/portfolio.jpg",
  resumeUrl: "/rireksho-blank.pdf",
  yearsOfExperience: 6,
  projectsCompleted: 30,
  technologiesMastered: 20,
  githubContributions: 800,
  availability: "Available for freelance projects",
  languages: [
    { name: "Japanese", level: "N2", proficiency: 85 },
    { name: "English", level: "TOEIC 670", proficiency: 80 },
    { name: "Mongolian", level: "Native", proficiency: 100 }
  ]
};

// Social Media Links
export const socialLinks = {
  github: "https://github.com/baljir0901",
  instagram: "https://www.instagram.com/ba1jir_/",
  facebook: "https://www.facebook.com/Ba1jir",
  email: "baljir0901@gmail.com",
};

// Skills Configuration
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

// Stats for About Section
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

// Interests and Hobbies
export const interests = [
  "Mountain Hiking - Active hiker since university, achieved Sports Merit 3rd grade, climbed Mount Fuji",
  "Language Learning - Member of Toastmasters International for English conversation and speech contests",
  "Technical Drawing - Skilled in pencil drawing, especially automotive sketches in black and white",
  "Automotive Technology - Studied automotive technology in Japan and Mongolia, worked in industrial maintenance"
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: "HelloBrainCode",
    description: "Professional programming education platform offering comprehensive coding courses and web development training.",
    longDescription: "HelloBrainCode is a cutting-edge educational platform designed to teach programming and web development skills. Features interactive coding exercises, comprehensive course modules, and practical project-based learning approach for aspiring developers.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "fullstack",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://www.hellobraincode.com",
    githubUrl: "https://github.com/baljir0901",
    features: [
      "Interactive coding tutorials",
      "Progress tracking system",
      "Multi-language course content",
      "Real-time code editor",
      "Student dashboard and analytics"
    ]
  },
  {
    id: 2,
    title: "HelloBrain Pro",
    description: "Advanced AI-powered brain training platform with personalized learning algorithms and cognitive enhancement exercises.",
    longDescription: "HelloBrain Pro is an innovative cognitive training platform that uses AI algorithms to provide personalized brain exercises. The platform adapts to user performance and offers scientifically-backed training modules for memory, attention, and problem-solving skills.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "fullstack",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Redis", "AWS"],
    demoUrl: "https://www.hellobrain.pro",
    githubUrl: "https://github.com/baljir0901",
    features: [
      "AI-powered personalized training",
      "Cognitive assessment tools",
      "Progress analytics and reporting",
      "Gamified learning experience",
      "Multi-device synchronization"
    ]
  },
  {
    id: 3,
    title: "KittoKatsu Pro",
    description: "Professional Japanese language learning platform with innovative teaching methods and cultural immersion features.",
    longDescription: "KittoKatsu Pro is a comprehensive Japanese language learning platform designed for serious learners. Features advanced grammar lessons, kanji practice, cultural context learning, and interactive conversation simulations with AI-powered feedback.",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "frontend",
    technologies: ["Vue.js", "TypeScript", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
    demoUrl: "https://www.kittokatsu.pro",
    githubUrl: "https://github.com/baljir0901",
    features: [
      "Advanced grammar and kanji learning",
      "Cultural context integration",
      "AI conversation practice",
      "JLPT preparation modules",
      "Progress tracking and certificates"
    ]
  },
  {
    id: 4,
    title: "Bodol Space",
    description: "Creative digital workspace and collaboration platform for teams and freelancers with project management tools.",
    longDescription: "Bodol Space is a modern collaboration platform that combines workspace management, project tracking, and team communication. Designed for creative professionals and development teams who need an integrated solution for project management and collaboration.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "fullstack",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker"],
    demoUrl: "https://www.bodol.space",
    githubUrl: "https://github.com/baljir0901",
    features: [
      "Real-time collaboration tools",
      "Project timeline management",
      "File sharing and version control",
      "Team communication dashboard",
      "Custom workflow automation"
    ]
  },
  {
    id: 5,
    title: "10x Typing Pro",
    description: "Advanced typing speed training platform with gamification, detailed analytics, and competitive challenges.",
    longDescription: "10x Typing Pro is a professional typing training platform designed to help users achieve exceptional typing speeds. Features scientific training methods, detailed performance analytics, competitive challenges, and personalized improvement plans for both casual and professional typists.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "frontend",
    technologies: ["React", "TypeScript", "Chart.js", "Firebase", "PWA", "Framer Motion"],
    demoUrl: "https://www.10xtyping.pro",
    githubUrl: "https://github.com/baljir0901",
    features: [
      "Scientific typing methodology",
      "Real-time WPM and accuracy tracking",
      "Competitive leaderboards",
      "Custom text and code practice",
      "Detailed performance analytics"
    ]
  }
];

// Experience Data
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

// Testimonials
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

// Contact Information
export const contactInfo = [
  {
    label: "Email",
    title: "Email",
    value: "baljir0901@gmail.com",
    icon: Mail,
    href: "mailto:baljir0901@gmail.com",
    link: "mailto:baljir0901@gmail.com"
  },
  {
    label: "Phone",
    title: "Phone",
    value: "090-3332-9900",
    icon: Phone,
    href: "tel:090-3332-9900",
    link: "tel:090-3332-9900"
  },
  {
    label: "Location",
    title: "Location",
    value: "Tokyo, Japan",
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "Address",
    title: "Address",
    value: "Tokyo, Japan",
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "Availability",
    title: "Availability",
    value: "Available for freelance projects",
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

// SEO and Meta Information
export const seoData = {
  title: "Ulamundrakh Baljirlkhundev - Senior Full-Stack Developer",
  description: "Senior full-stack developer with expertise in PHP, JavaScript, React, and industrial automation. Based in Japan with N2 Japanese proficiency.",
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
    "Ulamundrakh Baljirlkhundev"
  ],
  author: "Ulamundrakh Baljirlkhundev",
  ogImage: "/portfolio.jpg"
};
