'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO, NAVIGATION_ITEMS } from '@/constants/personal-data';
import { APP_CONFIG } from '@/utils/constants';
// import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  // const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > APP_CONFIG.SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - APP_CONFIG.SCROLL_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Navigation items with translations
  const getNavLabel = (label: string) => {
    return label; // Temporarily return original label
  };

  // Filter navigation items to show only Projects and About
  const visibleNavItems = NAVIGATION_ITEMS.filter(item => 
    item.label === 'Projects' || item.label === 'About'
  );

  if (!isScrolled) return null;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#home')}
            className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors font-abc-diatype"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {PERSONAL_INFO.name}
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {visibleNavItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors font-abc-diatype"
              >
                {getNavLabel(item.label)}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Get in touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-4 space-y-4">
              {visibleNavItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-gray-300"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 