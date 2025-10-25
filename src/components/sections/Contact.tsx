'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/constants/personal-data';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
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
            {t('contact.headline.line1')}
            <br />
            {t('contact.headline.line2')}
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            {t('contact.description')}
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
              <p className="text-gray-600 mb-2">{t('contact.email.label')}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-2xl sm:text-3xl text-gray-900 hover:text-gray-600 transition-colors font-medium"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-gray-600 mb-2">{t('contact.location.label')}</p>
              <p className="text-xl text-gray-900">{t('common.location')}</p>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-gray-600 mb-6">{t('contact.social.label')}</p>
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
                {t('about.status')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 