'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

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
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
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
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mt-12">
          {/* Main Question */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 leading-[0.9] font-abc-diatype"
            style={{
              color: '#ffffff',
              WebkitTextStroke: '0.5px #000000',
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
            className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-abc-diatype"
            style={{
              color: '#ffffff',
              //WebkitTextStroke: '0px #000000',
              fontWeight: '400',
              lineHeight: '1.3'
            } as React.CSSProperties}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            Computer Engineering student passionate about creating innovative solutions. 
            Ready to bring fresh perspective and modern tech skills to your team.
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