"use client"

import { motion } from "framer-motion"
import { Code, Zap, Brain, Cloud, Settings, Bot } from "lucide-react"
import { SKILLS } from "@/lib/constants"

const categoryIcons = {
  "Programming Languages": Code,
  "Framework and Web Technology": Zap,
  "Generative AI Model and Platform": Brain,
  "Cloud Technology (AWS)": Cloud,
  "DevOps Essentials": Settings,
  "RPA Tools And Technology": Bot
}

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 9) return "from-emerald-500 to-green-600"
  if (confidence >= 7) return "from-blue-500 to-indigo-600"
  if (confidence >= 5) return "from-yellow-500 to-orange-600"
  return "from-red-500 to-pink-600"
}

const getConfidenceLabel = (confidence: number) => {
  if (confidence >= 9) return "Expert"
  if (confidence >= 7) return "Advanced"
  if (confidence >= 5) return "Intermediate"
  return "Beginner"
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Code className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills with confidence levels across various domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(SKILLS).map(([category, skills], index) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                    <p className="text-sm text-gray-500">{skills.length} skills</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {(skills as Array<{name: string, confidence: number}>).map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getConfidenceColor(skill.confidence)} text-white`}>
                            {getConfidenceLabel(skill.confidence)}
                          </span>
                          <span className="text-sm font-bold text-gray-600">
                            {skill.confidence}/10
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.confidence / 10) * 100}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${getConfidenceColor(skill.confidence)} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 rounded-2xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Technical Proficiency Overview</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                With 4+ years of experience, I specialize in full-stack development, 
                Generative AI implementation, and RPA solutions. My expertise spans from 
                modern web technologies to cutting-edge AI platforms.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-3xl font-bold">4+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-blue-100 text-sm">Technologies</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-3xl font-bold">7+</div>
                  <div className="text-blue-100 text-sm">Major Projects</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-blue-100 text-sm">Domains</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 