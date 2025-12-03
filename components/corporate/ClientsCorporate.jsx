'use client'

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section className="relative py-16 sm:py-20 bg-brand-beige/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            A escolha de quem não abre mão de{' '}
            <span className="text-brand-red">controle e cuidado</span>
          </motion.h2>
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
