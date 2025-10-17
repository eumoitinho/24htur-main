'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Briefcase } from 'lucide-react';
import { useTrabalheConoscoPage } from '../../utils/hooks/useSanityData';

const OpenPositionsTrabalheConosco = () => {
  const { data: trabalheConoscoData, loading, error } = useTrabalheConoscoPage();

  const defaultPositions = [
    {
      title: "Consultor de Viagens Sênior",
      location: "Porto Alegre, RS",
      type: "Tempo Integral",
      department: "Comercial",
      requirements: [
        "Experiência mínima de 3 anos em turismo",
        "Conhecimento em sistemas de reservas",
        "Inglês intermediário",
        "Paixão por viagens e atendimento ao cliente"
      ]
    },
    {
      title: "Analista de Eventos",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      department: "Eventos",
      requirements: [
        "Formação em Turismo, Eventos ou áreas afins",
        "Experiência em organização de eventos corporativos",
        "Conhecimento em logística de viagens",
        "Boa comunicação e organização"
      ]
    },
    {
      title: "Assistente Comercial",
      location: "Florianópolis, SC",
      type: "Tempo Integral",
      department: "Comercial",
      requirements: [
        "Ensino superior completo ou cursando",
        "Experiência em atendimento ao cliente",
        "Conhecimento básico de pacote Office",
        "Proatividade e dinamismo"
      ]
    }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const positions = trabalheConoscoData?.positions || defaultPositions;

  return (
    <section id="vagas" className="py-20 bg-brand-beige">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            Vagas Disponíveis
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Confira as oportunidades abertas e candidate-se à vaga que mais combina com seu perfil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">
                  {position.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-brand-gold" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span>{position.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-brand-gold" />
                    <span>{position.department}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-brand-dark mb-3">Requisitos:</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  const formSection = document.getElementById('candidatura');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Candidatar-se
              </button>
            </motion.div>
          ))}
        </div>

        {positions.length === 0 && (
          <motion.div
            className="text-center bg-white rounded-2xl p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-brand-gold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Nenhuma vaga disponível no momento
            </h3>
            <p className="text-gray-600 mb-6">
              Mas isso não significa que não queremos conhecer você! Cadastre seu currículo em nosso banco de talentos.
            </p>
            <button
              onClick={() => {
                const formSection = document.getElementById('candidatura');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Cadastrar Currículo
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OpenPositionsTrabalheConosco;