import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, id, className }, ref) => {
  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
