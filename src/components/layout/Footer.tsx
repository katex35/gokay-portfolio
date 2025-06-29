'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CONTACT, PERSONAL_INFO } from '@/constants/personal-data';
import { SocialPlatform } from '@/types';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 80;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  // get platform display name
  const getPlatformDisplayName = (platform: SocialPlatform): string => {
    switch (platform) {
      case SocialPlatform.LINKEDIN:
        return 'LinkedIn';
      case SocialPlatform.GITHUB:
        return 'GitHub';
      case SocialPlatform.TWITTER:
        return 'Twitter';
      case SocialPlatform.INSTAGRAM:
        return 'Instagram';
      default:
        return platform;
    }
  };

  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* main call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-tight font-abc-diatype">
            Ready to Build
            <br />
            Something Amazing?
            <br />
            Let's Create Impact.
            <br />
            Let's Innovate Together.
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Every great project starts with a conversation. When you're ready to turn your ideas into reality,
            I'm here to help you build solutions that matter.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('#contact')}
            className="rounded-full px-8 py-4"
          >
            Get in touch
          </Button>
        </motion.div>

        {/* footer info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8"
        >
          <p className="text-gray-500 text-sm mb-4">
            "Quality means doing it right when no one is looking." - Henry Ford
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm">
            <span>©{currentYear} {PERSONAL_INFO.name}. All rights reserved.</span>
            <div className="flex space-x-4">
              {CONTACT.socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-600 transition-colors"
                >
                  {getPlatformDisplayName(social.platform)}
                </a>
              ))}
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="hover:text-gray-600 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 