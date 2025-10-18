'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Briefcase, 
  Phone, 
  Mail, 
  ArrowRight,
  Check,
  Send
} from 'lucide-react';

const TrabalheConoscoPage = ({ data }) => {
  if (!data) return null;

  const { title, subtitle, content, openPositions } = data;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
                className="bg-gradient-to-br from-brand-beige/10 to-brand-gold/5 rounded-2xl p-8 lg:p-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-brand-dark/80 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Por que trabalhar conosco?
            </h2>
            <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
              Oferecemos um ambiente de trabalho dinâmico e oportunidades de crescimento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Equipe Unida', desc: 'Ambiente colaborativo e acolhedor' },
              { icon: Award, title: 'Crescimento Profissional', desc: 'Oportunidades de desenvolvimento' },
              { icon: Clock, title: 'Flexibilidade', desc: 'Horários flexíveis e home office' },
              { icon: MapPin, title: 'Localização Privilegiada', desc: 'Escritórios em pontos estratégicos' },
              { icon: Briefcase, title: 'Projetos Desafiadores', desc: 'Trabalhe com clientes diversos' },
              { icon: Check, title: 'Benefícios Completos', desc: 'Pacote de benefícios atrativo' }
            ].map((benefit, index) => (
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
                  <benefit.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-brand-dark/70 leading-relaxed text-center">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      {openPositions && openPositions.length > 0 && (
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
                Vagas Abertas
              </h2>
              <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
                Confira as oportunidades disponíveis em nossa equipe
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-brand-beige/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-brand-dark mb-4">
                        {position.title}
                      </h3>
                      <p className="text-brand-dark/80 leading-relaxed mb-6">
                        {position.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {position.requirements && position.requirements.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-brand-dark mb-3">Requisitos:</h4>
                            <ul className="space-y-2">
                              {position.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                                  <span className="text-brand-dark/70 text-sm">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {position.benefits && position.benefits.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-brand-dark mb-3">Benefícios:</h4>
                            <ul className="space-y-2">
                              {position.benefits.map((benefit, benIndex) => (
                                <li key={benIndex} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                                  <span className="text-brand-dark/70 text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-brand-gold/10 rounded-xl p-6 h-full">
                        <div className="space-y-4">
                          {position.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-brand-gold" />
                              <span className="text-sm text-brand-dark">{position.location}</span>
                            </div>
                          )}
                          {position.type && (
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-brand-gold" />
                              <span className="text-sm text-brand-dark capitalize">{position.type}</span>
                            </div>
                          )}
                          <motion.button
                            className="w-full bg-brand-gold text-white py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Candidatar-se
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-dark to-brand-red">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Envie seu currículo
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Não encontrou a vaga ideal? Envie seu currículo e entraremos em contato quando houver oportunidades.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                    placeholder="(51) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Área de Interesse
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                  >
                    <option value="">Selecione uma área</option>
                    <option value="atendimento">Atendimento ao Cliente</option>
                    <option value="operacoes">Operações de Viagem</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="marketing">Marketing</option>
                    <option value="tecnologia">Tecnologia</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Experiência Profissional
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                  placeholder="Conte-nos sobre sua experiência profissional..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-gold focus:outline-none"
                  placeholder="Por que gostaria de trabalhar conosco?"
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-brand-gold text-white py-4 rounded-lg font-semibold text-lg hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Enviar Candidatura
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrabalheConoscoPage;
