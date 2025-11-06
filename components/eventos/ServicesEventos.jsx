'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Plane, Building, Car, MapPin, Coffee } from 'lucide-react';
import { useEventosPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ServicesEventos = () => {
  const { data: eventosData } = useEventosPage();

  const defaultServicos = [
    {
      icon: Users,
      titulo: 'Atendimento a palestrantes e congressistas',
      descricao: 'Garantimos que seus convidados de honra tenham uma experiência de viagem VIP, com todo o suporte necessário.'
    },
    {
      icon: Plane,
      titulo: 'Emissão de passagens aéreas',
      descricao: 'Buscamos as melhores rotas e tarifas, otimizando custos e tempo de deslocamento, tanto para organizadores como para visitantes.'
    },
    {
      icon: Building,
      titulo: 'Reserva de hospedagem',
      descricao: 'Selecionamos e reservamos os hotéis mais adequados, considerando localização, conforto e orçamento, para que todos estejam bem acomodados.'
    },
    {
      icon: Car,
      titulo: 'Transportes e programação de apoio',
      descricao: 'Organizamos traslados eficientes e seguros, além de criar programações de apoio para acompanhantes e familiares, garantindo que todos desfrutem da melhor experiência de viagem possível.'
    },
    {
      icon: MapPin,
      titulo: 'Cotação e locação de salas para eventos',
      descricao: 'Auxiliamos na escolha e reserva de espaços ideais para suas reuniões, conferências ou workshops.'
    },
    {
      icon: Coffee,
      titulo: 'Contratação de Serviços de Alimentos e Bebidas (A&B)',
      descricao: 'Gerenciamos a parte gastronômica do seu evento, desde coffee breaks a jantares de gala, com opções que se encaixam no seu perfil e orçamento.'
    }
  ];

  // Garante que sempre seja um array
  const servicos = Array.isArray(eventosData?.eventServices?.items)
    ? eventosData.eventServices.items
    : (eventosData?.eventServices && !Array.isArray(eventosData.eventServices) && eventosData.eventServices.items)
      ? eventosData.eventServices.items
      : (Array.isArray(eventosData?.services))
        ? eventosData.services
        : (eventosData?.services?.items && Array.isArray(eventosData.services.items))
          ? eventosData.services.items
          : defaultServicos;

  const servicesTitle = eventosData?.eventServices?.title || 'Nossos serviços';

  return (
    <section className="py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {portableTextToPlain(servicesTitle) || servicesTitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicos.map((servico, index) => {
            // Mapeia ícones por título do serviço ou usa ícone padrão
            const getIconForService = (title) => {
              const titleLower = (title || '').toLowerCase();
              if (titleLower.includes('palestrantes') || titleLower.includes('congressistas')) return Users;
              if (titleLower.includes('passagens') || titleLower.includes('aéreas')) return Plane;
              if (titleLower.includes('hospedagem') || titleLower.includes('hotel')) return Building;
              if (titleLower.includes('transporte') || titleLower.includes('traslado')) return Car;
              if (titleLower.includes('sala') || titleLower.includes('locação')) return MapPin;
              if (titleLower.includes('alimentos') || titleLower.includes('bebidas') || titleLower.includes('a&b')) return Coffee;
              return Users; // Ícone padrão
            };

            // Se o serviço tem um ícone (do fallback), usa ele. Senão, mapeia pelo título
            const Icon = servico.icon || getIconForService(servico.title || servico.titulo);
            
            return (
              <motion.div
                key={servico._key || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#D38E17] to-[#F59E0B] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white">
                  {Icon && <Icon className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{portableTextToPlain(servico.title || servico.titulo) || servico.title || servico.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{portableTextToPlain(servico.description || servico.descricao) || servico.description || servico.descricao}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesEventos;