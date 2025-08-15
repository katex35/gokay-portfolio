import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

// Static fallback content for SSR
export const StaticHero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 -mt-12 md:mt-12">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 md:mb-8 leading-[0.9] font-abc-diatype text-gray-900">
          Hi, I'm Gökay.{' '}
          <br className="hidden sm:block" />
          Your next developer.
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-abc-diatype text-gray-700">
          Frontend Developer specializing in React, Next.js, and Web3 technologies. 
          Creating modern, responsive web applications with exceptional user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="md">Projects</Button>
          <Button variant="outline" size="md">Get in touch</Button>
        </div>
      </div>
    </section>
  );
};

export const StaticAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div>
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
          <div className="space-y-8">
            <div className="max-w-xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed font-abc-diatype">
                Frontend Developer from İzmir, Turkey, with expertise in React, Next.js, and Web3 technologies.
                Specialized in creating modern, responsive web applications with exceptional user experiences
                and clean, maintainable code.
              </p>
            </div>
            <div className="text-center text-gray-600 font-abc-diatype">
              <p>📍 İzmir, Turkey</p>
              <p className="mt-2">Available for freelance projects and full-time opportunities</p>
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
