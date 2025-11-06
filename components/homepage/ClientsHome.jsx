'use client'

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useHomepage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain, urlFor } from '../../utils/lib/sanity';

const ClientsHome = () => {
  const { data: homepageData } = useHomepage();

  const clientsData = homepageData?.clients || null;
  const logos = clientsData?.logos || [];

  // Debug: log dos logos recebidos
  React.useEffect(() => {
    if (logos && logos.length > 0) {
      console.log('🖼️ Logos recebidos no componente:', logos);
      logos.forEach((logo, idx) => {
        console.log(`Logo ${idx}:`, {
          _key: logo._key,
          _type: logo._type,
          asset: logo.asset,
          alt: logo.alt
        });
      });
    }
  }, [logos]);

  // Duplicar logos para efeito de marquee infinito
  const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos]);

  // Se não houver logos, mostra placeholder
  if (!logos || logos.length === 0) {
    return (
      <section className="py-14 sm:py-16 lg:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-8">
              {portableTextToPlain(clientsData?.title) || 'NOSSOS CLIENTES'}
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-12 text-center"
            >
              <p className="text-slate-600 text-lg">
                (Aguardando envio pela cliente)
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 sm:py-24 bg-brand-beige/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {clientsData?.badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/20 px-4 py-2 text-xs font-semibold tracking-wide text-brand-dark">
              {portableTextToPlain(clientsData.badge)}
            </span>
          )}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark leading-tight">
            {clientsData?.title ? (
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
          {clientsData?.subtitle && (
            <p className="mt-4 text-sm sm:text-base font-medium text-brand-dark/70 max-w-xl mx-auto">
              {portableTextToPlain(clientsData.subtitle)}
            </p>
          )}
        </div>

        {/* Marquee Container */}
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
                  try {
                    // Tenta gerar URL usando urlFor se logo tem estrutura de imagem do Sanity
                    if (logo && typeof logo === 'object') {
                      if (logo._type === 'image' && logo.asset) {
                        imageUrl = urlFor(logo).url();
                      } else if (logo.asset?.url) {
                        // Se o asset já tem URL direta (depois da query expandida)
                        imageUrl = logo.asset.url;
                      } else if (logo.asset?._id) {
                        // Se tem apenas _id, tenta usar urlFor
                        imageUrl = urlFor(logo).url();
                      }
                    }
                  } catch (error) {
                    console.error('Erro ao gerar URL do logo:', error, logo);
                  }
                  
                  const altText = logo?.alt || 'Logo do cliente';
                  
                  if (!imageUrl) {
                    console.warn('Logo sem URL válida:', logo);
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
      </div>
    </section>
  );
};

export default ClientsHome;