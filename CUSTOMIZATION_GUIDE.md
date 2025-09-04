# Portfolio Customization Guide

This guide will help you quickly customize this portfolio template for your own use.

## 🎯 Main Configuration File

**Everything you need to change is in one file: `config/portfolio-config.tsx`**

## 📝 Step-by-Step Customization

### 1. Personal Information
Open `config/portfolio-config.tsx` and update the `personalInfo` object:

```typescript
export const personalInfo = {
  name: "Your Full Name",                    // Your complete name
  nickname: "YourNick",                      // Short name for logo
  title: "Your Job Title",                   // e.g., "Frontend Developer"
  email: "your.email@example.com",           // Your email
  phone: "your-phone-number",                // Your phone
  location: "Your City, Country",            // Your location
  bio: "Your short bio for hero section",    // 2-3 sentences
  longBio: "Your detailed bio...",           // Longer description for about section
  avatar: "/your-photo.jpg",                 // Your photo (place in public folder)
  resumeUrl: "/your-resume.pdf",             // Your CV/Resume (place in public folder)
  age: 25,                                   // Your age
  nationality: "Your Country",               // Your nationality
  availability: "Available for work",        // Your work status
};
```

### 2. Social Media Links
Update your social media profiles:

```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  instagram: "https://instagram.com/yourusername", 
  facebook: "https://facebook.com/yourusername",
  buyMeCoffee: "https://buymeacoffee.com/yourusername", // Support link
  email: "your.email@example.com",
};
```

### 3. Skills
Add your technical skills:

```typescript
export const skills = [
  {
    category: "Frontend Development",
    icon: "Layout",
    items: [
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "Vue.js", level: 85, color: "#4FC08D" },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### 4. Projects
Add your projects:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Short project description",
    longDescription: "Detailed project description",
    image: "https://your-image-url.com/image.jpg",
    technologies: ["React", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project",
    demoUrl: "https://your-project-demo.com",
    category: "fullstack", // or "frontend", "backend", "mobile"
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    createdAt: "2024-01-01"
  },
  // Add more projects...
];
```

### 5. Work Experience
Update your work history:

```typescript
export const experiences = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    location: "City, Country",
    type: "Full-time",
    description: "What you did at this job",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2"
    ],
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    technologies: ["Tech1", "Tech2"]
  },
  // Add more experiences...
];
```

### 6. Contact Information
Update contact details:

```typescript
export const contactInfo = [
  {
    label: "Email",
    title: "Email",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    link: `mailto:${personalInfo.email}`
  },
  // Add more contact methods...
];
```

### 7. Admin Panel Settings
Configure admin panel:

```typescript
export const adminConfig = {
  password: "your-admin-password", // Change this!
  settings: {
    maxImageSize: 5 * 1024 * 1024, // 5MB
    allowedImageTypes: ["image/jpeg", "image/jpg", "image/png"],
    maxProjectsPerPage: 12
  }
};
```

## 🖼️ Adding Your Images

### Profile Photo
1. Add your photo to `public/portfolio.jpg`
2. Update `personalInfo.avatar` if using different filename

### Resume/CV
1. Add your resume to `public/your-resume.pdf`
2. Update `personalInfo.resumeUrl` with correct filename

### Project Images
- Use external URLs (recommended): Unsplash, your own hosting
- Or place in `public/` folder and reference as `/image-name.jpg`

## 🎨 Theme Customization

### Colors
Update theme colors in `config/portfolio-config.tsx`:

```typescript
export const themeConfig = {
  primaryColor: "#06B6D4",     // Main brand color
  secondaryColor: "#8B5CF6",   // Secondary color
  accentColor: "#EC4899",      // Accent color
};
```

### Gradients
The portfolio uses these main gradients:
- `from-cyan-400 via-purple-400 to-cyan-400` - Main gradient
- `from-purple-500 to-pink-500` - Secondary gradient

You can change these in the `themeConfig` object.

## 📧 Contact Form Setup

### EmailJS Integration
1. Create account at [EmailJS](https://emailjs.com)
2. Create email service and template
3. Update `src/components/contact.tsx`:

```typescript
emailjs.sendForm(
  "your_service_id",    // Your EmailJS service ID
  "your_template_id",   // Your EmailJS template ID
  formRef.current,
  "your_public_key"     // Your EmailJS public key
);
```

## 🚀 Deployment

### Quick Deploy to Vercel
1. Push your code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Environment Variables (if needed)
Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🔧 Advanced Customization

### Adding New Sections
1. Create component in `src/components/`
2. Add to `src/app/page.tsx`
3. Update navigation in `config/portfolio-config.tsx`

### Changing Animations
- Animations use Framer Motion
- Modify `initial`, `animate`, `transition` props in components

### Adding New Skills Categories
Add to `skills` array in config:
```typescript
{
  category: "Your New Category",
  icon: "IconName", // Lucide icon name
  items: [
    { name: "Skill Name", level: 80, color: "#color" }
  ]
}
```

## 🐛 Troubleshooting

### Projects not showing?
- Check browser console for errors
- Verify `projects` array in config file
- Clear localStorage: `localStorage.clear()`

### Images not loading?
- Ensure images are in `public/` folder
- Check file paths are correct
- Verify image URLs are accessible

### Contact form not working?
- Check EmailJS configuration
- Verify service ID, template ID, and public key
- Check browser console for errors

## 📞 Support

If you need help customizing this template:
1. Check this guide first
2. Look at the config file comments
3. Check the component files for examples

---

**Happy coding! 🎉**