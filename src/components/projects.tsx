"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Filter,
  X,
  Play,
  Settings
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useProjects, Project } from "@/contexts/ProjectContext";

/**
 * Төслүүдийн хэсгийн үндсэн компонент
 * Main projects section component
 */
export default function Projects() {
  // Төслийн контекстоос өгөгдөл авах / Get data from project context
  const { projects } = useProjects();
  
  // Сонгосон ангиллын төлөв / Selected category state
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  // Сонгосон төслийн төлөв / Selected project state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // Компонент бэлэн болсон эсэхийн төлөв / Component mounted state
  const [isMounted, setIsMounted] = useState(false);

  // Компонент эхлэх үед / On component mount
  useEffect(() => {
    setIsMounted(true);
    console.log('🎯 Projects component mounted, current projects:', projects);
  }, [projects]);

  // Өвөрмөц ангиллуудыг олох / Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

  // Сонгосон ангиллаар төслүүдийг шүүх / Filter projects by selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Анимацийн тохиргоо / Animation configuration
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

  // Hydration алдаа зайлсхийх / Prevent hydration mismatch
  if (!isMounted) {
    return (
      <section id="projects" className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-gray-300 text-lg">Loading projects...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Арын дэвсгэрийн элементүүд / Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-line-grid-animated" />
      </div>

      {/* Хоёрдогч цэгэн хээ / Secondary dot pattern */}
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
          {/* Хэсгийн толгой / Section header */}
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
            
            {/* Дебаг мэдээлэл / Debug information */}
            <div className="mt-4 text-sm text-gray-500">
              Нийт төсөл: {projects.length} / Total projects: {projects.length}
              {projects.length === 0 && (
                <div className="mt-2">
                  <Link 
                    href="/admin" 
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 underline"
                  >
                    <Settings className="w-4 h-4" />
                    Төсөл нэмэх / Add projects in admin panel
                  </Link>
                </div>
              )}
            </div>
          </motion.div>

          {/* Ангиллын шүүлтүүр / Category filter */}
          {projects.length > 0 && (
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
          )}

          {/* Төслүүдийн сүлжээ / Projects grid */}
          {projects.length > 0 ? (
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
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
                              <Button 
                                size="sm" 
                                variant="secondary" 
                                className="bg-white/20 backdrop-blur-sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.githubUrl, '_blank');
                                }}
                              >
                                <Github className="w-4 h-4" aria-label="View GitHub repository" />
                              </Button>
                            )}
                            {project.demoUrl && (
                              <Button 
                                size="sm" 
                                variant="secondary" 
                                className="bg-white/20 backdrop-blur-sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.demoUrl, '_blank');
                                }}
                              >
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
          ) : (
            // Төсөл байхгүй үеийн мессеж / No projects message
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                  <Settings className="w-12 h-12 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Төсөл байхгүй байна</h3>
                  <p className="text-gray-400 text-lg mb-4">No projects available yet.</p>
                  <p className="text-gray-500 text-sm mb-6">
                    Төслүүдийг админ панелаар нэмж болно / Projects can be added through the admin panel
                  </p>
                  <Link href="/admin">
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                      <Settings className="w-4 h-4 mr-2" />
                      Админ панел руу очих / Go to Admin Panel
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Шүүлтүүрээр олдоогүй төслийн мессеж / No projects found message */}
          {projects.length > 0 && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">Энэ ангилалд төсөл олдсонгүй / No projects found in this category.</p>
              <Button
                onClick={() => setSelectedCategory("All")}
                variant="outline"
                className="mt-4 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
              >
                Бүх төсөл харах / View All Projects
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Төслийн дэлгэрэнгүй модал / Project detail modal */}
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
                    <h3 className="text-xl font-bold text-white mb-4">Тайлбар / Description</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                    
                    <h3 className="text-xl font-bold text-white mb-4">Гол онцлогууд / Key Features</h3>
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
                    <h3 className="text-xl font-bold text-white mb-4">Ашигласан технологи / Technologies Used</h3>
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