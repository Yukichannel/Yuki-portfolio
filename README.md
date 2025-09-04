# Portfolio Website Template

A modern, customizable portfolio website built with Next.js, TypeScript, and Tailwind CSS. Perfect for developers who want a professional portfolio that's easy to customize.

## 🚀 Quick Start for Developers

### 1. Clone and Setup
```bash
git clone [your-repo-url]
cd portfolio-website
npm install
npm run dev
```

### 2. Customize Your Information
All personal information can be changed in one file: `config/portfolio-config.tsx`

#### Personal Information
```typescript
export const personalInfo = {
  name: "Your Full Name",
  nickname: "YourNick", 
  title: "Your Job Title",
  email: "your.email@example.com",
  phone: "your-phone-number",
  location: "Your City, Country",
  bio: "Your short bio...",
  longBio: "Your detailed bio...",
  avatar: "/your-photo.jpg", // Place your photo in public folder
  // ... other fields
};
```

#### Social Media Links
```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  facebook: "https://facebook.com/yourusername",
  buyMeCoffee: "https://buymeacoffee.com/yourusername",
  // ... other links
};
```

#### Skills
```typescript
export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: 90, color: "#61DAFB" },
      // ... add your skills
    ]
  }
];
```

#### Projects
```typescript
export const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "project-image-url",
    technologies: ["React", "Next.js"],
    githubUrl: "github-repo-url",
    demoUrl: "live-demo-url",
    // ... other fields
  }
];
```

### 3. Replace Images
- Replace `/public/portfolio.jpg` with your photo
- Replace `/public/rireksho-blank.pdf` with your CV/Resume

### 4. Admin Panel
- Access `/admin` to add/edit projects dynamically
- Default password: `admin123` (change in config file)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── admin/page.tsx    # Admin panel
│   └── layout.tsx        # Root layout
├── components/
│   ├── hero.tsx          # Hero section
│   ├── about-clean.tsx   # About section
│   ├── projects.tsx      # Projects section
│   ├── skills.tsx        # Skills section
│   ├── contact.tsx       # Contact form
│   ├── footer.tsx        # Footer
│   ├── header.tsx        # Navigation
│   └── AdminPanel.tsx    # Admin interface
├── contexts/
│   └── ProjectContext.tsx # Project state management
└── config/
    └── portfolio-config.tsx # 🎯 MAIN CONFIG FILE
```

## 🎨 Customization Guide

### Colors and Theme
Edit `config/portfolio-config.tsx`:
```typescript
export const themeConfig = {
  primaryColor: "#06B6D4", // Change primary color
  secondaryColor: "#8B5CF6", // Change secondary color
  // ... other theme settings
};
```

### Navigation Menu
```typescript
export const navigationConfig = {
  menuItems: [
    { id: "home", label: "Home", href: "#home" },
    // ... add/remove menu items
  ]
};
```

### Contact Information
```typescript
export const contactInfo = [
  {
    label: "Email",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
  },
  // ... add more contact methods
];
```

## 🛠 Features

- ✅ Fully responsive design
- ✅ Dark theme with modern gradients
- ✅ Smooth animations with Framer Motion
- ✅ Contact form with EmailJS integration
- ✅ Admin panel for project management
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Easy customization through config file
- ✅ SEO optimized

## 📧 Contact Form Setup

1. Create an EmailJS account
2. Update these values in `src/components/contact.tsx`:
```typescript
emailjs.sendForm(
  "your_service_id",    // Replace with your EmailJS service ID
  "your_template_id",   // Replace with your EmailJS template ID
  formRef.current,
  "your_public_key"     // Replace with your EmailJS public key
);
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
# Upload the `out` folder to your hosting provider
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Made with ❤️ for the developer community**