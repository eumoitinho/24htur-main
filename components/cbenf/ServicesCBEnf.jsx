'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useCBEnfPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';
import { Plane, Hotel, Car, Camera, MapPin, Users, Clock, Shield } from 'lucide-react';

const ServicesCBEnf = () => {
  const { data: cbenfData } = useCBEnfPage();

  const localServices = [
    {
      icon: Plane,
      title: "Passagens Aéreas",
      description: "Voos diretos ou com conexão para Goiânia, com as melhores tarifas e horários convenientes."
    },
    {
      icon: Hotel,
      title: "Hospedagem Exclusiva",
      description: "Hotéis selecionados próximos ao evento, com tarifas especiais negociadas para congressistas."
    },
    {
      icon: Car,
      title: "Translado Incluso",
      description: "Transfer aeroporto-hotel-evento, garantindo comodidade e pontualidade durante todo o congresso."
    },
    {
      icon: Camera,
      title: "City Tour Goiânia",
      description: "Conheça os principais pontos turísticos da capital, incluindo centro histórico e mercado central."
    },
    {
      icon: MapPin,
      title: "Localização Estratégica",
      description: "Hospedagem a poucos minutos do Goiânia Convention Center, facilitando o acesso ao evento."
    },
    {
      icon: Users,
      title: "Grupos Organizados",
      description: "Pacotes especiais para grupos de hospitais, universidades e instituições de saúde."
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Assistência completa durante toda a viagem, com equipe especializada disponível a qualquer hora."
    },
    {
      icon: Shield,
      title: "Seguro Viagem",
      description: "Cobertura completa incluída em todos os pacotes, garantindo tranquilidade durante o evento."
    }
  ];

  // Mapeia ícones por título do serviço
  const getIconForService = (title) => {
    const titleLower = (title || '').toLowerCase();
    if (titleLower.includes('passagem') || titleLower.includes('aérea')) return Plane;
    if (titleLower.includes('hospedagem') || titleLower.includes('hotel')) return Hotel;
    if (titleLower.includes('translado') || titleLower.includes('transfer')) return Car;
    if (titleLower.includes('tour') || titleLower.includes('city')) return Camera;
    if (titleLower.includes('localização') || titleLower.includes('estratégica')) return MapPin;
    if (titleLower.includes('grupo') || titleLower.includes('organizado')) return Users;
    if (titleLower.includes('suporte') || titleLower.includes('24')) return Clock;
    if (titleLower.includes('seguro') || titleLower.includes('viagem')) return Shield;
    return Plane; // Ícone padrão
  };

  // Prefer services from Sanity when available, otherwise use localServices
  const services = Array.isArray(cbenfData?.services?.items) && cbenfData.services.items.length > 0
    ? cbenfData.services.items.map((s, i) => ({
        icon: getIconForService(s.title),
        title: portableTextToPlain(s.title) || s.title || (localServices[i] && localServices[i].title) || 'Serviço',
        description: portableTextToPlain(s.description) || s.description || (localServices[i] && localServices[i].description) || ''
      }))
    : localServices;

  return (
    <section id="pacotes" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2 ring-1 ring-brand-gold/20">
              <div className="h-2 w-2 rounded-full bg-brand-gold"></div>
              <span className="text-sm font-semibold text-brand-gold uppercase tracking-wide">Nossos Serviços</span>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              {portableTextToPlain(cbenfData?.services?.title) || (
                <>Tudo incluído para sua <span className="text-brand-gold">experiência completa</span></>
              )}
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {portableTextToPlain(cbenfData?.services?.subtitle) || 'Cuidamos de cada detalhe da sua viagem ao CBEnf 2024. Desde a chegada até a partida, nossa equipe especializada garante que você aproveite ao máximo este importante evento.'}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-xl hover:ring-slate-200 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10 ring-1 ring-brand-gold/20 group-hover:bg-brand-gold/20 transition-colors">
                  {service.icon && <service.icon className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-brand-gold/10 via-brand-gold/5 to-transparent p-8 ring-1 ring-brand-gold/20">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Pacotes Especiais CBEnf 2024
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Oferecemos opções flexíveis desde hospedagem simples até pacotes completos com city tour.
              Consulte nossas condições especiais para grupos e inscrições antecipadas.
            </p>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-brand-dark font-semibold transition-all hover:shadow-xl"
            >
              Ver Pacotes e Preços
              <Plane className="h-5 w-5" strokeWidth={2} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCBEnf;