'use client'

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

// Logos hardcoded para fallback
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
    .replace(/\s+/g, ' ')
    .trim();
}

const ClientsCorporate = () => {
  // Duplicar logos para efeito de marquee infinito
  const duplicatedLogos = useMemo(() => [...rawLogos, ...rawLogos], []);

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <Users className="h-5 w-5 text-brand-dark" strokeWidth={1.5} />
            <span className="text-[14px] font-semibold uppercase tracking-[0.09em] text-brand-dark">
              Prova Social
            </span>
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            A escolha de quem não abre mão de{' '}
            <span className="text-brand-red">controle e cuidado</span>
          </h2>
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
              <div className="flex gap-6 pr-6">
                {duplicatedLogos.map((logo, idx) => {
                  const imageUrl = `/clientes/${logo}`;
                  const altText = fileNameToAlt(logo);

                  return (
                    <motion.div
                      key={idx}
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

export default ClientsCorporate;
