"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Төслийн интерфейс тодорхойлолт / Project interface definition
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  category: string;
  features: string[];
  createdAt?: string;
}

// Төслийн контекстийн төрөл / Project context type
interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  updateProject: (id: number, project: Partial<Project>) => void;
  deleteProject: (id: number) => void;
  getProject: (id: number) => Project | undefined;
}

// Төслийн контекст үүсгэх / Create project context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Анхдагч төслүүдийн жагсаалт / Default projects list
const defaultProjects: Project[] = [
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

// Төслийн контекст провайдер / Project context provider
export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Компонент эхлэх үед localStorage-аас төслүүд ачаалах / Load projects from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR дэмжлэг / SSR support
    
    try {
      const savedProjects = localStorage.getItem('portfolio-projects');
      console.log('🔍 Checking localStorage for projects...'); // Дебаг лог / Debug log
      
      if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        console.log('✅ Loaded projects from localStorage:', parsedProjects); // Дебаг лог / Debug log
        setProjects(parsedProjects);
      } else {
        console.log('📝 No saved projects found, using default projects'); // Дебаг лог / Debug log
        setProjects(defaultProjects);
        // Анхдагч төслүүдийг localStorage-д хадгалах / Save default projects to localStorage
        localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjects));
      }
    } catch (error) {
      console.error('❌ Error loading projects from localStorage:', error);
      // Алдаа гарсан тохиолдолд анхдагч төслүүд ашиглах / Use default projects on error
      setProjects(defaultProjects);
      localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjects));
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Төслүүд өөрчлөгдөх бүрд localStorage-д хадгалах / Save projects to localStorage whenever projects change
  useEffect(() => {
    if (typeof window === 'undefined' || !isLoaded) return; // SSR дэмжлэг болон анхны ачаалалтыг алгасах / SSR support and skip initial load
    
    console.log('💾 Saving projects to localStorage:', projects); // Дебаг лог / Debug log
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects, isLoaded]);

  // Шинэ төсөл нэмэх функц / Add new project function
  const addProject = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now(), // Энгийн ID үүсгэх / Simple ID generation
      createdAt: new Date().toISOString(),
    };
    console.log('➕ Adding new project:', newProject); // Дебаг лог / Debug log
    setProjects(prev => {
      const updated = [...prev, newProject];
      console.log('📊 Updated projects list:', updated); // Дебаг лог / Debug log
      return updated;
    });
  };

  // Төсөл засварлах функц / Update project function
  const updateProject = (id: number, updatedData: Partial<Project>) => {
    console.log('✏️ Updating project:', id, updatedData); // Дебаг лог / Debug log
    setProjects(prev => 
      prev.map(project => 
        project.id === id ? { ...project, ...updatedData } : project
      )
    );
  };

  // Төсөл устгах функц / Delete project function
  const deleteProject = (id: number) => {
    console.log('🗑️ Deleting project:', id); // Дебаг лог / Debug log
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  // Тодорхой төсөл олох функц / Get specific project function
  const getProject = (id: number) => {
    return projects.find(project => project.id === id);
  };

  return (
    <ProjectContext.Provider 
      value={{ 
        projects, 
        addProject, 
        updateProject, 
        deleteProject, 
        getProject 
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

// Төслийн контекст ашиглах hook / Hook to use project context
export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}