"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Github, 
  Mail, 
  Download
} from "lucide-react";
import Link from "next/link";
import { personalInfo, socialLinks } from "../../config/portfolio-config";

/**
 * Вэбсайтын толгой навигацийн компонент
 * Website header navigation component
 */
export default function Header() {
  // Мобайл цэсний төлөв / Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Хуудас гүйлгэсэн эсэхийн төлөв / Scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  // Идэвхтэй хэсгийн төлөв / Active section state
  const [activeSection, setActiveSection] = useState("home");
  // Компонент бэлэн болсон эсэхийн төлөв / Component mounted state
  const [isMounted, setIsMounted] = useState(false);

  // Навигацийн цэсний жагсаалт / Navigation menu items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  // Компонент эхлэх үед event listener-үүд тохируулах / Setup event listeners on mount
  useEffect(() => {
    setIsMounted(true);
    
    // Хуудас гүйлгэх үед толгой хэсгийн өөрчлөлт / Handle scroll changes
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Идэвхтэй хэсгийг тодорхойлох / Determine active section
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Цонхны хэмжээ өөрчлөгдөх үед мобайл цэс хаах / Close mobile menu on resize
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  // Тодорхой хэсэг рүү зөөлөн гүйлгэх функц / Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Hydration алдаа зайлсхийх / Prevent hydration mismatch
  if (!isMounted) {
    return (
      <header className="fixed top-0 w-full z-40 bg-black/40 backdrop-blur-sm border-b border-cyan-500/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-black">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.nickname}
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            {navItems.map(item => (
              <div key={item.id} className="px-4 py-2 text-sm text-gray-400">{item.label}</div>
            ))}
          </div>
          <div className="md:hidden">
            <Menu className="h-5 w-5 text-cyan-400" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          isScrolled 
            ? "bg-black/40 backdrop-blur-xl border-b border-cyan-500/10 shadow-2xl" 
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Лого хэсэг / Logo section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <button 
                onClick={() => scrollToSection("home")}
                className="text-xl sm:text-2xl lg:text-3xl font-black group flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {personalInfo.nickname}
                </span>
                <span className="text-xs bg-black/40 border border-cyan-500/30 px-2 py-1 rounded-md text-cyan-400 font-mono">
                  .online
                </span>
              </button>
            </motion.div>

            {/* Десктоп навигаци / Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <ul className="flex items-center space-x-1 lg:space-x-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 cursor-pointer group ${
                        activeSection === item.id
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg"
                          layoutId="activeSection"
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                      {activeSection !== item.id && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/10 group-hover:to-purple-400/10 transition-all duration-300" />
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Десктоп үйлдлүүд / Desktop actions */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </Link>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Мобайл навигацийн товч / Mobile navigation toggle */}
            <div className="flex items-center space-x-3 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative z-50 transition-all duration-200 hover:scale-110 ${
                  isMenuOpen ? "bg-cyan-400/10" : ""
                }`}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5 text-cyan-400" />
                  ) : (
                    <Menu className="h-5 w-5 text-cyan-400" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        {/* Мобайл цэсний давхарга / Mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Арын давхарга / Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Мобайл цэс / Mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-xl"
              >
                <nav className="container mx-auto px-4 py-6">
                  <ul className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.05,
                          ease: "easeOut"
                        }}
                      >
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`flex items-center w-full py-3 px-4 rounded-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer text-left ${
                            activeSection === item.id
                              ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 font-semibold border-l-4 border-cyan-400"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span className="text-base">{item.label}</span>
                          {activeSection === item.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                            />
                          )}
                        </button>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Мобайл хөл хэсэг / Mobile footer */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Link
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group"
                      >
                        <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </Link>
                      <Link
                        href={`mailto:${personalInfo.email}`}
                        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all duration-300 group"
                      >
                        <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </Link>
                    </div>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}