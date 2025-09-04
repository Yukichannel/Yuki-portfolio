"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

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

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  updateProject: (id: number, project: Partial<Project>) => void;
  deleteProject: (id: number) => void;
  getProject: (id: number) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);

  // Load projects from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR дэмжлэг / SSR support
    
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) {
      try {
        const parsedProjects = JSON.parse(savedProjects);
        console.log('Loaded projects from localStorage:', parsedProjects); // Дебаг лог / Debug log
        setProjects(parsedProjects);
      } catch (error) {
        console.error('Error loading projects from localStorage:', error);
        // Алдаа гарсан тохиолдолд хоосон жагсаалт тохируулах / Set empty array on error
        setProjects([]);
      }
    } else {
      console.log('No projects found in localStorage'); // Дебаг лог / Debug log
    }
  }, []);

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR дэмжлэг / SSR support
    
    console.log('Saving projects to localStorage:', projects); // Дебаг лог / Debug log
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now(), // Simple ID generation
      createdAt: new Date().toISOString(),
    };
    console.log('Adding new project:', newProject); // Дебаг лог / Debug log
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: number, updatedData: Partial<Project>) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id ? { ...project, ...updatedData } : project
      )
    );
  };

  const deleteProject = (id: number) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

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

export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}
