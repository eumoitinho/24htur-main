import React from 'react';
import Image from 'next/image';
import { useHomepage } from '../utils/hooks/useSanityData';
import { resolveImage } from '../utils/lib/sanity';

const Logo = ({ className = "h-8" }) => {
  const { data: homepageData } = useHomepage();
  const logoSrc = resolveImage(homepageData?.hero?.logo, '/selo-vermelho.png');

  // Try to extract numeric size from className if provided (e.g., w-[180px] h-[180px])
  const width = 180;
  const height = 180;

  return (
    <div className={`relative flex items-center ${className.includes('h-') ? className : `h-8 ${className}`}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={logoSrc}
        alt="24H Escritório de Viagens"
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
        priority={false}
      />
    </div>
  );
};

export default Logo;