'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const EquipePage = ({ data }) => {
  if (!data) return null;

  const {
    hero,
    teamIntro,
    teamMembers,
    departments,
    whyChooseTeam,
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

      {/* Team Introduction */}
      <section id="equipe" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Conteúdo */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark mb-6">
                {teamIntro?.title}
              </h2>
              <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
                {teamIntro?.description}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {teamIntro?.stats?.map((stat, index) => (
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
          </div>
        </div>
      </section>

      {/* Team Members - Layout em timeline */}
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
              Nossa Equipe
            </h2>
            <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
              Conheça os profissionais que fazem a diferença em cada viagem
            </p>
          </motion.div>

          <div className="space-y-12">
            {teamMembers?.map((member, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {/* Foto */}
                <div className="lg:w-1/3">
                  <div className="relative">
                    <img
                      src={member.photo?.asset?.url || "/placeholder-user.jpg"}
                      alt={member.name}
                      className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                    />
                    {member.isLeadership && (
                      <div className="absolute -top-4 -right-4 bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Liderança
                      </div>
                    )}
                  </div>
                </div>

                {/* Informações */}
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">
                          {member.name}
                        </h3>
                        <p className="text-brand-gold font-semibold text-lg">
                          {member.position}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <Clock className="w-4 h-4 text-brand-gold" />
                        <span className="text-sm text-brand-dark/70">
                          {member.experience} anos de experiência
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-brand-dark/80 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Especialidades */}
                    {member.specialties && member.specialties.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-brand-dark mb-2">
                          Especialidades:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, specIndex) => (
                            <span
                              key={specIndex}
                              className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Idiomas */}
                    {member.languages && member.languages.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-brand-dark mb-2">
                          Idiomas:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.languages.map((language, langIndex) => (
                            <span
                              key={langIndex}
                              className="px-3 py-1 bg-brand-beige/20 text-brand-dark text-xs rounded-full"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Certificações */}
                    {member.certifications && member.certifications.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-brand-dark mb-2">
                          Certificações:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.certifications.map((cert, certIndex) => (
                            <span
                              key={certIndex}
                              className="px-3 py-1 bg-brand-red/10 text-brand-red text-xs rounded-full flex items-center gap-1"
                            >
                              <Award className="w-3 h-3" />
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      {departments && departments.length > 0 && (
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
                Nossos Departamentos
              </h2>
              <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
                Organização especializada para atender todas as suas necessidades
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-brand-beige/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-8 h-8 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4">
                      {dept.name}
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Our Team */}
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
              {whyChooseTeam?.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseTeam?.items?.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-4">
                  {item.title}
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

export default EquipePage;
