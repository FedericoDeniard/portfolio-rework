import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default SectionWrapper;
