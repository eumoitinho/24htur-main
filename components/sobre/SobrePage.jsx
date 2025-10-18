'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  Eye, 
  Target, 
  CheckCircle,
  Phone,
  ArrowRight
} from 'lucide-react';

const SobrePage = ({ data }) => {
  if (!data) return null;

  const {
    hero,
    aboutCompany,
    missionVisionValues,
    team,
    certifications,
    contactCTA
  } = data;

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
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section - Layout diferente */}
      <section id="sobre" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark mb-6">
                {aboutCompany?.title}
              </h2>
              <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
                {aboutCompany?.description}
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {aboutCompany?.stats?.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-brand-beige/20 to-brand-gold/10 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl font-bold text-brand-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-brand-dark/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Imagem */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={aboutCompany?.image?.asset?.url || "/images/equipe.jpg"}
                  alt="Equipe 24H"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Layout em cards */}
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
              Nossos Pilares
            </h2>
            <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
              Os valores que guiam nossa empresa e definem nossa forma de trabalhar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">
                {missionVisionValues?.mission?.title}
              </h3>
              <p className="text-brand-dark/70 leading-relaxed text-center">
                {missionVisionValues?.mission?.description}
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">
                {missionVisionValues?.vision?.title}
              </h3>
              <p className="text-brand-dark/70 leading-relaxed text-center">
                {missionVisionValues?.vision?.description}
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">
                Nossos Valores
              </h3>
              <div className="space-y-3">
                {missionVisionValues?.values?.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">
                        {value.title}
                      </div>
                      <div className="text-brand-dark/70 text-xs leading-relaxed">
                        {value.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Layout diferente */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              {team?.title}
            </h2>
            <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
              {team?.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team?.members?.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.photo?.asset?.url || "/placeholder-user.jpg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {member.experience}+ anos
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-gold font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-brand-dark/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {certifications?.items && certifications.items.length > 0 && (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-dark to-brand-red">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {certifications?.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.items.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Award className="w-8 h-8 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed mb-3">
                      {cert.description}
                    </p>
                    {cert.year && (
                      <div className="text-brand-gold font-semibold">
                        {cert.year}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              {contactCTA?.title}
            </h2>
            <p className="text-lg text-brand-dark/80 mb-8 max-w-2xl mx-auto">
              {contactCTA?.subtitle}
            </p>
            <motion.a
              href="tel:(51) 3516-0098"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              {contactCTA?.ctaText}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;
