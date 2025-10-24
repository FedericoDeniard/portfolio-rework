import React from 'react';
import './TextMagnify.css';

interface TextMagnifyProps {
  children: string;
  magnifyScale?: number;
  className?: string;
}

const TextMagnify: React.FC<TextMagnifyProps> = ({
  children,
  magnifyScale = 2,
  className = '',
}) => {
  const style = { '--magnify-scale': magnifyScale } as React.CSSProperties;

  return (
    <div className={`text-magnify-container ${className}`} style={style}>
      {children.split(' ').map((word, wordIndex, words) => (
        <React.Fragment key={wordIndex}>
          <span className="text-magnify-word">
            {word.split('').map((char, charIndex) => (
              <span key={charIndex} className="text-magnify-letter">
                {char}
              </span>
            ))}
          </span>
          {wordIndex < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TextMagnify;
