'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import ClientOnly from '@/components/ClientOnly';
import { StaticHero, StaticAbout } from '@/components/StaticContent';

export default function Home(): React.ReactElement {
  // Reset scroll position on page load/refresh - instant, no animation
  useEffect(() => {
    // Immediate scroll to top - no animation, no behavior
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
} 