'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaLightbulb, FaPlane, FaFileAlt } from 'react-icons/fa';

export default function FutureIdeas() {
  const ideas = [
    {
      title: 'AERO',
      description: 'An American Airlines flight delay app that implements AI agents to provide intelligent predictions, real-time updates, and personalized travel recommendations for passengers.',
      icon: <FaPlane className="w-8 h-8" />,
      color: 'border-[var(--accent-yellow)]'
    },
    {
      title: 'EZFix',
      description: 'A resume improvement website for entry-level positions and internships that implements AI agents to give resume insights and fixes based on the job description. Helps job seekers optimize their applications with intelligent feedback and suggestions.',
      icon: <FaFileAlt className="w-8 h-8" />,
      color: 'border-[var(--military-green)]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f0] via-[#e8e8d8] to-[#f5f5f0]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--dark-green)]">
              Future Ideas
            </h1>
            <p className="text-xl text-[var(--military-green)] max-w-3xl mx-auto leading-relaxed">
              Upcoming projects and ambitious goals for the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {ideas.map((idea, index) => (
              <motion.div
                key={idea.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl p-8 border-l-4 ${idea.color} hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-[var(--military-green)] rounded-full flex items-center justify-center text-white">
                    {idea.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-[var(--dark-green)] mb-4">
                  {idea.title}
                </h3>
                <p className="text-[var(--military-green)] leading-relaxed text-lg">
                  {idea.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-10 border-2 border-[var(--military-green)]"
          >
            <div className="text-center">
              <FaLightbulb className="w-16 h-16 text-[var(--accent-yellow)] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-[var(--dark-green)] mb-4">
                Always Innovating
              </h2>
              <p className="text-lg text-[var(--military-green)] leading-relaxed max-w-3xl mx-auto">
                These ideas represent just the beginning of my journey in AI and software development.
                I&apos;m constantly exploring new technologies, identifying problems to solve, and designing
                solutions that make a meaningful impact. Stay tuned for more exciting projects and innovations!
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
