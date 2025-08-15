'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const SimpleLanguageToggle: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'tr'>('en');
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (!heroSection) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY + 100;

      // Hero section görünürlük kontrolü
      const isHeroInView = scrollPosition < heroBottom;
      setIsHeroVisible(isHeroInView);

      // Hero animasyonları bittiğinde butonu göster
      if (scrollPosition > 200) {
        setShowButton(true);
      }
    };

    // Hero animasyonları için delay
    const timer = setTimeout(() => {
      setShowButton(true);
      handleScroll();
    }, 2000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    setCurrentLang(newLang);
    
    // Simple language change - update specific text elements
    updateContent(newLang);
  };

  const updateContent = (lang: 'en' | 'tr') => {
    const translations = {
      en: {
        greeting: "Hi, I'm Gökay.",
        subtitle: "Your next developer.",
        description: "Frontend Developer specializing in React, Next.js, and Web3 technologies. Creating modern, responsive web applications with exceptional user experiences.",
        projects: "Projects",
        contact: "Get in touch",
        aboutTitle1: "Build Better Products.",
        aboutTitle2: "Think Smarter.", 
        aboutTitle3: "Ship Faster.",
        aboutTitle4: "Create Impact.",
        aboutDesc: "Frontend Developer from İzmir, Turkey, with expertise in React, Next.js, and Web3 technologies. Specialized in creating modern, responsive web applications with exceptional user experiences and clean, maintainable code.",
        status: "Available for freelance projects and full-time opportunities"
      },
      tr: {
        greeting: "Merhaba, Ben Gökay.",
        subtitle: "Senin bir sonraki geliştirici.",
        description: "React, Next.js ve Web3 teknolojilerinde uzmanlaşmış Frontend Developer. Modern, responsive web uygulamaları ve olağanüstü kullanıcı deneyimleri oluşturuyorum.",
        projects: "Projeler",
        contact: "İletişime geç",
        aboutTitle1: "Daha İyi Ürünler Yap.",
        aboutTitle2: "Daha Akıllı Düşün.",
        aboutTitle3: "Daha Hızlı Teslim Et.", 
        aboutTitle4: "Etki Yarat.",
        aboutDesc: "İzmir, Türkiye merkezli Frontend Developer. React, Next.js ve Web3 teknolojilerinde uzman. Modern, responsive web uygulamaları ve olağanüstü kullanıcı deneyimleri ile temiz, sürdürülebilir kod yazmada uzmanım.",
        status: "Freelance projeler ve tam zamanlı fırsatlar için müsait"
      }
    };

    // Update text content directly
    const content = translations[lang];
    
    // Hero section updates
    const heroTitle = document.querySelector('[data-hero-title]');
    if (heroTitle) {
      heroTitle.innerHTML = `${content.greeting}<br class="hidden sm:block" />${content.subtitle}`;
    }
    
    const heroDesc = document.querySelector('[data-hero-desc]');
    if (heroDesc) {
      heroDesc.textContent = content.description;
    }

    const projectBtn = document.querySelector('[data-projects-btn]');
    if (projectBtn) {
      projectBtn.textContent = content.projects;
    }

    const contactBtn = document.querySelector('[data-contact-btn]');
    if (contactBtn) {
      contactBtn.textContent = content.contact;
    }

    // About section updates
    const aboutDesc = document.querySelector('[data-about-desc]');
    if (aboutDesc) {
      aboutDesc.textContent = content.aboutDesc;
    }

    const statusText = document.querySelector('[data-status-text]');
    if (statusText) {
      statusText.textContent = content.status;
    }
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
            ease: [0.25, 0.46, 0.45, 0.94],
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

export default SimpleLanguageToggle;
