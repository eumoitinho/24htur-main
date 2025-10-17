'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Calendar, MapPin } from 'lucide-react';

const AboutCBEnf = () => {
  const features = [
    {
      icon: Users,
      number: "15.000+",
      text: "Profissionais esperados"
    },
    {
      icon: Award,
      number: "200+",
      text: "Palestrantes nacionais e internacionais"
    },
    {
      icon: Calendar,
      number: "4",
      text: "Dias de evento"
    }
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2 ring-1 ring-brand-gold/20">
                <div className="h-2 w-2 rounded-full bg-brand-gold"></div>
                <span className="text-sm font-semibold text-brand-gold uppercase tracking-wide">Sobre o Evento</span>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                O maior evento de <span className="text-brand-gold">enfermagem do Brasil</span>
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                O Congresso Brasileiro de Enfermagem é o principal encontro científico e profissional da categoria no país. Um evento que reúne os maiores especialistas, pesquisadores e profissionais para compartilhar conhecimento, inovações e as melhores práticas da enfermagem moderna.
              </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Em 2024, Goiânia recebe esta importante iniciativa, oferecendo uma programação completa com palestras, workshops, mesas redondas e oportunidades únicas de networking profissional.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10">
                    <feature.icon className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{feature.number}</div>
                  <div className="text-sm text-slate-600 leading-tight">{feature.text}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/cbenf-about.jpg"
                alt="Congresso Brasileiro de Enfermagem"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>

              {/* Event info overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                        <MapPin className="h-4 w-4" />
                        <span>Goiânia Convention Center</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4" />
                        <span>12 a 15 de Novembro de 2024</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">A partir de</div>
                      <div className="text-lg font-bold text-brand-gold">R$ 890</div>
                      <div className="text-xs text-slate-500">por pessoa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCBEnf;