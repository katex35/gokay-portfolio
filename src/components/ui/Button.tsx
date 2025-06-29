'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ComponentProps } from '@/types';
import { useButtonStyles } from '@/hooks/useButtonStyles';

interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const LoadingSpinner: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  href,
  external = false,
  type = 'button',
  ...props
}) => {
  const { classes, inlineStyles, motionProps } = useButtonStyles({
    variant,
    size,
    disabled,
    loading,
    className
  });

  const content = (
    <>
      {loading && <LoadingSpinner />}
      {children}
    </>
  );

  const commonProps = {
    className: classes,
    style: inlineStyles,
    ...motionProps,
    ...props
  };

  return href ? (
    <motion.a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      {...commonProps}
    >
      {content}
    </motion.a>
  ) : (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      {...commonProps}
    >
      {content}
    </motion.button>
  );
};

export default Button; 