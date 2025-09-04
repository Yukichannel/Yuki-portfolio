"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjects, Project } from '@/contexts/ProjectContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  ExternalLink,
  Github
} from 'lucide-react';
import Image from 'next/image';

interface ProjectForm {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageFile: File | null;
  technologies: string;
  githubUrl: string;
  demoUrl: string;
  category: string;
  features: string;
}

const initialForm: ProjectForm = {
  title: '',
  description: '',
  longDescription: '',
  image: '',
  imageFile: null,
  technologies: '',
  githubUrl: '',
  demoUrl: '',
  category: 'fullstack',
  features: ''
};

export default function AdminPanel() {
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [form, setForm] = useState<ProjectForm>(initialForm);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');

  // Simple authentication (in production, use proper authentication)
  const handleAuth = () => {
    if (adminPassword === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleInputChange = (field: keyof ProjectForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  // Зураг файл сонгох функц / Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Зөвхөн зургийн файл зөвшөөрөх / Only allow image files
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Файлын хэмжээ шалгах (5MB хязгаар) / Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setForm(prev => ({ ...prev, imageFile: file }));
      
      // Зургийн урьдчилан харах / Create image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Base64 руу хөрвүүлэх функц / Convert file to base64
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async () => {
    if (!form.title || !form.description) {
      alert('Please fill in required fields');
      return;
    }

    let imageUrl = form.image;
    
    // Хэрэв шинэ зураг сонгосон бол base64 руу хөрвүүлэх / Convert new image to base64 if selected
    if (form.imageFile) {
      try {
        imageUrl = await convertToBase64(form.imageFile);
      } catch (error) {
        alert('Error processing image');
        return;
      }
    }

    const projectData = {
      title: form.title,
      description: form.description,
      longDescription: form.longDescription,
      image: imageUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      technologies: form.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
      githubUrl: form.githubUrl,
      demoUrl: form.demoUrl,
      category: form.category,
      features: form.features.split('\n').map(feature => feature.trim()).filter(feature => feature)
    };

    if (editingProject) {
      updateProject(editingProject.id, projectData);
      setEditingProject(null);
    } else {
      addProject(projectData);
    }

    setForm(initialForm);
    setImagePreview('');
    setIsFormOpen(false);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setForm({
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      image: project.image,
      imageFile: null,
      technologies: project.technologies.join(', '),
      githubUrl: project.githubUrl,
      demoUrl: project.demoUrl,
      category: project.category,
      features: project.features.join('\n')
    });
    setImagePreview(project.image);
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setForm(initialForm);
    setImagePreview('');
    setEditingProject(null);
    setIsFormOpen(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-cyan-400">Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleAuth()}
            />
            <Button 
              onClick={handleAuth}
              className="w-full bg-cyan-600 hover:bg-cyan-700"
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Project Admin Panel
          </h1>
          <div className="flex gap-4">
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
            <Button
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-cyan-400">{projects.length}</div>
              <div className="text-gray-300">Total Projects</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-400">
                {projects.filter(p => p.category === 'fullstack').length}
              </div>
              <div className="text-gray-300">Fullstack Projects</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-pink-400">
                {projects.filter(p => p.category === 'frontend').length}
              </div>
              <div className="text-gray-300">Frontend Projects</div>
            </CardContent>
          </Card>
        </div>

        {/* Project Form Modal */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={(e) => e.target === e.currentTarget && handleCancel()}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-cyan-400">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
                  </h2>
                  <Button
                    onClick={handleCancel}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Title *
                    </label>
                    <Input
                      value={form.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="Project title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description *
                    </label>
                    <Textarea
                      value={form.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="Short description"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Long Description
                    </label>
                    <Textarea
                      value={form.longDescription}
                      onChange={(e) => handleInputChange('longDescription', e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="Detailed description"
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Төслийн зураг / Project Image
                    </label>
                    <div className="space-y-4">
                      {/* Зураг оруулах хэсэг / Image upload section */}
                      <div className="flex items-center gap-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="image-upload"
                        />
                        <label
                          htmlFor="image-upload"
                          className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition-colors duration-200 text-sm"
                        >
                          Зураг сонгох / Choose Image
                        </label>
                        <span className="text-gray-400 text-sm">
                          {form.imageFile ? form.imageFile.name : 'Файл сонгогдоогүй / No file selected'}
                        </span>
                      </div>
                      
                      {/* Зургийн урьдчилан харах / Image preview */}
                      {imagePreview && (
                        <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-600">
                          <Image
                            src={imagePreview}
                            alt="Preview"
                            fill
                            className="object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImagePreview('');
                              setForm(prev => ({ ...prev, imageFile: null, image: '' }));
                            }}
                            className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                          >
                            ×
                          </button>
                        </div>
                      )}
                      
                      {/* Эсвэл URL оруулах / Or enter URL */}
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">
                          Эсвэл зургийн холбоос оруулна уу / Or enter image URL
                        </label>
                        <Input
                          value={form.image}
                          onChange={(e) => {
                            handleInputChange('image', e.target.value);
                            if (e.target.value) {
                              setImagePreview(e.target.value);
                              setForm(prev => ({ ...prev, imageFile: null }));
                            }
                          }}
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Technologies (comma separated)
                    </label>
                    <Input
                      value={form.technologies}
                      onChange={(e) => handleInputChange('technologies', e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="React, Next.js, TypeScript, Node.js"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        GitHub URL
                      </label>
                      <Input
                        value={form.githubUrl}
                        onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="https://github.com/username/repo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Demo URL
                      </label>
                      <Input
                        value={form.demoUrl}
                        onChange={(e) => handleInputChange('demoUrl', e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="https://project-demo.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="fullstack">Fullstack</option>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                      <option value="mobile">Mobile</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Features (one per line)
                    </label>
                    <Textarea
                      value={form.features}
                      onChange={(e) => handleInputChange('features', e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="Responsive design&#10;Real-time updates&#10;User authentication"
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="bg-cyan-600 hover:bg-cyan-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {editingProject ? 'Update' : 'Create'} Project
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects List */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-300">Projects ({projects.length})</h2>
          
          {projects.length === 0 ? (
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-gray-400 mb-4">No projects yet</div>
                <Button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-cyan-600 hover:bg-cyan-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Project
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <Card className="bg-gray-900 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-cyan-600 text-white">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                      <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {project.demoUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-800"
                              onClick={() => window.open(project.demoUrl, '_blank')}
                            >
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-800"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleEdit(project)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => {
                              if (confirm('Are you sure you want to delete this project?')) {
                                deleteProject(project.id);
                              }
                            }}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}