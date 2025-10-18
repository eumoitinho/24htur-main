'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Phone, 
  MapPin, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin,
  Mountain,
  Heart,
  Utensils,
  BookOpen,
  Calendar,
  ShoppingBag,
  Sun,
  Snowflake,
  Check,
  ArrowRight
} from 'lucide-react';

const LazerPage = ({ data }) => {
  if (!data) return null;

  const {
    hero,
    metrics,
    arguments: args,
    experiences,
    travelTypes,
    services,
    whyChoose,
    aboutCompany,
    testimonials,
    contactForm,
    footer
  } = data;

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
      {/* Bloco 1 - Hero */}
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
                {hero?.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed"
              >
                {hero?.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-8 sm:mt-10"
              >
                <motion.a
                  href="tel:(51) 3516-0098"
                  className="inline-flex items-center gap-3 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white transition-all hover:opacity-95 bg-brand-gold shadow-md hover:shadow-lg text-base sm:text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                  {hero?.ctaText}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2 - Métricas */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
            {metrics?.map((metric, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm px-5 py-6 sm:px-6 sm:py-7 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white text-center"
              >
                <div className="text-2xl sm:text-3xl font-semibold text-brand-gold mb-2">
                  {metric.value}
                </div>
                {metric.description && (
                  <div className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
                    {metric.description}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 3 - Argumentos */}
      <section className="py-10 sm:py-12 lg:py-14 bg-brand-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6">
              {args?.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {args?.items?.map((item, index) => (
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
                className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white/20"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-tight">
                  {item.question}
                </h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                  {item.answer}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 4 - Experiências */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
              {experiences?.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-brand-dark/80 leading-relaxed whitespace-pre-line">
                {experiences?.description}
              </p>
            </div>
            <motion.a
              href="tel:(51) 3516-0098"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              {experiences?.ctaText}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Bloco 5 - Tipos de Viagem */}
      <section className="py-20 bg-gradient-to-br from-brand-beige/20 to-brand-gold/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
              {travelTypes?.title}
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {travelTypes?.types?.map((type, index) => {
              const IconComponent = iconMap[type.icon] || Mountain;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-dark">
                    {type.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Bloco 6 - Serviços */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
              {services?.title}
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {services?.items?.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">
                      {service.service}
                    </h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="tel:(51) 3516-0098"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
              {services?.ctaText}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Bloco 7 - Por que escolher */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand-dark/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {whyChoose?.title}
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {whyChoose?.items?.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  {item.title}
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bloco 8 - Sobre a empresa */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              {aboutCompany?.title}
            </h2>
            <h3 className="text-xl text-brand-gold mb-8">
              {aboutCompany?.subtitle}
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-brand-dark/80 leading-relaxed whitespace-pre-line mb-8">
                {aboutCompany?.description}
              </p>
            </div>
            <motion.a
              href="tel:(51) 3516-0098"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              {aboutCompany?.ctaText}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Bloco 9 - Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-brand-beige/20 to-brand-gold/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              {testimonials?.title}
            </h2>
            <p className="text-lg text-brand-dark/80">
              {testimonials?.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {testimonials?.items?.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                  ))}
                </div>
                <p className="text-brand-dark/80 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-brand-dark">
                  - {testimonial.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bloco 10 - Formulário */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
              {contactForm?.title}
            </h2>
            <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
              {contactForm?.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-brand-beige/20 to-brand-gold/10 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                    placeholder="(51) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Destino de Interesse
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                    placeholder="Ex: Paris, França"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                  placeholder="Conte-nos sobre sua viagem dos sonhos..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-brand-gold text-white py-4 rounded-lg font-semibold text-lg hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Solicitação
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bloco 11 - Rodapé */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-6">
                {footer?.companyName}
              </h3>
              <div className="space-y-2">
                {footer?.addresses?.map((address, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin className="w-4 h-4 text-brand-gold mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm">{address.address}</p>
                      <p className="text-sm text-gray-300">{address.city}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-brand-gold mr-2" />
                  <a href={`tel:${footer?.phone}`} className="text-sm hover:text-brand-gold transition-colors">
                    {footer?.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-brand-gold mr-2" />
                  <a href={`mailto:${footer?.email}`} className="text-sm hover:text-brand-gold transition-colors">
                    {footer?.email}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="space-y-2">
                {footer?.socialMedia?.map((social, index) => {
                  const IconComponent = social.platform === 'instagram' ? Instagram : 
                                     social.platform === 'facebook' ? Facebook : Linkedin;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:text-brand-gold transition-colors"
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {social.platform ? social.platform.charAt(0).toUpperCase() + social.platform.slice(1) : 'Social'}
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
              <p className="text-sm text-gray-300">
                24 horas por dia<br />
                7 dias por semana
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LazerPage;
