'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Undergraduate Research Lead, Deep Learning Systems',
      company: 'Association for Computing Machinery',
      location: 'Richardson, TX',
      period: 'September 2025 – Present',
      highlights: [
        'Increased Ethereum price forecast accuracy from 52% to 58% by designing a recurrent neural network using Python, TensorFlow, and advanced RNN architectures to process multi-year financial datasets.',
        'Built an automated data pipeline that cleaned and validated 5+ years of Ethereum metrics using Python libraries like Pandas and NumPy, reducing manual data processing time by 60% and ensuring consistent input for model training.',
        'Led a 5-member research team to deliver a functional predictive model by coordinating weekly development sprints and collaborating with a finance professor to bridge technical and domain expertise.',
      ],
    },
    {
      title: 'Software Engineering Extern',
      company: 'Outamation',
      location: 'McKinney, TX',
      period: 'December 2025 – Present',
      highlights: [
        'Built AI-powered pipelines to extract, classify, and search data from 200+ page mortgage documents using Tesseract, PaddleOCR, and PyMuPDF, improving document processing efficiency by 22%.',
        'Developed a RAG-based document retrieval system using LlamaIndex for multi-document mortgage data, improving retrieval precision through chunk tuning, metadata filtering, and evaluation of open-source LLMs like Mistral, Phi-2.',
        'Evaluated a document intelligence pipeline on 200+ page mortgage files, benchmarking OCR, RAG retrieval, and routing performance, and delivered deployment recommendations and a training UI.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl text-purple-400 mb-1">{exp.company}</h4>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p>{exp.location}</p>
                    <p>{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-purple-400 mr-3 mt-1.5 text-lg">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
