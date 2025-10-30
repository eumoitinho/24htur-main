'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Plane, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useHomepage } from '../../utils/hooks/useSanityData';

const ServicesHome = () => {
  const { data: homepageData, loading, error } = useHomepage();
  
  // Fallback para dados estáticos caso não carregue do Sanity
  const servicesData = homepageData?.services || [
    {
      icon: Briefcase,
      title: 'Viagens corporativas',
      description: 'Otimize sua gestão de viagens empresariais com nossa gestão de passagens, hospedagens, traslados executivos e relatórios detalhados por centro de custos. Atendemos desde viagens individuais até grandes grupos e programas de incentivo, garantindo economia, agilidade e total conformidade com as políticas da sua empresa.',
      link: '/corporate',
      ctaText: 'SAIBA MAIS!'
    },
    {
      icon: Plane,
      title: 'Viagens de lazer',
      description: 'Transforme suas férias em experiências únicas com nosso planejamento especializado. Cuidamos de passagens, hospedagens, câmbio, roteiros turísticos e até passeios exclusivos. Nossa equipe resolve todos os detalhes operacionais para que você se preocupe apenas em aproveitar cada momento da sua viagem.',
      link: '/lazer',
      ctaText: 'SAIBA MAIS!'
    },
    {
      icon: Calendar,
      title: 'Viagens para eventos',
      description: 'Cuidamos de toda a logística de viagens para feiras, congressos, convenções e encontros corporativos, atendendo empresas, palestrantes e participantes. Fornecemos assessoria personalizada e gerimos passagens aéreas e rodoviárias, reservas, transfers e passeios pré e pós-evento.',
      link: '/eventos',
      ctaText: 'SAIBA MAIS!'
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {homepageData?.servicesTitle || 'NOSSOS SERVIÇOS'}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/50 hover:border-slate-300/70 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 group-hover:from-brand-gold/30 group-hover:to-brand-gold/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-brand-dark" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link href={service.link}>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-brand-dark font-semibold hover:text-brand-gold transition-colors duration-300"
                    >
                      {service.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2} />
                    </motion.a>
                  </Link>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-gold to-[#F59E0B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;