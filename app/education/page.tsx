'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaUniversity, FaAward } from 'react-icons/fa';

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f0] via-[#e8e8d8] to-[#f5f5f0]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--dark-green)]">
              Education
            </h1>
            <p className="text-xl text-[var(--military-green)] max-w-3xl mx-auto leading-relaxed">
              Academic journey and achievements
            </p>
          </motion.div>

          {/* University Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-2 border-[var(--military-green)]"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--military-green)] rounded-full flex items-center justify-center">
                  <FaUniversity className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[var(--dark-green)] mb-3">
                  University of Texas at Dallas
                </h2>
                <p className="text-xl text-[var(--military-green)] mb-4 font-semibold">
                  Bachelor of Science in Data Science
                </p>
                <p className="text-lg text-[var(--military-green)] mb-6">
                  Expected Graduation: Spring 2028
                </p>
                <p className="text-lg text-[var(--military-green)] leading-relaxed">
                  Shreyaj Padigala is a Data Science student currently attending the University of Texas at Dallas and is set to graduate Spring of 2028. Pursuing a comprehensive education in machine learning, artificial intelligence, and data analytics to build innovative solutions for complex problems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Honors Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-[var(--dark-green)] mb-8 flex items-center">
              <FaAward className="mr-4 text-[var(--accent-yellow)]" />
              Honors & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--accent-yellow)] hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[var(--dark-green)] mb-3">
                  Academic Excellence Scholar
                </h3>
                <p className="text-[var(--military-green)] leading-relaxed">
                  Recognized for outstanding academic performance and dedication to excellence in Data Science studies.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--accent-yellow)] hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[var(--dark-green)] mb-3">
                  Collegium V Honors
                </h3>
                <p className="text-[var(--military-green)] leading-relaxed">
                  Member of UT Dallas&apos; prestigious Honors College, engaging in advanced coursework and research opportunities.
                </p>
              </div>
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
