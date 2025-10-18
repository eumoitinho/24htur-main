'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Mountain, 
  Heart, 
  Utensils, 
  BookOpen, 
  Calendar, 
  ShoppingBag, 
  Sun, 
  Snowflake,
  Phone,
  ArrowRight,
  Check
} from 'lucide-react';

const OpcoesViagemPage = ({ data }) => {
  if (!data) return null;

  const { title, subtitle, content } = data;

  const iconMap = {
    adventure: Mountain,
    romantic: Heart,
    food: Utensils,
    culture: BookOpen,
    events: Calendar,
    shopping: ShoppingBag,
    summer: Sun,
    winter: Snowflake
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="inicio" className="relative py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-[40px] sm:rounded-[44px] lg:rounded-[50px] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(/hero.jpg)` }}
          >
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
                <img
                  src="/logo.png"
                  alt="24H Escritório de Viagens"
                  width={220}
                  height={220}
                  className="w-[220px] h-[220px] object-contain opacity-90"
                />
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
                {title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {content?.map((section, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-brand-dark/80 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="bg-gradient-to-br from-brand-beige/20 to-brand-gold/10 rounded-2xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-brand-gold/20 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <Plane className="w-12 h-12 text-brand-gold" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-dark">
                        Sua Viagem dos Sonhos
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-beige/10 to-brand-gold/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Por que escolher nossas opções de viagem?
            </h2>
            <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
              Oferecemos soluções personalizadas para cada tipo de viajante
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Check, title: 'Personalização Total', desc: 'Roteiros sob medida para suas preferências' },
              { icon: Check, title: 'Melhores Preços', desc: 'Negociação direta com fornecedores' },
              { icon: Check, title: 'Suporte 24/7', desc: 'Atendimento disponível durante toda a viagem' },
              { icon: Check, title: 'Experiência Garantida', desc: 'Qualidade assegurada em cada detalhe' },
              { icon: Check, title: 'Documentação Completa', desc: 'Cuidamos de toda a burocracia' },
              { icon: Check, title: 'Segurança Total', desc: 'Proteção e assistência em qualquer situação' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-brand-dark/70 leading-relaxed text-center">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-dark to-brand-red">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para sua próxima aventura?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra as melhores opções de viagem para você.
            </p>
            <motion.a
              href="tel:(51) 3516-0098"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              FALE CONOSCO AGORA
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OpcoesViagemPage;
