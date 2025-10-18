'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const EventosListing = () => {
  // Dados dos eventos - posteriormente virão do Sanity
  const eventos = [
    {
      id: 'cbenf',
      slug: 'cbenf',
      title: 'CBEnf - Congresso Brasileiro de Enfermagem',
      subtitle: 'O maior evento de enfermagem do Brasil',
      date: '2024',
      location: 'Brasília - DF',
      description: 'Junte-se aos principais profissionais de enfermagem do país no evento mais importante da área.',
      image: '/images/eventos/cbenf-banner.jpg',
      status: 'active', // active, coming-soon, past
      highlight: true
    },
    // Aqui serão adicionados mais eventos conforme necessário
  ];

  return (
    <section className="py-20 bg-brand-beige">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            Nossos Eventos
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Confira os eventos que oferecemos condições especiais para participação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {eventos.map((evento, index) => (
            <motion.div
              key={evento.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                evento.highlight ? 'ring-2 ring-brand-gold' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Imagem do evento */}
              <div className="relative h-64 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-gold/20">
                {evento.image ? (
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white/70" />
                  </div>
                )}

                {evento.highlight && (
                  <div className="absolute top-4 right-4 bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Destaque
                  </div>
                )}

                {evento.status === 'coming-soon' && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Em Breve
                  </div>
                )}
              </div>

              {/* Conteúdo do card */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">
                  {evento.title}
                </h3>

                <p className="text-brand-gold font-semibold mb-4">
                  {evento.subtitle}
                </p>

                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-5 h-5 mr-3 text-brand-gold" />
                  <span>{evento.date}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-3 text-brand-gold" />
                  <span>{evento.location}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {evento.description}
                </p>

                {evento.status === 'active' ? (
                  <a
                    href={`/eventos/${evento.slug}`}
                    className="inline-flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                ) : evento.status === 'coming-soon' ? (
                  <div className="inline-flex items-center space-x-2 bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                    <span>Em Breve</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                    <span>Evento Finalizado</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {eventos.length === 0 && (
          <motion.div
            className="text-center bg-white rounded-2xl p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 text-brand-gold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Nenhum evento disponível no momento
            </h3>
            <p className="text-gray-600 mb-6">
              Estamos trabalhando em novos eventos. Fique atento às nossas atualizações!
            </p>
            <a
              href="/corporate"
              className="inline-flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>Conheça Nossos Serviços</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventosListing;