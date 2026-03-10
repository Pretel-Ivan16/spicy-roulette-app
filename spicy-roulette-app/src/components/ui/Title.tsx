import React from 'react'

interface TitleProps {
  title: string;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string
}

function Title({title, size, color}: TitleProps) {
  const sizeClasses = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
  };

  return React.createElement(
    size,
    { className: `${sizeClasses[size]} ${color || 'text-black'}` },
    title
  )
};

export default Title

