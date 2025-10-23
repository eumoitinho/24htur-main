'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useOpcoesViagemPage } from '../../utils/hooks/useSanityData';

const TravelOptionsOpcoesViagem = () => {
  const { data: opcoesData, loading, error } = useOpcoesViagemPage();
  
  // Fallback para dados estáticos caso não carregue do Sanity
  const optionsData = opcoesData?.options || [
    {
      name: "24H ÚNICO",
      description: "Para clientes que buscam o extraordinário, o programa 24H Único cria roteiros de viagem sob medida, com experiências verdadeiramente exclusivas. Mergulhe em roteiros personalizados, onde cada detalhe é pensado para superar suas expectativas e proporcionar momentos de luxo, privacidade e exclusividade."
    },
    {
      name: "VIVA 24H",
      description: "Desconecte-se da rotina e reconecte-se com o essencial. O Viva 24H é ideal para quem busca escapadinhas revigorantes, finais de semana inesquecíveis ou a flexibilidade de um home office outdoor. Privilegiamos pequenas hospedagens regionais, charmosas e acolhedoras, que oferecem uma imersão autêntica na cultura local e na beleza natural."
    },
    {
      name: "VIAGENS DE INCENTIVO",
      description: "Nossas Viagens de Incentivo são programas de recompensa corporativos, desenhados para motivar e engajar colaboradores, equipes ou parceiros de negócios. Criamos grupos sob medida, alinhados ao budget da sua empresa e aos objetivos da premiação, garantindo que a experiência de viagem seja um poderoso estímulo para o alcance de metas e a fidelização."
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            NOSSAS OPÇÕES DE VIAGEM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {opcoesData?.intro || "Explore nossas categorias e encontre a aventura perfeita para você:"}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {optionsData.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200/50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  {option.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelOptionsOpcoesViagem;