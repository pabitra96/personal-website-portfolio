"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Linkedin, Github, MapPin, Calendar, GraduationCap, Award, Languages, Code, Sparkles, Zap, Rocket, Brain } from "lucide-react"
import { PERSONAL_INFO, EXPERIENCE, SKILLS, EDUCATION, CERTIFICATIONS, LANGUAGES, ACHIEVEMENTS } from "@/lib/constants"
import Image from "next/image"

export function About() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technology and innovative solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {/* Floating Profile Card */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Profile Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                      <Image
                        src="/icon/1000085842.png"
                        alt="Pabitra Jiban Maity"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                    >
                      Available
                    </motion.div>
                  </div>
                  
                  {/* Name & Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">Pabitra Jiban Maity</h3>
                  <p className="text-blue-300 mb-6">Full Stack Developer & AI Enthusiast</p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white">4+</div>
                      <div className="text-gray-300 text-sm">Years Experience</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white">25+</div>
                      <div className="text-gray-300 text-sm">Technologies</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white">7+</div>
                      <div className="text-gray-300 text-sm">Major Projects</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white">3</div>
                      <div className="text-gray-300 text-sm">Domains</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* Modern About Cards */}
            <div className="space-y-6">
              
              {/* Introduction Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Passionate Developer</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a <span className="text-blue-400 font-semibold">Full Stack Developer</span> with <span className="text-purple-400 font-semibold">4+ years of experience</span> currently working at Cognizant. I specialize in creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
                </p>
              </motion.div>

              {/* Expertise Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-xl">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI & Innovation</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My expertise spans <span className="text-green-400 font-semibold">Generative AI</span>, <span className="text-blue-400 font-semibold">Full Stack Development</span>, and <span className="text-orange-400 font-semibold">RPA solutions</span>. I've worked extensively with GPT models, AWS cloud technologies, and modern DevOps practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'React.js', 'AWS', 'Gen AI', 'RPA', 'Docker'].map((skill, index) => (
                    <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-xl">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Track Record</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I have a proven track record of translating complex requirements into scalable solutions. My experience includes <span className="text-blue-400 font-semibold">Intelligent Document Processing</span>, <span className="text-purple-400 font-semibold">microservices architecture</span>, and <span className="text-green-400 font-semibold">cloud-native applications</span>.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Experience & Education Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-500/50"
                >
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <span className="text-blue-300 text-sm bg-white/10 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3 flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                    <p className="text-green-400 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-300 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-purple-400 mr-3 text-lg">✓</span>
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-3">
              {LANGUAGES.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <span className="font-medium text-white">{lang.language}</span>
                  <span className="text-orange-400 text-sm font-medium bg-white/10 px-3 py-1 rounded-full">{lang.proficiency}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-3 rounded-xl">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Achievements</h3>
            </div>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-4 rounded-xl border-l-4 border-yellow-500 border border-white/10"
                >
                  <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl p-12 rounded-3xl border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              I'm always excited to take on new challenges and collaborate on innovative projects. Let's create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                onClick={() => window.open(PERSONAL_INFO.linkedin, "_blank")}
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 