"use client"

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiTypescript,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiGraphql,
  SiPrisma,
  SiPostman,
  SiCypress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRender,
  SiExpress,
} from "react-icons/si"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
  level: number
  category: string
}

const skills: Skill[] = [
  // Frontend Skills
  { name: "React", icon: SiReact, color: "#61DAFB", level: 95, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 92, category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 98, category: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 95, category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 93, category: "Frontend" },
  
  // Backend Skills
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 87, category: "Backend" },
  { name: "Express", icon: SiExpress, color: "#000000", level: 85, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 82, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 80, category: "Backend" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: 75, category: "Backend" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", level: 78, category: "Backend" },
  
  // DevOps & Tools
  { name: "Git", icon: SiGit, color: "#F05032", level: 90, category: "DevOps" },
  { name: "GitHub", icon: SiGithub, color: "#181717", level: 88, category: "DevOps" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", level: 70, category: "DevOps" },
  { name: "Vercel", icon: SiVercel, color: "#000000", level: 85, category: "DevOps" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 82, category: "DevOps" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 85, category: "DevOps" },
  { name: "Cypress", icon: SiCypress, color: "#17202C", level: 75, category: "DevOps" },
  { name: "Render", icon: SiRender, color: "#46E3B7", level: 80, category: "DevOps" },
]

const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer w-72 flex-shrink-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Holographic Background Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-slate-900/90 via-purple-900/50 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/20 group-hover:border-cyan-400/60 transition-all duration-500 overflow-hidden h-80">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(147,51,234,0.1)_120deg,transparent_240deg)]" />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-cyan-300">
            {skill.category}
          </span>
        </div>
        
        {/* Icon Container */}
        <div className="relative z-10 mb-6 mt-8">
          <div 
            className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
              boxShadow: `0 0 30px ${skill.color}30`
            }}
          >
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin-slow" />
            <skill.icon 
              className="text-4xl relative z-10 transition-all duration-300 group-hover:scale-110" 
              style={{ color: skill.color }}
            />
          </div>
        </div>
        
        {/* Skill Name */}
        <h4 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
          {skill.name}
        </h4>
        
        {/* Skill Level Bar */}
        <div className="relative mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-3 bg-black/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full relative overflow-hidden"
              style={{ 
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                boxShadow: `0 0 15px ${skill.color}50`
              }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
          </div>
        </div>
        
        {/* Floating Particles */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-8 right-8 w-2 h-2 rounded-full"
              style={{ backgroundColor: skill.color }}
              animate={{ 
                y: [-10, -20, -10],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-8 left-8 w-1.5 h-1.5 rounded-full bg-cyan-400"
              animate={{ 
                y: [10, 0, 10],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </>
        )}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const cardsPerView = 3
  const maxIndex = Math.max(0, skills.length - cardsPerView)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= skills.length - 1 ? 0 : prev + 1))
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, skills.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= skills.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? skills.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section 
      id="skills" 
      className="w-full py-16 md:py-24 lg:py-32 relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Mixed Grid Pattern */}
        <div className="absolute inset-0 bg-mixed-grid" />
        
        {/* Animated dot overlay */}
        <div className="absolute inset-0 bg-dot-grid-animated opacity-30" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FF00FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q500,100 900,300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
          <path d="M200,800 Q600,600 800,200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Enhanced Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            {/* Floating Icon */}
            <motion.div
              className="w-20 h-20 mx-auto mb-6 relative"
              animate={{ 
                rotateY: 360,
                rotateX: [0, 10, 0]
              }}
              transition={{ 
                rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl animate-pulse" />
              <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-purple-900 rounded-xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />
            </div>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with cutting-edge technologies and innovative solutions
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous skills"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-slate-800/80 to-purple-800/80 backdrop-blur-xl rounded-full border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400/60 transition-all duration-300 group"
            >
              <span className="text-2xl text-cyan-400 group-hover:text-white transition-colors">‹</span>
            </button>
            
            <button
              onClick={nextSlide}
              aria-label="Next skills"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-slate-800/80 to-purple-800/80 backdrop-blur-xl rounded-full border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400/60 transition-all duration-300 group"
            >
              <span className="text-2xl text-cyan-400 group-hover:text-white transition-colors">›</span>
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden px-16">
              <motion.div
                ref={carouselRef}
                className="flex gap-8 will-change-transform"
                animate={{ 
                  x: `calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * 2}rem)`
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 25,
                  mass: 0.8,
                  velocity: 0
                }}
                style={{
                  width: `${(skills.length / cardsPerView) * 100}%`
                }}
              >
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="flex-shrink-0"
                    style={{ width: `${100 / skills.length}%` }}
                  >
                    <SkillCard skill={skill} index={index} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 gap-3">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 scale-150 shadow-lg shadow-cyan-400/50'
                      : 'bg-slate-600 hover:bg-slate-500 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / skills.length) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-slate-900/90 to-purple-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30">
                <p className="text-lg text-gray-300 leading-relaxed">
                  🚀 <span className="text-cyan-400 font-semibold">Always evolving</span>, always learning new technologies to stay at the{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                    cutting edge
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
