import { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../constants/navigation';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
    const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return activeSection;
};
