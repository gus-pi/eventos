import React from 'react';
import { twMerge } from 'tailwind-merge';

type H1Props = {
  children: React.ReactNode;
  className: string;
};

const H1 = ({ children, className }: H1Props) => {
  return (
    <h1
      className={twMerge(
        'text-3xl lg:text-6xl font-bold tracking-tight',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;