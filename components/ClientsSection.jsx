'use client'

import React, { useMemo } from 'react';
import Image from 'next/image';
import { useHomepage } from '../utils/hooks/useSanityData';
import { motion } from 'framer-motion';
import { portableTextToPlain, urlFor } from '../utils/lib/sanity';
import { useSectionView } from '../utils/tracking/engagement';

// Logos hardcoded para fallback (usado em páginas como /corporate)
const rawLogos = [
  'ABRH-RS_horizontal-todos-08-e1533145981222.png',
  'band-rs-2018-logo-2B4D05BD30-seeklogo.com.png',
  'camera logo.png',
  'cotrirosa-cor.png',
  'logo-nilo-frantz-1.png',
  'logo-stahl.png',
  'NGX-Logotipo_cinza.png.png',
  'Tea shop logo.png',
  'viemar.png',
  'Zabbix logo.png'
];

function fileNameToAlt(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\.(png|jpg|jpeg|svg)$/i, '')
    .replace(/\s+/g, ' ') // normaliza espaços
    .trim();
}

const ClientsSection = () => {
  useSectionView('sec-clientes', { threshold: 0.4 });
  const { data: homepageData } = useHomepage();

  const clientsData = homepageData?.clients || null;
  const sanityLogos = clientsData?.logos || [];
  
  // Se tem logos do Sanity, usa eles. Senão, usa logos hardcoded (fallback)
  const useSanityData = sanityLogos.length > 0;
  const logos = useSanityData ? sanityLogos : rawLogos;

  // Debug: log dos logos recebidos
  React.useEffect(() => {
    console.log('📋 ClientsSection - ClientsData completo:', clientsData);
    console.log('🖼️ ClientsSection - Logos array:', logos);
    if (logos && logos.length > 0) {
      console.log('🖼️ ClientsSection - Logos recebidos no componente:', logos);
      logos.forEach((logo, idx) => {
        console.log(`Logo ${idx}:`, {
          _key: logo._key,
          _type: logo._type,
          asset: logo.asset,
          alt: logo.alt,
          fullLogo: logo
        });
      });
    } else {
      console.log('⚠️ ClientsSection - Nenhum logo encontrado no array');
    }
  }, [logos, clientsData]);

  // Duplicar logos para efeito de marquee infinito
  const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <section id="sec-clientes" className="relative py-20 sm:py-24 bg-brand-beige/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {useSanityData && clientsData?.badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/20 px-4 py-2 text-xs font-semibold tracking-wide text-brand-dark">
              {portableTextToPlain(clientsData.badge)}
            </span>
          )}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark leading-tight">
            {useSanityData && clientsData?.title ? (
              (() => {
                const titleStr = portableTextToPlain(clientsData.title) || clientsData.title || '';
                if (!titleStr) return <>Empresas que <span className="text-brand-red">confiam</span> na 24H</>;
                if (titleStr.includes('confiam')) {
                  const parts = titleStr.split('confiam');
                  return (
                    <>
                      {parts[0]}
                      <span className="text-brand-red">confiam</span>
                      {parts[1]}
                    </>
                  );
                }
                return titleStr;
              })()
            ) : (
              <>Empresas que <span className="text-brand-red">confiam</span> na 24H</>
            )}
          </h2>
          {useSanityData && clientsData?.subtitle && (
            <p className="mt-4 text-sm sm:text-base font-medium text-brand-dark/70 max-w-xl mx-auto">
              {portableTextToPlain(clientsData.subtitle)}
            </p>
          )}
        </div>

        {/* Marquee Container - só mostra se houver logos */}
        {logos.length > 0 && (
          <div className="relative mt-12 select-none">
            <div
              className="mx-auto max-w-6xl overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}
            >
              <motion.div
                className="flex w-max"
                initial={{ x: 0 }}
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 80 }}
                style={{ willChange: 'transform' }}
              >
                {/* Grid repetida para continuidade */}
                <div className="flex gap-6 pr-6">
                  {duplicatedLogos.map((logo, idx) => {
                    let imageUrl = null;
                    let altText = 'Logo do cliente';
                    
                    try {
                      if (useSanityData) {
                        // Se está usando dados do Sanity, processa como imagem do Sanity
                        if (logo && typeof logo === 'object') {
                          // Primeiro, verifica se o asset já tem URL direta (quando expandido pela query)
                          if (logo.asset?.url) {
                            imageUrl = logo.asset.url;
                          }
                          // Se não tem URL direta, tenta usar urlFor com a estrutura de imagem do Sanity
                          else if (logo._type === 'image' && logo.asset) {
                            if (logo.asset._ref) {
                              imageUrl = urlFor(logo).url();
                            } else if (logo.asset._id) {
                              const imageObj = {
                                _type: 'image',
                                asset: {
                                  _ref: logo.asset._id,
                                  _type: 'reference'
                                }
                              };
                              imageUrl = urlFor(imageObj).url();
                            } else {
                              imageUrl = urlFor(logo).url();
                            }
                          }
                          else if (logo.asset?._id) {
                            const imageObj = {
                              _type: 'image',
                              asset: {
                                _ref: logo.asset._id,
                                _type: 'reference'
                              }
                            };
                            imageUrl = urlFor(imageObj).url();
                          }
                          altText = logo?.alt || 'Logo do cliente';
                        }
                      } else {
                        // Se está usando logos hardcoded, usa caminho local
                        imageUrl = `/clientes/${logo}`;
                        altText = fileNameToAlt(logo);
                      }
                    } catch (error) {
                      console.error('❌ Erro ao gerar URL do logo:', error, logo);
                    }
                    
                    if (!imageUrl) {
                      console.warn('⚠️ Logo sem URL válida. Estrutura recebida:', {
                        logo,
                        useSanityData,
                        asset: logo?.asset,
                        _type: logo?._type
                      });
                      return null;
                    }

                    return (
                      <motion.div
                        key={logo._key || idx}
                        className="flex items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200/70 h-24 w-40 p-4 hover:shadow-md hover:border-brand-gold/60 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={imageUrl}
                          alt={altText}
                          width={160}
                          height={96}
                          className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* CTA opcional */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-brand-dark outline outline-1 outline-brand-red hover:bg-brand-red hover:text-white transition-colors"
          >
            Fale com nossa equipe
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
