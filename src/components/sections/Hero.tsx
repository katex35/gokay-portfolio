'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
// import { useLanguage } from '@/contexts/LanguageContext';

// declare global unicorn studio types
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

const Hero: React.FC = () => {
  // const { t } = useLanguage();
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // load unicorn studio script
    const w = window as any;
    if (!w.UnicornStudio) {
      w.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.26/dist/unicornStudio.umd.js';
      script.onload = function() {
        if (w.UnicornStudio && !w.UnicornStudio.isInitialized) {
          w.UnicornStudio.init();
          w.UnicornStudio.isInitialized = true;
          // wait 2 seconds for animation to load properly, then show text
          setTimeout(() => {
            setAnimationLoaded(true);
          }, 1500);
        }
      };
      (document.head || document.body).appendChild(script);
    } else {
      // If already loaded, show text after 1.5 seconds
      setTimeout(() => {
        setAnimationLoaded(true);
      }, 1500);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Unicorn Studio Animation Background - Only in Hero Section */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div 
          data-us-project="yj1w1vNORTiXBXHnzwQS" 
          style={{ 
            width: '100%', 
            height: '100%',
            minWidth: '100vw',
            minHeight: '100vh'
          }}
        />
      </div>
      
      {/* Content - Only show after animation loads */}
      {animationLoaded && (
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 -mt-12 md:mt-12">
          {/* Main Question */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 md:mb-8 leading-[0.9] font-abc-diatype"
            style={{
              color: isMobile ? '#1f2937' : '#ffffff',
              WebkitTextStroke: isMobile ? 'none' : '0.25px #000000',
              fontWeight: '300',
              lineHeight: '1'
            } as React.CSSProperties}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Hi, I'm Gökay.{' '}
            <br className="hidden sm:block" />
            Your next developer.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-abc-diatype -mt-2 md:mt-0"
            style={{
              color: 'rgb(255, 255, 255)',
              WebkitTextStroke: isMobile ? '0.1px #000000' : '0.01px #000000',
              fontWeight: '300',
              lineHeight: '1.3'
            } as React.CSSProperties}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            Frontend Developer specializing in React, Next.js, and Web3 technologies. 
            Creating modern, responsive web applications with exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection('#projects')}
            >
              Projects
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => scrollToSection('#contact')}
            >
              Get in touch
            </Button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero; 