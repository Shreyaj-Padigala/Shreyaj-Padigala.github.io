'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      company: 'Outamation',
      role: 'Software Engineering Extern',
      location: 'McKinney, TX',
      period: 'December 2025 – Present',
      achievements: [
        'Built AI-powered pipelines to extract, classify, and search data from 200+ page mortgage documents using Tesseract, PaddleOCR, and PyMuPDF, improving document processing efficiency by 22%.',
        'Developed a RAG-based document retrieval system using LlamaIndex for multi-document mortgage data, improving retrieval precision through chunk tuning, metadata filtering, and evaluation of open-source LLMs like Mistral, Phi-2.',
        'Evaluated a document intelligence pipeline on 200+ page mortgage files, benchmarking OCR, RAG retrieval, and routing performance, and delivered deployment recommendations and a training UI.'
      ]
    },
    {
      company: 'Association for Computing Machinery',
      role: 'Undergraduate Research Lead, Deep Learning Systems',
      location: 'Richardson, TX',
      period: 'September 2025 – Present',
      achievements: [
        'Increased Ethereum price forecast accuracy from 52% to 58% by designing a recurrent neural network using Python, TensorFlow, and advanced RNN architectures to process multi-year financial datasets.',
        'Built an automated data pipeline that cleaned and validated 5+ years of Ethereum metrics using Python libraries like Pandas and NumPy, reducing manual data processing time by 60% and ensuring consistent input for model training.',
        'Led a 5-member research team to deliver a functional predictive model by coordinating weekly development sprints and collaborating with a finance professor to bridge technical and domain expertise.'
      ]
    },
    {
      company: 'Association for Computing Machinery',
      role: 'Neural Signal Decoding Undergraduate Research Intern',
      location: 'Richardson, TX',
      period: 'September 2025 – Present',
      achievements: [
        'Enhanced assistive technology through increasing phoneme recognition accuracy from 62% to 68% by implementing advanced machine learning architectures that help decode complex neural signals into basic units of speech.',
        'Collaborated with a 5-member research team and a neuroscience professor to design and train a recurrent neural network using Python, TensorFlow API, and PyTorch.',
        'Integrated a dataset with 10,850 sentences and corresponding neural data capturing the attempted speech activity of an individual with ALS for model training.'
      ]
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
              Experience
            </h1>
            <p className="text-xl text-[var(--military-green)] max-w-3xl mx-auto leading-relaxed">
              Professional work and research driving innovation in AI and machine learning
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[var(--accent-yellow)] hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[var(--military-green)] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaBriefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[var(--dark-green)] mb-2">
                        {exp.company}
                      </h2>
                      <h3 className="text-xl text-[var(--military-green)] font-semibold mb-3">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-[var(--military-green)]">
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-2" />
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <FaCalendar className="mr-2" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[var(--accent-yellow)] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[var(--military-green)] leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
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
