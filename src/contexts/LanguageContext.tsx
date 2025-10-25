'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'tr';

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
    'projects.preview': 'Project Preview',
    'projects.technologiesLabel': 'Technologies',
    'projects.featuredLabel': 'Featured Project',
    'projects.personalLabel': 'Personal Project',
    'projects.actions.showMore': 'Click to view more',
    'projects.actions.showLess': 'Show less',
    'projects.actions.viewDemo': 'View Live Demo',
    'projects.actions.viewSource': 'View Source Code',
    'projects.osol-ai.title': 'OSOL.AI - Decentralized ETF Platform',
    'projects.osol-ai.description': 'Developed a React-based web application for a decentralized ETF platform on Solana blockchain. The project involved implementing real-time market data visualization using custom hooks and Zustand for state management, while building responsive UI components with Geist UI and Framer Motion. Integrated Solana wallet connectivity and Jupiter Terminal for DEX trading functionality, and created performance tracking features including NAV calculations and asset allocation charts.',
    'projects.monaliens.title': 'Monaliens - Web3 Gaming & Messaging DApp',
    'projects.monaliens.description': 'Built a comprehensive decentralized application on Monad Testnet featuring three core functionalities: NFT-based spin wheel gaming, raffle system, and encrypted messaging platform. Implemented advanced Web3 integration with React 18, TypeScript, and modern blockchain technologies. Created responsive, mobile-first UI with wallet connectivity, smart contract integration, and real-time blockchain data management.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's work together",
  'contact.description': "I help companies and startups bring their ideas to life. When you're ready to discuss your next project, I'm here to listen and collaborate.",
    'contact.headline.line1': "Let's Start a",
    'contact.headline.line2': 'Conversation.',
    'contact.email.label': 'Email me at',
    'contact.location.label': 'Based in',
    'contact.social.label': 'Connect with me',
    
    // Common
    'common.location': 'İzmir, Turkey',
    'footer.headline.line1': 'Ready to Build',
    'footer.headline.line2': 'Something Amazing?',
    'footer.headline.line3': "Let's Create Impact.",
    'footer.headline.line4': "Let's Innovate Together.",
    'footer.description': "Every great project starts with a conversation. When you're ready to turn your ideas into reality, I'm here to help you build solutions that matter.",
    'footer.quote': '"Quality means doing it right when no one is looking." - Henry Ford',
    'footer.rights': 'All rights reserved.',
    'footer.email': 'Email',
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
    'projects.preview': 'Proje Önizlemesi',
    'projects.technologiesLabel': 'Teknolojiler',
    'projects.featuredLabel': 'Öne Çıkan Proje',
    'projects.personalLabel': 'Kişisel Proje',
    'projects.actions.showMore': 'Daha fazlasını görmek için tıkla',
    'projects.actions.showLess': 'Daha az göster',
    'projects.actions.viewDemo': 'Canlı Demoyu Görüntüle',
    'projects.actions.viewSource': 'Kaynak Kodu Görüntüle',
    'projects.osol-ai.title': 'OSOL.AI - Merkeziyetsiz ETF Platformu',
    'projects.osol-ai.description': 'Solana blokzinciri üzerinde merkeziyetsiz bir ETF platformu için React tabanlı bir web uygulaması geliştirdim. Projede, özel hook\'lar ve durum yönetimi için Zustand kullanarak gerçek zamanlı piyasa verisi görselleştirmeleri oluşturdum; Geist UI ve Framer Motion ile responsive arayüz bileşenleri inşa ettim. Solana cüzdan bağlantısını ve DEX işlemleri için Jupiter Terminal entegrasyonunu sağladım, NAV hesaplamaları ve varlık dağılım grafikleri gibi performans takip özellikleri geliştirdim.',
    'projects.monaliens.title': 'Monaliens - Web3 Oyun ve Mesajlaşma DApp\'i',
    'projects.monaliens.description': 'Monad Testnet üzerinde NFT tabanlı çark oyunu, çekiliş sistemi ve şifreli mesajlaşma platformu olmak üzere üç temel işlev sunan kapsamlı bir merkeziyetsiz uygulama geliştirdim. React 18, TypeScript ve modern blokzincir teknolojileriyle ileri seviye Web3 entegrasyonu gerçekleştirdim. Cüzdan bağlantısı, akıllı sözleşme entegrasyonu ve gerçek zamanlı blokzincir veri yönetimi içeren responsive, mobil öncelikli bir arayüz tasarladım.',
    
    // Contact Section
    'contact.title': 'İletişime Geçin',
    'contact.subtitle': 'Birlikte çalışalım',
  'contact.description': 'Şirketlerin ve girişimlerin fikirlerini hayata geçirmelerine yardımcı oluyorum. Bir sonraki projenizi konuşmaya hazır olduğunuzda, dinlemek ve birlikte çalışmak için buradayım.',
    'contact.headline.line1': 'Hadi bir',
    'contact.headline.line2': 'Sohbet Başlatalım.',
    'contact.email.label': 'Bana e-posta ile ulaş',
    'contact.location.label': 'Bulunduğum yer',
    'contact.social.label': 'Benimle bağlantı kur',
    
    // Common
    'common.location': 'İzmir, Türkiye',
    'footer.headline.line1': 'Hazır mısın',
    'footer.headline.line2': 'Harika Bir Şey İnşa Etmeye?',
    'footer.headline.line3': 'Birlikte Etki Yaratalım.',
    'footer.headline.line4': 'Haydi Yenilik Yapalım.',
    'footer.description': 'Her başarılı proje bir sohbetle başlar. Fikirlerini gerçeğe dönüştürmeye hazırsan, değer katan çözümleri birlikte inşa edelim.',
    'footer.quote': '"Kalite, kimse bakmadığında da doğru olanı yapmaktır." - Henry Ford',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.email': 'E-posta',
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
    return (
      translations[language][key as keyof typeof translations.en] ||
      translations.en[key as keyof typeof translations.en] ||
      key
    );
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
        t: (key: string) =>
          translations.en[key as keyof typeof translations.en] ||
          key
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
