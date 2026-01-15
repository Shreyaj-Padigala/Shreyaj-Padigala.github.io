'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-purple-400">
                    The University of Texas at Dallas
                  </h4>
                  <p className="text-gray-300">Bachelor of Science in Data Science</p>
                  <p className="text-gray-400">Expected May 2028</p>
                  <p className="text-gray-400">GPA: 3.667/4.000</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-semibold text-white mb-2">Honors</h5>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Collegium V Honors Program</li>
                    <li>• Academic Excellence Scholar</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Coursework */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Relevant Coursework
              </h3>
              <div className="grid grid-cols-1 gap-2 text-gray-300">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Programming Fundamentals (Java)
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Object-Oriented Programming (C++)
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Data Structures & Algorithms (Python)
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Discrete Mathematics
                </div>
              </div>
            </motion.div>
          </div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-gray-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Activities & Involvement
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-400 mb-3">
                  University Organizations
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• ACM Research and Development</li>
                  <li>• Society of Automotive Engineers (Dallas Formula Racing)</li>
                  <li>• HackUTD Competitor</li>
                  <li>• TAMUHack Competitor</li>
                  <li>• Indian Student Association</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-3">
                  Volunteer Organizations
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Karya Siddhi Hanuman Temple Volunteer</li>
                  <li>• National Honor Society Member</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
