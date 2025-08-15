'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: 'en' | 'tr';
  onLanguageChange: (lang: 'en' | 'tr') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  currentLang, 
  onLanguageChange 
}) => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (!heroSection) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY + 100; // 100px offset

      // Hero section görünürlük kontrolü
      const isHeroInView = scrollPosition < heroBottom;
      setIsHeroVisible(isHeroInView);

      // Hero animasyonları bittiğinde butonu göster (1.5s sonra)
      if (scrollPosition > 200) {
        setShowButton(true);
      }
    };

    // Hero animasyonları için delay
    const timer = setTimeout(() => {
      setShowButton(true);
      handleScroll(); // Initial check
    }, 2000); // Hero animasyonları 1.5s + 0.5s buffer

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    onLanguageChange(newLang);
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          className="fixed z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            x: isHeroVisible ? 0 : 0,
            top: isHeroVisible ? '20px' : 'auto',
            bottom: isHeroVisible ? 'auto' : '20px',
            left: isHeroVisible ? '50%' : 'auto',
            right: isHeroVisible ? 'auto' : '20px',
            transform: isHeroVisible ? 'translateX(-50%)' : 'none',
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
          }}
          style={{
            ...(isHeroVisible 
              ? { 
                  top: '20px', 
                  left: '50%', 
                  transform: 'translateX(-50%)'
                } 
              : { 
                  bottom: '20px', 
                  right: '20px' 
                }
            )
          }}
        >
          <motion.button
            onClick={toggleLanguage}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md
              transition-all duration-300 hover:scale-105 active:scale-95
              border border-white/20 shadow-lg hover:shadow-xl
              ${isHeroVisible 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-white/90 text-gray-900 hover:bg-white'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe 
              className={`w-4 h-4 transition-colors duration-300 ${
                isHeroVisible ? 'text-white' : 'text-gray-700'
              }`}
            />
            <span className={`
              text-sm font-medium transition-colors duration-300 font-abc-diatype
              ${isHeroVisible ? 'text-white' : 'text-gray-900'}
            `}>
              {currentLang === 'en' ? 'TR' : 'EN'}
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageToggle;
