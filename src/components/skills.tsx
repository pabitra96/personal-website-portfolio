"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { SKILLS } from "@/lib/constants"

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Code className="mr-3 h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Technical Proficiency</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              With 4+ years of experience, I specialize in full-stack development, 
              Generative AI implementation, and RPA solutions. My expertise spans from 
              modern web technologies to cutting-edge AI platforms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">4+</div>
                <div className="text-blue-100 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-blue-100 text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold">7+</div>
                <div className="text-blue-100 text-sm">Major Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-blue-100 text-sm">Domains</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 