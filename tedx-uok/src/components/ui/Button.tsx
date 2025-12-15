import React from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  as?: React.ElementType;
}

export default function Button({ variant = 'primary', size = 'md', className, children, ...rest }: ButtonProps) {
  const base = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'text-white/80';
  const sizeClass = size === 'sm' ? 'text-sm px-3 py-1.5' : size === 'lg' ? 'text-lg px-6 py-3' : 'text-base px-4 py-2';

  return (
    <button className={clsx(base, variantClass, sizeClass, className)} {...rest}>
      {children}
    </button>
  );
}
