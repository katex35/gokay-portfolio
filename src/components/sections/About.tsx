'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/constants/personal-data';
// import { useLanguage } from '@/contexts/LanguageContext';

// Unicorn Studio global types
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
  const UnicornStudio: {
    init: () => void;
  };
}

const About: React.FC = () => {
  // const { t } = useLanguage();
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    // Load Unicorn Studio script for About section animation
    const w = window as any;
    if (!w.UnicornStudio) {
      w.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.26/dist/unicornStudio.umd.js';
      script.onload = function() {
        if (w.UnicornStudio && !w.UnicornStudio.isInitialized) {
          w.UnicornStudio.init();
          w.UnicornStudio.isInitialized = true;
          setAnimationLoaded(true);
        }
      };
      (document.head || document.body).appendChild(script);
    } else {
      setAnimationLoaded(true);
    }
  }, []);
  
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Unicorn Studio Animation Background */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div 
          data-us-project="rtfN4NUh5F5TFmAp9QH7" 
          style={{ 
            width: '100%', 
            height: '100%',
            minWidth: '100vw',
            minHeight: '100vh'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
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
              <p data-about-desc className="text-lg text-gray-700 leading-relaxed font-abc-diatype">
                Frontend Developer from İzmir, Turkey, with expertise in React, Next.js, and Web3 technologies.
                Specialized in creating modern, responsive web applications with exceptional user experiences
                and clean, maintainable code.
              </p>
            </div>

            {/* Location & Status */}
            <div className="text-center text-gray-600 font-abc-diatype">
              <p>📍 İzmir, Turkey</p>
              <p data-status-text className="mt-2">Available for freelance projects and full-time opportunities</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );    
};

export default About; 