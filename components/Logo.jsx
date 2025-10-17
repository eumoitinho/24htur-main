import React from 'react';

const Logo = ({ className = "h-8" }) => {
  return (
    <div className={`relative flex items-center ${className.includes('h-') ? className : `h-8 ${className}`}`}>
      <img
        src="/selo-vermelho.png"
        alt="24H Escritório de Viagens"
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;