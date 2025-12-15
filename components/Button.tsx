import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'outline-white';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-black border border-transparent",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white focus:ring-black",
    ghost: "bg-transparent text-black hover:bg-gray-100 border border-transparent",
    'outline-white': "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black focus:ring-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;