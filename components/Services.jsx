'use client'

import React, { useState } from 'react';
import { Briefcase, ChevronDown, Plane, Hotel, ShieldCheck, Wallet, Gift, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const serviceCategories = [
    {
      icon: Plane,
      title: 'Viagens & Transporte',
      description: 'Soluções completas de mobilidade',
      services: [
        'Contratação e emissão de passagens aéreas: Bilhetes nacionais e internacionais com as melhores taxas e tarifas',
        'Locação de veículos: Opções variadas para sua mobilidade',
        'Veículos executivos com motorista: Conforto e pontualidade em seus deslocamentos',
        'Tickets de trem: Mobilidade eficiente em diversas regiões',
        'Transporte rodoviário: Soluções para deslocamentos intermunicipais e interestaduais'
      ]
    },
    {
      icon: Hotel,
      title: 'Hospedagem & Conforto',
      description: 'Acomodações premium e serviços VIP',
      services: [
        'Reserva de hotéis e acomodações: Hospedagens selecionadas de acordo com suas necessidades',
        'Sala VIP: Conforto e exclusividade em aeroportos'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Proteção & Documentos',
      description: 'Segurança e agilidade burocrática',
      services: [
        'Seguro e assistência de viagens: Proteção e suporte em qualquer situação',
        'Encaminhamento de vistos: Agilidade em processos burocráticos'
      ]
    },
    {
      icon: Wallet,
      title: 'Financeiro & Conectividade',
      description: 'Soluções financeiras e comunicação',
      services: [
        'Câmbio: Facilidade para suas transações financeiras internacionais',
        'Cartão de débito internacional: Soluções financeiras para suas viagens',
        'e-Sim e chip internacional: Conectividade global sem preocupações'
      ]
    },
    {
      icon: Gift,
      title: 'Experiências Premium',
      description: 'Serviços exclusivos e personalizados',
      services: [
        'Viagens de incentivo: Programas de recompensa para motivar equipes e premiar clientes',
        'Guias privativos e tradutores: Suporte linguístico e cultural para viajantes',
        'Atendimento personalizado para clientes VIP: Exclusividade e atenção aos detalhes para seus executivos',
        'Programação turística paralela: Roteiros personalizados para familiares e acompanhantes',
        'Salas para eventos e A&B: Locação de estrutura para reuniões, conferências e eventos',
        'Experiências Wine Tour: Visitas a vinícolas renomadas',
        'Ingressos: Acesso facilitado a eventos e atrações'
      ]
    }
  ];

  return (
    <section id="servicos" className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-brand-dark" strokeWidth={1.5} />
            <span className="text-[14px] font-semibold uppercase tracking-[0.09em] text-brand-dark">
              Serviços disponíveis
            </span>
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Tudo que sua empresa precisa
          </h2>
          <p className="mt-3 text-slate-600">
            Gestão completa com soluções sob medida para cada etapa da viagem.
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="mt-12 space-y-8">
          {serviceCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isOpen = openAccordion === categoryIndex;
            
            return (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-slate-50/50 border border-slate-200/50 hover:border-slate-300/70 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <motion.button
                  type="button"
                  className="relative w-full px-8 py-6 sm:px-10 sm:py-8 flex items-center justify-between gap-6 hover:bg-slate-50/30 transition-all duration-300"
                  onClick={() => setOpenAccordion(isOpen ? -1 : categoryIndex)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-6">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-red shadow-lg shadow-brand-gold/20 group-hover:shadow-xl transition-shadow duration-300">
                        <div className="absolute inset-2 rounded-xl bg-white/20 backdrop-blur-sm">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="h-8 w-8 text-white drop-shadow-sm" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="text-left">
                      <h3 className="text-2xl font-semibold tracking-tight text-brand-dark group-hover:text-brand-red transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-slate-600 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <motion.span 
                      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-gradient-to-r from-brand-gold to-brand-red text-white shadow-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.services.length} serviços
                    </motion.span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-6 w-6 text-slate-600 group-hover:text-brand-red transition-colors" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </motion.button>
                
                {/* Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 sm:px-10 sm:pb-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {category.services.map((service, serviceIndex) => (
                            <motion.div
                              key={serviceIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                              className="group/item flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-white/70 transition-all duration-300"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.4 }}
                                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-gold to-brand-red shadow-sm"
                              >
                                <Check className="h-4 w-4 text-white" strokeWidth={2} />
                              </motion.div>
                              <p className="text-slate-700 text-sm leading-relaxed group-hover/item:text-slate-900 transition-colors">
                                {service}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-brand-dark to-brand-red p-8 sm:p-12"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(221,190,115,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(221,190,115,0.1),transparent_70%)]"></div>
          
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-3"
                whileHover={{ scale: 1.02 }}
              >
                PERSONALIZE DO SEU JEITO!
              </motion.h3>
              <p className="text-white/90 text-lg">
                Soluções sob medida para cada necessidade da sua empresa
              </p>
            </div>
            
            <motion.a
              href="#contato"
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-brand-dark bg-white hover:bg-brand-beige transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-semibold">Solicitar Proposta</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;