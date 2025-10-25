'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

// Static fallback content for SSR
export const StaticHero: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 -mt-12 md:mt-12">
        <h1
          className={`font-light mb-6 md:mb-8 leading-[0.9] font-abc-diatype text-gray-900 ${
            language === 'tr'
              ? 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'
              : 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'
          }`}
        >
          {t('hero.greeting')}{' '}
          <br className="hidden sm:block" />
          {t('hero.subtitle')}
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-abc-diatype text-gray-700">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="md">{t('hero.cta.projects')}</Button>
          <Button variant="outline" size="md">{t('hero.cta.contact')}</Button>
        </div>
      </div>
    </section>
  );
};

export const StaticAbout: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-8 leading-tight font-abc-diatype">
            {t('about.title.line1')}
            <br />
            {t('about.title.line2')}
            <br />
            {t('about.title.line3')}
            <br />
            {t('about.title.line4')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12 font-abc-diatype">
            {t('about.subtitle')}
          </p>
          <div className="space-y-8">
            <div className="max-w-xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed font-abc-diatype">
                {t('about.description')}
              </p>
            </div>
            <div className="text-center text-gray-600 font-abc-diatype">
              <p>📍 {t('common.location')}</p>
              <p className="mt-2">{t('about.status')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const StaticHeader: React.FC = () => {
  return null; // Header sadece scroll sonrası görünür
};
