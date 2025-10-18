'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  Phone,
  ArrowRight
} from 'lucide-react';

const EventosInfoPage = ({ data }) => {
  if (!data) return null;

  const { title, subtitle, content } = data;

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
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {content?.map((section, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-12 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-brand-dark mb-6 leading-tight">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-brand-dark/70 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 sm:py-12 lg:py-14 bg-brand-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8">
              Precisa de mais informações?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco para esclarecer suas dúvidas sobre nossos serviços de eventos.
            </p>
            <motion.a
              href="tel:(51) 3516-0098"
              className="inline-flex items-center gap-3 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white transition-all hover:opacity-95 bg-brand-gold shadow-md hover:shadow-lg text-base sm:text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" strokeWidth={1.5} />
              FALE CONOSCO AGORA
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventosInfoPage;
