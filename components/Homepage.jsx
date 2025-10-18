'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Headset, 
  SlidersHorizontal, 
  CheckCircle2, 
  Phone,
  ArrowRight,
  Plane,
  Bed,
  Car,
  Shield,
  Ticket,
  Currency,
  Clock,
  User,
  Checkmark,
  Calendar
} from 'lucide-react';

const Homepage = ({ data }) => {
  if (!data) return null;

  const { hero, metrics, problems, experience, clients, services, whyChoose, aboutCompany, team, testimonials, contact } = data;

  const iconMap = {
    calendar: Calendar,
    clock: Clock,
    user: User,
    checkmark: Checkmark,
    plane: Plane,
    bed: Bed,
    car: Car,
    shield: Shield,
    ticket: Ticket,
    currency: Currency
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
                {hero?.title?.[0]?.children?.[0]?.text || 'Gestão completa de viagens de negócios e lazer'}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed"
              >
                {hero?.subtitle || 'Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado'}
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
                  {hero?.ctaText || 'FALE COM UM ESPECIALISTA!'}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      {metrics && (
        <section className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
              {metrics.items?.map((metric, index) => {
                const IconComponent = iconMap[metric.icon] || CheckCircle2;
                return (
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
                    className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm px-5 py-6 sm:px-6 sm:py-7 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                          {IconComponent && <IconComponent className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-brand-dark leading-tight">
                          {metric.value}
                        </h3>
                        <p className="text-sm sm:text-base text-brand-dark/70 leading-relaxed">
                          {metric.label}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Problems Section */}
      {problems && (
        <section className="py-10 sm:py-12 lg:py-14 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-4 sm:mb-6">
                {problems.title}
              </h2>
              <p className="text-lg sm:text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
                {problems.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {problems.items?.map((problem, index) => (
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
                  className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-4 leading-tight">
                    {problem.title}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed text-base sm:text-lg">
                    {problem.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experience && (
        <section className="py-10 sm:py-12 lg:py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-6 sm:mb-8 leading-tight">
                  {experience.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-brand-dark/70 leading-relaxed text-base sm:text-lg">
                    {experience.description?.[0]?.children?.[0]?.text || 'Na 24H, transformamos cada viagem em uma experiência única e sem preocupações...'}
                  </p>
                </div>
                {experience.ctaText && (
                  <motion.div
                    className="mt-6 sm:mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="tel:(51) 3516-0098"
                      className="inline-flex items-center gap-3 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white transition-all hover:opacity-95 bg-brand-gold shadow-md hover:shadow-lg text-base sm:text-lg font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="h-5 w-5" strokeWidth={1.5} />
                      {experience.ctaText}
                    </motion.a>
                  </motion.div>
                )}
              </motion.div>
              
              <motion.div
                className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-8 sm:p-12 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6 sm:mb-8">
                    <Plane className="w-10 h-10 sm:w-12 sm:h-12 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-4">
                    Sua Viagem dos Sonhos
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    Transformamos seus planos em experiências inesquecíveis
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {services && (
        <section className="py-10 sm:py-12 lg:py-14 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-4 sm:mb-6">
                {services.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.items?.map((service, index) => (
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
                  className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed text-base sm:text-lg mb-6">
                    {service.description}
                  </p>
                  {service.link && (
                    <motion.a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-gold/80 transition-colors text-base sm:text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {service.ctaText || 'SAIBA MAIS!'}
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </motion.a>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      {whyChoose && (
        <section className="py-10 sm:py-12 lg:py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-4 sm:mb-6">
                {whyChoose.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {whyChoose.items?.map((item, index) => (
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
                  className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed text-base sm:text-lg">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Company Section */}
      {aboutCompany && (
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
                {aboutCompany.title}
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                {aboutCompany.subtitle}
              </p>
              <div className="prose prose-lg max-w-none text-white/90 mb-8 sm:mb-12">
                <p className="leading-relaxed text-base sm:text-lg">
                  {aboutCompany.description?.[0]?.children?.[0]?.text || 'A 24H Escritório de Viagens é uma agência especializada...'}
                </p>
              </div>
              <motion.a
                href="tel:(51) 3516-0098"
                className="inline-flex items-center gap-3 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white transition-all hover:opacity-95 bg-brand-gold shadow-md hover:shadow-lg text-base sm:text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" strokeWidth={1.5} />
                {aboutCompany.ctaText || 'FALE COM UM ESPECIALISTA!'}
              </motion.a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials && (
        <section className="py-10 sm:py-12 lg:py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-4 sm:mb-6">
                {testimonials.title}
              </h2>
              <p className="text-lg sm:text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
                {testimonials.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.items?.map((testimonial, index) => (
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
                  className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <span key={i} className="text-brand-gold text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-brand-dark/70 leading-relaxed text-base sm:text-lg mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-brand-dark text-base sm:text-lg">
                    - {testimonial.name}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {contact && (
        <section className="py-10 sm:py-12 lg:py-14 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-6 sm:mb-8">
                {contact.title}
              </h2>
              <p className="text-lg sm:text-xl text-brand-dark/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                {contact.subtitle}
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
      )}
    </div>
  );
};

export default Homepage;
