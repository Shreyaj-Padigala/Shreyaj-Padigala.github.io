'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'ProSolve Productivity App',
      description:
        'AI-powered productivity application for product managers with automated risk scoring and feasibility analysis.',
      highlights: [
        'Boosted product manager productivity by 30% by building AI agents using the GroqCloud LLM API to automate tasks such as risk scoring, requirement breakdown, and feasibility calculations.',
        'Ensured reliable user data retention across browser sessions by designing a SQLite and SQLModel database that stored past analyses.',
        'Connected a Python FastAPI backend with an HTML, CSS, and JavaScript frontend to deliver an end-to-end web application.',
      ],
      technologies: ['Python', 'FastAPI', 'SQLite', 'JavaScript', 'GroqCloud API'],
    },
    {
      title: 'Pomodoro Study Web App',
      description:
        'Full-stack study application with AI-powered note summarization and session tracking.',
      highlights: [
        'Improved study efficiency for 80% of 30 test users by developing a web-based study application with AI-generated note summaries using the Nvidia Nemotron LLM API.',
        'Preserved user data by implementing a PostgreSQL database that automatically stored session history, timestamps, and notes.',
        'Designed the full-stack application using Python FastAPI, HTML, CSS, and JavaScript to implement 25-minute study intervals and 5-minute breaks.',
      ],
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'JavaScript', 'Nvidia Nemotron API'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <span className="text-purple-400 mr-2 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-900 text-purple-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
