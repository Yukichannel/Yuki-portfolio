"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { projects as projectsFromConfig } from '../../config/portfolio-config';

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
}

// Төслийн контекст үүсгэх / Create project context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);


// Төслийн контекст провайдер / Project context provider
export function ProjectProvider({ children }: { children: React.ReactNode }) {
  // Төслүүдийн төлөв удирдах / Manage projects state
  const [projects, setProjects] = useState<Project[]>(projectsFromConfig);

  // Шинэ төсөл нэмэх функц / Function to add new project
  const addProject = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...projectData,
      id: Math.max(...projects.map(p => p.id), 0) + 1,
      createdAt: new Date().toISOString()
    };
    setProjects(prev => [...prev, newProject]);
  };

  return (
    <ProjectContext.Provider 
      value={{ projects, addProject }}
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