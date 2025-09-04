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
import { motion } from "framer-motion"

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

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="relative group cursor-pointer w-72 flex-shrink-0 mx-4">
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
      </div>
    </div>
  )
}

export default function Skills() {
  // Duplicate skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section 
      id="skills" 
      className="w-full py-16 md:py-24 lg:py-32 relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
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
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Simple Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />
            </div>
          </motion.div>

          {/* Flowing Skills Animation */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: [0, -100 * skills.length * 4] // Move by total width of all cards
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: skills.length * 3, // Adjust speed here
                    ease: "linear",
                  },
                }}
              >
                {duplicatedSkills.map((skill, index) => (
                  <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}