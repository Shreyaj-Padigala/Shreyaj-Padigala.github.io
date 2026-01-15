'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'shreyajpadigala@outlook.com',
      href: 'mailto:shreyajpadigala@outlook.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '(502) 718-5400',
      href: 'tel:+15027185400',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'McKinney, TX',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/shreyaj-padigala',
      color: 'hover:text-gray-400',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shreyaj-padigala',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, opportunities, or
            collaborations. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 mb-6">
                Connect with me on social media or send me an email. I&apos;m always
                excited to hear about new opportunities and collaborations.
              </p>

              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all duration-200 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>

              <a
                href="mailto:shreyajpadigala@outlook.com"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Send Me an Email
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
