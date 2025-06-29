import { useMemo } from 'react';

interface UseButtonStylesProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
  loading: boolean;
  className: string;
}

export const useButtonStyles = ({
  variant,
  size,
  disabled,
  loading,
  className
}: UseButtonStylesProps) => {
  const classes = useMemo(() => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border font-abc-diatype font-normal tracking-wide';
    
    const variantClasses = {
      primary: 'text-white hover:opacity-90 focus:ring-orange-400 shadow-sm',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 border-gray-600',
      outline: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-gray-500 shadow-sm',
      ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500 border-transparent',
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm min-h-[36px]',
      md: 'px-6 py-3 text-base min-h-[44px]',
      lg: 'px-8 py-4 text-base min-h-[52px]',
    };

    const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  }, [variant, size, disabled, loading, className]);

  const inlineStyles = useMemo(() => {
    return variant === 'primary' ? {
      backgroundColor: '#ff894d',
      borderColor: '#ff894d',
    } : {};
  }, [variant]);

  const motionProps = useMemo(() => ({
    whileTap: { scale: disabled ? 1 : 0.98 }
  }), [disabled]);

  return { classes, inlineStyles, motionProps };
}; 