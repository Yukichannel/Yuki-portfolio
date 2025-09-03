"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Filter,
  X,
  Play
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useProjects, Project } from "@/contexts/ProjectContext";

export default function Projects() {
  const { projects } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-line-grid-animated" />
      </div>

      {/* Secondary dot pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="h-full w-full bg-dot-grid" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Portfolio</span>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore my recent work spanning web applications, automation systems, and innovative solutions
              that solve real-world problems.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-2 bg-white/5 border border-white/10 rounded-full">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Filter className="w-3 h-3 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="bg-white/5 border-white/10 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-400/20 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={240}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0">
                          New
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                              <Github className="w-4 h-4" aria-label="View GitHub repository" />
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                              <ExternalLink className="w-4 h-4" aria-label="View live demo" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs border-cyan-400/50 text-cyan-400">
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          2024
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-white/10 text-gray-300 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-white/10 text-gray-300 border-0"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              {projects.length === 0 ? (
                <div className="space-y-4">
                  <p className="text-gray-400 text-lg">No projects available yet.</p>
                  <p className="text-gray-500 text-sm">
                    Projects can be added through the{" "}
                    <Link href="/admin" className="text-cyan-400 hover:text-cyan-300 underline">
                      admin panel
                    </Link>
                  </p>
                </div>
              ) : (
                <p className="text-gray-400 text-lg">No projects found in this category.</p>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-gray-900 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
                />
                <Button
                  onClick={() => setSelectedProject(null)}
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm hover:bg-black/70"
                >
                  <X className="w-4 h-4" />
                </Button>
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0">
                  Featured Project
                </Badge>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                        {selectedProject.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        Completed 2024
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {selectedProject.githubUrl && (
                      <Link
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="border-white/20 hover:border-cyan-400/50">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    )}
                    {selectedProject.demoUrl && (
                      <Link
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                          <Play className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Description</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="justify-center py-2 bg-white/10 text-gray-300 border-white/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}