'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/constants/personal-data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-tight font-abc-diatype">
            Build Better Products.
            <br />
            Think Smarter.
            <br />
            Ship Faster.
            <br />
            Create Impact.
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12 font-abc-diatype">
            The best developers don't just code. When they work on your project, they don't
            look for features, they look for solutions to real problems.
            They look for YOUR VISION.
          </p>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Personal Info Brief */}
            <div className="max-w-xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed font-abc-diatype">
                3rd year Computer Engineering student at Celal Bayar University with passion for
                creating innovative solutions. Specialized in full-stack development and
                emerging technologies.
              </p>
            </div>

            {/* Location & Status */}
            <div className="text-center text-gray-600 font-abc-diatype">
              <p>📍 {PERSONAL_INFO.location}</p>
              <p className="mt-2">Currently seeking internship and collaboration opportunities</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );    
};

export default About; 