"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react"
import { PERSONAL_INFO } from "@/lib/constants"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-1000"></div>
        </div>
      </div>

      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-3 h-3 bg-indigo-500 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {/* Professional Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 border border-emerald-200 shadow-sm">
              <span className="w-2 h-1 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Professional Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 font-medium tracking-wide"
          >
            Hello, I'm
          </motion.p>

          {/* Professional Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          {/* Professional Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-xl text-slate-700 font-medium tracking-wide"
          >
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              {PERSONAL_INFO.title}
            </span>
          </motion.h2>

          {/* Professional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg text-slate-600 max-w-5xl mx-auto leading-relaxed tracking-wide"
          >
            Full Stack Developer with 4+ years of experience currently working at Cognizant and having a strong track record of translating complex requirements into scalable solutions. Master in developing AI products using AI agents and LLMs.
          </motion.p>

          {/* Professional CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                onClick={() => scrollToSection("#projects")}
                className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-3 text-base font-semibold rounded-xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Professional Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center items-center space-x-6 pt-6"
          >
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href={`https://${PERSONAL_INFO.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href={`https://${PERSONAL_INFO.github}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300"
            >
              <Github className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Professional Scroll Indicator - Positioned below content with proper spacing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 