'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaPython,
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
} from 'react-icons/si';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-400' },
        { name: 'Java', icon: FaJava, color: 'text-red-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
        { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'SQLite', icon: FaDatabase, color: 'text-gray-400' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Technical Skills
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 * categoryIndex }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.5 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.1 * skillIndex + 0.2 * categoryIndex,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-center hover:bg-gray-800 transition-colors duration-300 border border-gray-800 hover:border-purple-500"
                      >
                        <Icon className={`w-12 h-12 ${skill.color} mb-3`} />
                        <span className="text-white text-sm text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 bg-gray-900 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'TensorFlow',
                'PyTorch',
                'FastAPI',
                'NumPy',
                'Pandas',
                'LlamaIndex',
                'SQL',
                'HTML/CSS',
                'Visual Studio Code',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-purple-500 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
