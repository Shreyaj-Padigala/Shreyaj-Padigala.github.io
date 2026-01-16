'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaGithub, FaBrain, FaChartLine, FaRobot, FaClock } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'NeuroSpeech',
      description: 'Implements a Recurrent Neural Network to decode brain signals from the ventral premotor cortex into English phonemes.',
      icon: <FaBrain className="w-8 h-8" />,
      github: 'https://github.com/Shreyaj-Padigala/NeuroSpeech-ACM',
      color: 'border-[var(--accent-yellow)]'
    },
    {
      title: 'Solana-Prediction',
      description: 'Implements a LSTM model to help predict upwards or downwards price movements.',
      icon: <FaChartLine className="w-8 h-8" />,
      github: 'https://github.com/Shreyaj-Padigala/Solana-SOL--Price-Prediction-Model',
      color: 'border-[var(--military-green)]'
    },
    {
      title: 'ProSolve',
      description: 'An AI-driven product manager tool that uses AI agents powered by groqcloud LLM to simplify time consuming tasks like risk analysis and feasibility. Designed to analyze potential customer feedback and improve product ideation.',
      icon: <FaRobot className="w-8 h-8" />,
      github: 'https://github.com/Shreyaj-Padigala/pro-solve-hack-utd',
      color: 'border-[var(--accent-yellow)]'
    },
    {
      title: 'Pomodoro',
      description: 'Pomodoro study app that uses Nvidia Nemotron LLM API to make AI-generated study tips.',
      icon: <FaClock className="w-8 h-8" />,
      github: 'https://github.com/Shreyaj-Padigala/Pomodoro-Timer-Web-App',
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
              Projects
            </h1>
            <p className="text-xl text-[var(--military-green)] max-w-3xl mx-auto leading-relaxed">
              AI and Machine Learning innovations driving the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl p-8 border-l-4 ${project.color} hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-[var(--military-green)] rounded-full flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[var(--military-green)] hover:bg-[var(--dark-green)] rounded-full transition-colors duration-200"
                  >
                    <FaGithub className="w-6 h-6 text-white" />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark-green)] mb-4">
                  {project.title}
                </h3>
                <p className="text-[var(--military-green)] leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--military-green)] hover:text-[var(--dark-green)] font-semibold transition-colors duration-200"
                >
                  View on GitHub
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
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
