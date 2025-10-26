"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, GraduationCap, Download, User } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef } from "react";
import { personalInfo, stats } from "../../config/portfolio-config";


/**
 * Миний тухай хэсгийн компонент
 * About me section component
 */
export default function About() {
  const ref = useRef<HTMLElement>(null);
  
  // Гүйлгэх анимацийн тохиргоо / Scroll animation configuration
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-black via-purple-900/30 to-black"
    >
      {/* Сүлжээний арын дэвсгэр / Enhanced grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-line-grid" />
      </div>
      
      {/* Хэсгийн толгой / Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        {/* Хэсгийн тэмдэг / Section badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
          <User className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-mono text-sm">About Me</span>
        </div>
        
        {/* Үндсэн гарчиг / Main title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        
        {/* Тайлбар / Description */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Passionate full-stack developer with expertise in modern web technologies.
        </p>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            {/* Үндсэн карт / Main card */}
            <div className="relative bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/10 shadow-2xl min-h-[600px]">
              
              {/* Толгой хэсэг / Header section */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center p-1">
                  <Image
                    src="/portfolio.jpg"
                    alt="Gusk Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </h3>
                  <p className="text-purple-300 text-sm">Full-Stack Developer</p>
                </div>
              </div>

              {/* Статистикийн сүлжээ / Stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="relative p-4 rounded-xl border bg-white/5 border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center group"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Табууд / Tabs section */}
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 gap-2 bg-transparent p-0 h-auto mb-8">
                  <TabsTrigger 
                    value="about" 
                    className="relative bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl py-3 text-white hover:from-cyan-400/20 hover:to-purple-400/20 hover:border-cyan-400/50 data-[state=active]:from-cyan-400/30 data-[state=active]:to-purple-400/30 data-[state=active]:border-cyan-400 data-[state=active]:text-cyan-100 transition-all duration-300"
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger 
                    value="education" 
                    className="relative bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl py-3 text-white hover:from-cyan-400/20 hover:to-purple-400/20 hover:border-cyan-400/50 data-[state=active]:from-cyan-400/30 data-[state=active]:to-purple-400/30 data-[state=active]:border-cyan-400 data-[state=active]:text-cyan-100 transition-all duration-300"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger 
                    value="interests" 
                    className="relative bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl py-3 text-white hover:from-cyan-400/20 hover:to-purple-400/20 hover:border-cyan-400/50 data-[state=active]:from-cyan-400/30 data-[state=active]:to-purple-400/30 data-[state=active]:border-cyan-400 data-[state=active]:text-cyan-100 transition-all duration-300"
                  >
                    Interests
                  </TabsTrigger>
                </TabsList>

                {/* Миний тухай таб / About tab content */}
                <TabsContent value="about" className="space-y-6 mt-0">
                  <div className="relative p-6 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-400/20">
                    <h4 className="text-xl font-bold text-white mb-4">
                      A passionate {personalInfo.title} based in {personalInfo.location}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {personalInfo.aboutSections?.mainDescription || "I'm a passionate full-stack developer with expertise in modern web technologies."}
                    </p>
                  </div>
                </TabsContent>

                {/* Боловсролын таб / Education tab content */}
                <TabsContent value="education" className="space-y-6 mt-0">
                  <div className="relative p-6 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-400/20">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="h-6 w-6 text-cyan-400" />
                      <h3 className="text-lg font-bold text-cyan-400">Education</h3>
                    </div>
                    <div className="space-y-4">
                      {personalInfo.education?.map((edu) => (
                        <div key={edu.id} className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <h4 className="font-bold text-white">{edu.degree}</h4>
                          <p className="text-cyan-300 text-sm">{edu.institution}</p>
                          <p className="text-gray-400 text-xs">{edu.period}</p>
                          {edu.description && (
                            <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
                          )}
                        </div>
                      )) || (
                        <>
                          {/* Fallback content if education data is not available */}
                          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="font-bold text-white">Mining Technology Engineering</h4>
                            <p className="text-cyan-300 text-sm">モンゴル科学技術大学</p>
                            <p className="text-gray-400 text-xs">2012年9月 - 2017年1月</p>
                          </div>
                          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="font-bold text-white">Exchange Student</h4>
                            <p className="text-cyan-300 text-sm">日本の芝浦工業大学</p>
                            <p className="text-gray-400 text-xs">2017年4月 - 2018年3月</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* Сонирхлын таб / Interests tab content */}
                <TabsContent value="interests" className="space-y-6 mt-0">
                  <div className="relative p-6 bg-gradient-to-br from-pink-400/10 via-cyan-400/10 to-purple-500/10 rounded-2xl border border-pink-400/20">
                    <h4 className="text-xl font-bold text-white mb-4">My Interests</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {personalInfo.interests.map((interest, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Хувийн мэдээлэл / Personal information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="p-4 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10">
                  <p className="font-medium text-cyan-400 mb-1">Email:</p>
                  <p className="text-white break-all">{personalInfo.email}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10">
                  <p className="font-medium text-cyan-400 mb-1">Availability:</p>
                  <p className="text-white">{personalInfo.availability}</p>
                </div>
              </div>

              {/* CV татаж авах товч / CV download button */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = personalInfo.resumeUrl;
                    link.download = `${personalInfo.name}-Resume.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-black via-purple-900/50 to-black rounded-2xl border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                > 
                  <Download className="w-6 h-6 text-cyan-400 group-hover:text-white transition-all duration-300" />
                  <span className="text-white font-medium text-lg group-hover:text-cyan-100 transition-all duration-300">
                    Download Resume
                   </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}