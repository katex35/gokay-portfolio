'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT, PERSONAL_INFO } from '@/constants/personal-data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-tight font-abc-diatype">
            Let's Start a
            <br />
            Conversation.
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            I help companies and startups bring their ideas to life. When you're ready to discuss 
            your next project, I'm here to listen and collaborate.
          </p>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Email */}
            <div>
              <p className="text-gray-600 mb-2">Email me at</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-2xl sm:text-3xl text-gray-900 hover:text-gray-600 transition-colors font-medium"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-gray-600 mb-2">Based in</p>
              <p className="text-xl text-gray-900">{CONTACT.location}</p>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-gray-600 mb-6">Connect with me</p>
              <div className="flex justify-center space-x-8">
                {CONTACT.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium capitalize"
                  >
                    {social.platform.toLowerCase().replace('-', ' ')}
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-8">
              <p className="text-gray-600">
                {PERSONAL_INFO.status}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 