// Portfolio Configuration
export const personalInfo = {
  name: "BALJIR",
  nickname: "BALJIR",
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I create innovative solutions that bridge design and functionality.",
  email: "baljir@example.com",
  phone: "+81 XXX-XXXX-XXXX",
  location: "Tokyo, Japan",
  linkedin: "linkedin.com/in/baljir",
  github: "github.com/baljir0901"
};

export const socialLinks = {
  github: "https://github.com/baljir0901",
  facebook: "https://facebook.com/baljir",
  instagram: "https://instagram.com/baljir",
  linkedin: "https://linkedin.com/in/baljir"
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "30+" }
];

export const interests = [
  {
    icon: "💻",
    title: "Web Development",
    description: "Building modern web applications with React, Next.js, and TypeScript"
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description: "Exploring artificial intelligence and machine learning technologies"
  },
  {
    icon: "🎨",
    title: "UI/UX Design", 
    description: "Creating beautiful and intuitive user interfaces and experiences"
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications"
  },
  {
    icon: "🌟",
    title: "Open Source",
    description: "Contributing to open source projects and the developer community"
  },
  {
    icon: "🎮",
    title: "Gaming",
    description: "Playing and developing games in my free time"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    school: "Tokyo Institute of Technology",
    period: "2021 - 2023",
    description: "Specialized in web technologies and software engineering",
    location: "Tokyo, Japan"
  },
  {
    id: 2,
    degree: "Bachelor of Information Technology",
    school: "Waseda University", 
    period: "2017 - 2021",
    description: "Foundation in computer science and programming",
    location: "Tokyo, Japan"
  }
];

export const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2022"
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    year: "2022"
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    year: "2021"
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/baljir0901/ecommerce",
    demoUrl: "https://example-ecommerce.com",
    featured: true,
    category: "fullstack",
    features: ["Payment Integration", "User Authentication", "Product Management", "Order Tracking", "Admin Dashboard"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/baljir0901/task-manager",
    demoUrl: "https://example-tasks.com",
    featured: true,
    category: "fullstack",
    features: ["Real-time Collaboration", "Task Assignment", "Progress Tracking", "Team Chat", "File Sharing"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with interactive maps and forecast data",
    image: "/projects/weather.jpg",
    technologies: ["Vue.js", "Weather API", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/baljir0901/weather-dashboard",
    demoUrl: "https://example-weather.com",
    featured: false,
    category: "frontend",
    features: ["Interactive Maps", "7-Day Forecast", "Multiple Locations", "Weather Alerts", "Historical Data"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Framer Motion animations",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://baljir-portfolio.com",
    githubUrl: "https://github.com/baljir0901/portfolio",
    demoUrl: "https://baljir-portfolio.com",
    featured: true,
    category: "frontend",
    features: ["Responsive Design", "Smooth Animations", "Dark Theme", "Performance Optimized", "SEO Friendly"]
  }
];

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const contactInfo = [
  {
    title: "Email",
    value: "baljir@example.com",
    link: "mailto:baljir@example.com",
    icon: Mail
  },
  {
    title: "Phone",
    value: "+81 XXX-XXXX-XXXX",
    link: "tel:+81XXXXXXXXX",
    icon: Phone
  },
  {
    title: "Location",
    value: "Tokyo, Japan",
    link: "https://maps.google.com/?q=Tokyo,Japan",
    icon: MapPin
  },
  {
    title: "GitHub",
    value: "github.com/baljir0901",
    link: "https://github.com/baljir0901",
    icon: Github
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/baljir",
    link: "https://linkedin.com/in/baljir",
    icon: Linkedin
  }
];
