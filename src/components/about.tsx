"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  MapPin, 
  Calendar, 
  Languages,
  Briefcase,
  Star
} from "lucide-react";
import Image from "next/image";
import { personalInfo, stats, experiences, testimonials } from "../../config/portfolio-config.tsx";

export default function About() {
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
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-line-grid" />
      </div>

      <div className="absolute inset-0 opacity-3">
        <div className="h-full w-full bg-dot-grid-sm" />
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
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">About Me</span>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Get to Know Me
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies and industrial automation.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Card */}
              <Card className="bg-white/5 border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-cyan-400/30">
                      <Image
                        src="/portfolio.jpg"
                        alt={personalInfo.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {personalInfo.name}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-3">
                        {personalInfo.title}
                      </p>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          {personalInfo.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          Age: {personalInfo.age}
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-cyan-400" />
                          {personalInfo.nationality}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bio */}
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-cyan-400" />
                    About Me
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {personalInfo.longBio}
                  </p>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Languages className="w-5 h-5 text-cyan-400" />
                    Languages
                  </h4>
                  <div className="space-y-4">
                    {personalInfo.languages.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{lang.name}</span>
                          <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                            {lang.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${lang.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Stats & Experience */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Experience */}
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                    Current Role
                  </h4>
                  {experiences.length > 0 && (
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-400 pl-6">
                        <h5 className="text-lg font-semibold text-white">
                          {experiences[0].title}
                        </h5>
                        <p className="text-cyan-400 font-medium">
                          {experiences[0].company}
                        </p>
                        <p className="text-gray-400 text-sm mb-3">
                          {experiences[0].period}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {experiences[0].description}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Star className="w-5 h-5 text-cyan-400" />
                    Interests & Hobbies
                  </h4>
                  <div className="space-y-3">
                    {personalInfo.interests.map((interest, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Testimonials Section */}
          {testimonials.length > 0 && (
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-3xl font-bold text-center text-white mb-12">
                What People Say
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, _) => (
                  <motion.div
                    key={testimonial.id}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">
                          {testimonial.name}
                        </h5>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}