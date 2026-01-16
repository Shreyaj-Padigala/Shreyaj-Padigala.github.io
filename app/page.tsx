'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f0] via-[#e8e8d8] to-[#f5f5f0]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--dark-green)]">
              Welcome to My{' '}
              <span className="text-[var(--accent-yellow)]">
                Big Tech Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--military-green)] mb-8 max-w-3xl mx-auto leading-relaxed">
              Data Science Student · Machine Learning Researcher · Software Engineer
            </p>
            <p className="text-lg text-[var(--military-green)] mb-12 max-w-2xl mx-auto leading-relaxed">
              Building intelligent systems and exploring the frontiers of AI at the University of Texas at Dallas
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <a
              href="https://github.com/shreyaj-padigala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[var(--military-green)] hover:bg-[var(--dark-green)] rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaGithub className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/shreyaj-padigala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[var(--military-green)] hover:bg-[var(--dark-green)] rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaLinkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:shreyajpadigala@outlook.com"
              className="p-4 bg-[var(--military-green)] hover:bg-[var(--dark-green)] rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <FaEnvelope className="w-6 h-6 text-white" />
            </a>
          </motion.div>

          {/* Navigation Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            <a
              href="/education"
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[var(--military-green)] hover:border-[var(--accent-yellow)]"
            >
              <h3 className="text-2xl font-bold text-[var(--dark-green)] mb-3">Education</h3>
              <p className="text-[var(--military-green)]">Academic journey and honors</p>
            </a>
            <a
              href="/projects"
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[var(--military-green)] hover:border-[var(--accent-yellow)]"
            >
              <h3 className="text-2xl font-bold text-[var(--dark-green)] mb-3">Projects</h3>
              <p className="text-[var(--military-green)]">AI and ML innovations</p>
            </a>
            <a
              href="/experience"
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[var(--military-green)] hover:border-[var(--accent-yellow)]"
            >
              <h3 className="text-2xl font-bold text-[var(--dark-green)] mb-3">Experience</h3>
              <p className="text-[var(--military-green)]">Professional work and research</p>
            </a>
            <a
              href="/future-ideas"
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[var(--military-green)] hover:border-[var(--accent-yellow)]"
            >
              <h3 className="text-2xl font-bold text-[var(--dark-green)] mb-3">Future Ideas</h3>
              <p className="text-[var(--military-green)]">Upcoming projects and goals</p>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[var(--dark-green)]">
              My Big Tech Journey
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--accent-yellow)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-[var(--accent-yellow)] bg-[var(--military-green)] px-3 py-1 rounded-full">
                  January 2025
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--dark-green)] mb-4">
                My New Personal Website
              </h3>
              <p className="text-[var(--military-green)] leading-relaxed">
                Excited to launch my new personal portfolio website! This marks the beginning of documenting my journey in tech, AI, and machine learning. Stay tuned for updates on my projects, research, and experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--dark-green)] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 Shreyaj Padigala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
