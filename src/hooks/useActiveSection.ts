import { useState, useEffect, useRef } from 'react';
import { useSectionRefs } from '../context/SectionRefsContext';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
    const { sectionRefs } = useSectionRefs();
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

    const currentRefs = sectionRefs.map(ref => ref.current).filter(Boolean) as HTMLElement[];

    if (observer.current) {
      currentRefs.forEach(section => observer.current?.observe(section));
    }

    return () => {
      if (observer.current) {
        currentRefs.forEach(section => observer.current?.unobserve(section));
      }
    };
  }, [sectionRefs]);

  return activeSection;
};
