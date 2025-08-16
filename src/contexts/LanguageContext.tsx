'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Çeviri sözlüğü
const translations = {
  en: {
    // Hero Section
    'hero.greeting': "Hi, I'm Gökay.",
    'hero.subtitle': 'Your next developer.',
    'hero.description': 'Frontend Developer specializing in React, Next.js, and Web3 technologies. Creating modern, responsive web applications with exceptional user experiences.',
    'hero.cta.projects': 'Projects',
    'hero.cta.contact': 'Get in touch',
    
    // About Section
    'about.title.line1': 'Build Better Products.',
    'about.title.line2': 'Think Smarter.',
    'about.title.line3': 'Ship Faster.',
    'about.title.line4': 'Create Impact.',
    'about.subtitle': "The best developers don't just code. When they work on your project, they don't look for features, they look for solutions to real problems. They look for YOUR VISION.",
    'about.description': 'Frontend Developer from İzmir, Turkey, with expertise in React, Next.js, and Web3 technologies. Specialized in creating modern, responsive web applications with exceptional user experiences and clean, maintainable code.',
    'about.status': 'Available for freelance projects and full-time opportunities',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of my recent work',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's work together",
    'contact.description': "I'm always interested in new opportunities and exciting projects.",
    
    // Common
    'common.location': 'İzmir, Turkey',
  },
  tr: {
    // Hero Section
    'hero.greeting': "Merhaba, Ben Gökay.",
    'hero.subtitle': 'Senin Yeni Mühendisin.',
    'hero.description': 'React, Next.js ve Web3 teknolojilerinde uzmanlaşmış Frontend Developer. Modern, responsive web uygulamaları ve olağanüstü kullanıcı deneyimleri oluşturuyorum.',
    'hero.cta.projects': 'Projeler',
    'hero.cta.contact': 'İletişime geç',
    
    // About Section
    'about.title.line1': 'Daha İyi Ürünler Yap.',
    'about.title.line2': 'Daha Akıllı Düşün.',
    'about.title.line3': 'Daha Hızlı Teslim Et.',
    'about.title.line4': 'Etki Yarat.',
    'about.subtitle': 'En iyi geliştiriciler sadece kod yazmaz. Projenizde çalışırken özellik aramaz, gerçek problemlere çözüm ararlar. SİZİN VİZYONUNUZU ararlar.',
    'about.description': 'İzmir, Türkiye merkezli Frontend Developer. React, Next.js ve Web3 teknolojilerinde uzman. Modern, responsive web uygulamaları ve olağanüstü kullanıcı deneyimleri ile temiz, sürdürülebilir kod yazmada uzmanım.',
    'about.status': 'Freelance projeler ve tam zamanlı fırsatlar için müsait',
    
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.projects': 'Projeler',
    'nav.contact': 'İletişim',
    
    // Projects Section
    'projects.title': 'Öne Çıkan Projeler',
    'projects.subtitle': 'Son çalışmalarımdan bazıları',
    
    // Contact Section
    'contact.title': 'İletişime Geçin',
    'contact.subtitle': 'Birlikte çalışalım',
    'contact.description': 'Yeni fırsatlar ve heyecan verici projelerle her zaman ilgiliyim.',
    
    // Common
    'common.location': 'İzmir, Türkiye',
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Client-side mount control
  useEffect(() => {
    setMounted(true);
    // Local storage'dan dil tercihini al (sadece client-side)
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // Dil değişikliklerini local storage'a kaydet
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  // Çeviri fonksiyonu
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  // SSR sırasında hydration problemini önlemek için
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{
        language: 'en',
        setLanguage: () => {},
        t: (key: string) => translations.en[key as keyof typeof translations.en] || key
      }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
