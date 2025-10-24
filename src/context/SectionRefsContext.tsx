import React, { createContext, useContext } from 'react';

interface SectionRefsContextType {
  sectionRefs: React.RefObject<HTMLElement | null>[];
}

const SectionRefsContext = createContext<SectionRefsContextType | null>(null);

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
};

export default SectionRefsContext;
