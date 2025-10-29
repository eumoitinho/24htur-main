'use client'

import React, { useMemo } from 'react';
import Image from 'next/image';
import { useHomepage } from '../utils/hooks/useSanityData';
import { motion } from 'framer-motion';
import { useSectionView } from '../utils/tracking/engagement';

// Local logos (nome do arquivo -> alt amigável)
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

  // Duplicar logos para efeito de marquee infinito
  const logos = useMemo(() => [...rawLogos, ...rawLogos], []);

  return (
    <section id="sec-clientes" className="relative py-20 sm:py-24 bg-brand-beige/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/20 px-4 py-2 text-xs font-semibold tracking-wide text-brand-dark">
            {homepageData?.clients?.badge || 'Nossa Rede de Confiança'}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark leading-tight">
            {homepageData?.clients?.title ? (
              // try to preserve `confiam` highlight if the string contains that word
              homepageData.clients.title.includes('confiam') ? (
                <>
                  {homepageData.clients.title.split('confiam')[0]}
                  <span className="text-brand-red">confiam</span>
                  {homepageData.clients.title.split('confiam')[1]}
                </>
              ) : (
                homepageData.clients.title
              )
            ) : (
              <>Empresas que <span className="text-brand-red">confiam</span> na 24H</>
            )}
          </h2>
          <p className="mt-4 text-sm sm:text-base font-medium text-brand-dark/70 max-w-xl mx-auto">
            {homepageData?.clients?.subtitle || 'Parcerias que reforçam nossa credibilidade e resultados consistentes em gestão de viagens corporativas.'}
          </p>
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
                {logos.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200/70 h-24 w-40 p-4 hover:shadow-md hover:border-brand-gold/60 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                      <Image
                        src={`/clientes/${logo}`}
                        alt={fileNameToAlt(logo)}
                        width={160}
                        height={96}
                        className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

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
