'use client'

import React from 'react';
import { Monitor, BarChart3, DollarSign, Route, Eye, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useHomepage } from '../utils/hooks/useSanityData';
import { portableTextToPlain } from '../utils/lib/sanity';

const SelfBooking = () => {
  const modules = [
    {
      icon: Monitor,
      title: 'Interface para prestação de contas automatizada',
      description: 'Sistema integrado que automatiza relatórios financeiros'
    },
    {
      icon: BarChart3,
      title: 'Relatórios de Business Intelligence em tempo real',
      description: 'Dashboards interativos com dados atualizados instantaneamente'
    },
    {
      icon: DollarSign,
      title: 'Análises de economicidade por centro de custo',
      description: 'Controle detalhado de gastos por departamento ou projeto'
    },
    {
      icon: Route,
      title: 'Monitoramento de rotas e frequências',
      description: 'Otimização de viagens baseada em histórico e padrões'
    },
    {
      icon: Eye,
      title: 'Acompanhamento operacional detalhado',
      description: 'Visibilidade completa de todas as etapas da viagem'
    },
    {
      icon: Shield,
      title: 'Sistema de controle de compliance',
      description: 'Garantia de conformidade com políticas corporativas'
    }
  ];

  const { data: homepageData } = useHomepage();

  // If CMS provides modules, merge text fields into local modules (preserve icons/design)
  const cmsModules = homepageData?.selfBooking?.modules;
  const modulesToRender = (cmsModules && Array.isArray(cmsModules) && cmsModules.length)
    ? modules.map((m, i) => ({
        ...m,
        title: portableTextToPlain(cmsModules[i]?.title) || cmsModules[i]?.title || m.title,
        description: portableTextToPlain(cmsModules[i]?.description) || cmsModules[i]?.description || m.description
      }))
    : modules;

  return (
    <section id="self-booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Monitor className="h-5 w-5 text-brand-dark" strokeWidth={1.5} />
              <span className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-dark">
                {portableTextToPlain(homepageData?.selfBooking?.badge) || 'Self Booking System'}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {portableTextToPlain(homepageData?.selfBooking?.title) || (
                <>Gerencie sua viagem corporativa com nosso sistema{' '}<span className="text-brand-red">Self Booking</span></>
              )}
            </motion.h2>
            
            <motion.p 
              className="text-xl leading-8 text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {portableTextToPlain(homepageData?.selfBooking?.subtitle) || 'Desenvolvido para simplificar o processo de planejamento e aprovação, nosso sistema Self Booking oferece uma experiência intuitiva e completa, garantindo que suas políticas de viagem sejam sempre respeitadas. Sua empresa pode pesquisar e reservar voos*, monitorar o status das viagens e acessar relatórios detalhados para uma gestão estratégica.'}
            </motion.p>

            <p className="text-xs text-slate-500 mt-4">
              {portableTextToPlain(homepageData?.selfBooking?.note) || '* voos, hospedagem, rodoviário, locação de carros e ainda outros serviços off line - integra com sistema de prestação de contas'}
            </p>
          </motion.div>

          {/* Modules Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/50 hover:border-brand-gold/30 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-14 w-14 rounded-xl bg-gradient-to-br from-brand-gold to-brand-red shadow-lg shadow-brand-gold/20 group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-brand-dark group-hover:text-brand-red transition-colors duration-300 mb-3 leading-tight">
                    {module.title}
                  </h3>
                  
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
            <motion.a
            href="#contato"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-white bg-gradient-to-r from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red transition-all duration-300 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-semibold">{portableTextToPlain(homepageData?.selfBooking?.ctaText) || 'SOLICITE UMA PROPOSTA PERSONALIZADA!'}</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SelfBooking;