'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useHomepage } from '../utils/hooks/useSanityData';
import { resolveImage, getSiteSettings } from '../utils/lib/sanity';

const Logo = ({ className = "h-8" }) => {
  const { data: homepageData } = useHomepage();
  const [siteSettings, setSiteSettings] = useState(null);

  const logoSrc = resolveImage(homepageData?.hero?.logo, '/selo-vermelho.png');

  // Try to extract numeric size from className if provided (e.g., w-[180px] h-[180px])
  const width = 180;
  const height = 180;

  // Fallback alt text
  const fallbackAltText = '24H Escritório de Viagens';

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await getSiteSettings();
        setSiteSettings(settings);
      } catch (error) {
        console.warn('Usando dados fallback para o Logo:', error);
      }
    };

    loadSettings();
  }, []);

  // Usa alt text do Sanity ou fallback
  const logoAltText = siteSettings?.branding?.logoAltText || fallbackAltText;

  return (
    <div className={`relative flex items-center ${className.includes('h-') ? className : `h-8 ${className}`}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={logoSrc}
        alt={logoAltText}
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
        priority={false}
      />
    </div>
  );
};

export default Logo;