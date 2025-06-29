import { useState, useEffect } from 'react';

interface UseScrollSpyProps {
  sectionIds: string[];
  offset?: number;
}

// custom hook for scroll spy functionality
export const useScrollSpy = ({ sectionIds, offset = 100 }: UseScrollSpyProps): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop } = element;
          
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // initial check
    handleScroll();

    // add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}; 