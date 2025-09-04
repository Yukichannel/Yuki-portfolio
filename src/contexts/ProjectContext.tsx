"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { projects as defaultProjectsFromConfig } from '../../config/portfolio-config';

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
        setProjects(defaultProjectsFromConfig);
        // Анхдагч төслүүдийг localStorage-д хадгалах / Save default projects to localStorage
        localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjectsFromConfig));
      }
    } catch (error) {
      console.error('❌ Error loading projects from localStorage:', error);
      // Алдаа гарсан тохиолдолд анхдагч төслүүд ашиглах / Use default projects on error
      setProjects(defaultProjectsFromConfig);
      localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjectsFromConfig));
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