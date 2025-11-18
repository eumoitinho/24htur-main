'use client'

import React from 'react';
import Image from 'next/image';
import { resolveImage } from '../../utils/lib/sanity';
import { portableTextToPlain } from '../../utils/lib/sanity';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useHomepage } from '../../utils/hooks/useSanityData';
import Logo from '../Logo';

const HeroHome = () => {
  const { data: homepageData, loading, error } = useHomepage();
  
  // Fallback para dados estáticos caso não carregue do Sanity
  const heroData = homepageData?.hero || {
    title: "Gestão completa de viagens de negócios e lazer",
    subtitle: "Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado",
    ctaText: "FALE COM UM ESPECIALISTA!"
  };

  // Resolver imagem de background - sempre retorna uma string válida
  // Fallback: mulher profissional no aeroporto (primeira foto)
  const imageSrc = resolveImage(homepageData?.hero?.backgroundImage, '/my-business-is-about-to-take-off-2025-04-06-10-49-24-utc.jpg');

  return (
    <section id="inicio" className="relative py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] sm:rounded-[44px] lg:rounded-[50px] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark bg-center bg-cover bg-no-repeat">
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={homepageData?.hero?.title || 'Hero background'}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              onError={(e) => {
                console.error('Erro ao carregar imagem:', imageSrc);
                e.currentTarget.src = '/my-business-is-about-to-take-off-2025-04-06-10-49-24-utc.jpg';
              }}
            />
          </div>
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#06060a]/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06060a]/90 via-[#06060a]/60 to-[#06060a]/10" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full opacity-25 blur-2xl bg-brand-gold"></div>
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full opacity-15 blur-3xl bg-brand-gold"></div>
            <div className="absolute right-6 top-6 hidden md:block">
              <Logo className="w-[180px] h-[180px]" />
            </div>
          </div>

          <div className="relative z-[2] max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
            >
              {(() => {
                const title = homepageData?.hero?.title;
                if (!title) {
                  // Fallback com quebra de linha
                  return (
                    <>
                      Gestão completa de viagens<br className="hidden md:block" />
                      <span className="text-brand-gold">de negócios e lazer</span>
                    </>
                  );
                }
                
                // Se é array de blocos (portable text), processa cada bloco como uma linha
                if (Array.isArray(title)) {
                  return title.map((block, index) => {
                    let text = '';
                    
                    // Se é um bloco com children
                    if (block && block.children && Array.isArray(block.children)) {
                      text = block.children.map((child) => {
                        if (child && child.text) {
                          return child.text;
                        }
                        return '';
                      }).join('');
                    }
                    // Se é um objeto com text direto
                    else if (block && block.text) {
                      text = block.text;
                    }
                    // Se é string direto no array
                    else if (typeof block === 'string') {
                      text = block;
                    }
                    
                    if (!text) return null;
                    
                    // Se é o último bloco e contém "viagens corporativas", destaca
                    const isLast = index === title.length - 1;
                    const hasCorporate = text.toLowerCase().includes('corporativas') || text.toLowerCase().includes('negócios');
                    
                    return (
                      <React.Fragment key={index}>
                        {index > 0 && <br className="hidden md:block" />}
                        {isLast && hasCorporate ? (
                          <span className="text-brand-gold">{text}</span>
                        ) : (
                          text
                        )}
                      </React.Fragment>
                    );
                  }).filter(Boolean);
                }
                
                // Se é string, verifica se precisa quebrar
                if (typeof title === 'string') {
                  // Se contém "Gestão completa de viagens de negócios e lazer", separa
                  if (title.includes('Gestão completa de viagens')) {
                    // Separa em "Gestão completa de viagens" e "de negócios e lazer"
                    if (title.includes('de negócios e lazer')) {
                      const [first] = title.split('de negócios e lazer');
                      return (
                        <>
                          {first.trim()}
                          <br className="hidden md:block" />
                          <span className="text-brand-gold">de negócios e lazer</span>
                        </>
                      );
                    }
                    // Se contém "viagens corporativas" no final, separa também
                    if (title.includes('viagens corporativas')) {
                      const parts = title.split('viagens corporativas');
                      return (
                        <>
                          {parts[0].trim()}
                          <br className="hidden md:block" />
                          <span className="text-brand-gold">viagens corporativas</span>
                        </>
                      );
                    }
                  }
                  return title;
                }
                
                // Fallback: usa portableTextToPlain
                const plainTitle = portableTextToPlain(title);
                if (plainTitle && plainTitle.includes('negócios e lazer')) {
                  const [first, ...rest] = plainTitle.split('de negócios e lazer');
                  return (
                    <>
                      {first.trim()}
                      <br className="hidden md:block" />
                      <span className="text-brand-gold">de negócios e lazer</span>
                      {rest.join('de negócios e lazer')}
                    </>
                  );
                }
                return plainTitle || heroData.title;
              })()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-white/90 text-[18px] leading-7"
            >
              {(() => {
                const subtitle = homepageData?.hero?.subtitle;
                if (!subtitle) return heroData.subtitle;
                
                // Se é string, usa diretamente
                if (typeof subtitle === 'string') {
                  return subtitle;
                }
                
                // Se é array (portable text), processa
                if (Array.isArray(subtitle)) {
                  const processed = subtitle.map((block) => {
                    if (block && block.children && Array.isArray(block.children)) {
                      return block.children.map((child) => {
                        if (child && child.text) {
                          return child.text;
                        }
                        return '';
                      }).join('');
                    }
                    if (block && block.text) {
                      return block.text;
                    }
                    if (typeof block === 'string') {
                      return block;
                    }
                    return '';
                  }).filter(Boolean).join(' ').trim();
                  
                  if (processed) return processed;
                }
                
                // Fallback: usa portableTextToPlain
                return portableTextToPlain(subtitle) || heroData.subtitle;
              })()}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-2xl bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-[15px] font-semibold text-brand-dark shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {portableTextToPlain(homepageData?.hero?.ctaText) || heroData.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;