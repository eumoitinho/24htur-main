'use client'

import React from 'react';
import Image from 'next/image';
import { resolveImage } from '../utils/lib/sanity';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { registerInteraction } from '../utils/tracking/engagement';
import { trackSolicitarProposta } from '../utils/gtm';
import { useHomepage } from '../utils/hooks/useSanityData';
import Logo from './Logo';
import { portableTextToPlain } from '../utils/lib/sanity';

const Hero = () => {
  const { data: homepageData } = useHomepage();
  return (
    <section id="inicio" className="relative py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] sm:rounded-[44px] lg:rounded-[50px] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark bg-center bg-cover bg-no-repeat">
          <div className="absolute inset-0 z-0">
            <Image
              src={resolveImage(homepageData?.hero?.backgroundImage, '/hero.jpg')}
              alt={homepageData?.hero?.title || 'Hero background'}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Layered overlay for readability while showing more of the photo */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#06060a]/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06060a]/90 via-[#06060a]/60 to-[#06060a]/10" />
          </div>
    
                <div className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen">
                <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full opacity-25 blur-2xl bg-brand-gold"></div>
                <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full opacity-15 blur-3xl bg-brand-gold"></div>
                {/* Top-right large logo replacing decorative strokes */}
                <div className="absolute right-6 top-6 hidden md:block">
                  <Logo className="w-[220px] h-[220px]" />
                </div>
                
                </div>

                {/* Content */}
          <div className="relative z-[2] max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
            >
              {portableTextToPlain(homepageData?.hero?.title) || (
                <>Você cuida do <br className="hidden md:block" /><span className='text-brand-gold'>seu negócio</span><br className="hidden md:block" />e nós das <span className='text-brand-gold'><br className="hidden md:block" />suas viagens</span></>
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-white/90 text-[18px] leading-7"
            >
              {portableTextToPlain(homepageData?.hero?.subtitle) || 'Com um atendimento próximo e soluções personalizadas, nossa gestão completa de viagens corporativas ajuda sua empresa a economizar tempo, reduzir custos e aumentar a eficiência.'}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              {/* Primary CTA */}
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { trackSolicitarProposta('hero_cta', { page_section: 'hero'}); registerInteraction('solicitar_proposta'); }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white transition-all hover:bg-white/10 outline outline-1 outline-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 hover:shadow-lg hover:shadow-white/20"
              >
                <span className="text-sm font-semibold">{portableTextToPlain(homepageData?.hero?.ctaText) || 'SOLICITE UMA PROPOSTA PERSONALIZADA!'}</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </motion.a>

              {/* Secondary link */}
              <motion.a 
                href="#sobre" 
                whileHover={{ scale: 1.02 }}
                className="group inline-flex items-center gap-3 text-white/95 hover:text-white transition-all"
              >
                <span className="relative inline-flex h-[55px] w-[55px] items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all"></span>
                  <span className="relative inline-flex h-[39px] w-[39px] items-center justify-center rounded-full bg-white/90 text-brand-dark group-hover:bg-white transition-all">
                    <Play className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </span>
                <span className="text-[18px] font-semibold">Conheça a 24H</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;