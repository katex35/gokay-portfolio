'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
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
            <span data-about-title-1>{t('about.title.line1')}</span>
            <br />
            <span data-about-title-2>{t('about.title.line2')}</span>
            <br />
            <span data-about-title-3>{t('about.title.line3')}</span>
            <br />
            <span data-about-title-4>{t('about.title.line4')}</span>
          </h2>

          <p data-about-subtitle className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12 font-abc-diatype">
            {t('about.subtitle')}
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
              <p data-about-desc className="text-lg text-gray-700 leading-relaxed font-abc-diatype">
                {t('about.description')}
              </p>
            </div>

            {/* Location & Status */}
            <div className="text-center text-gray-600 font-abc-diatype">
              <p data-location-text>📍 {t('common.location')}</p>
              <p data-status-text className="mt-2">{t('about.status')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );    
};

export default About; 