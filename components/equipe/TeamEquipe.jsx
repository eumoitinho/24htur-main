'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useEquipePage } from '../../utils/hooks/useSanityData';

const TeamEquipe = () => {
  const { data: equipeData, loading, error } = useEquipePage();

  const defaultTeam = [
    {
      name: "Ana Silva",
      position: "Diretora Geral",
      bio: "15 anos de experiência em turismo corporativo e gestão de equipes.",
      email: "ana@24hturismo.com.br",
      phone: "(11) 99999-9999",
      linkedin: "#",
      image: "/images/team/ana.jpg"
    },
    {
      name: "Carlos Santos",
      position: "Gerente Comercial",
      bio: "Especialista em relacionamento com clientes e desenvolvimento de negócios.",
      email: "carlos@24hturismo.com.br",
      phone: "(11) 99999-9998",
      linkedin: "#",
      image: "/images/team/carlos.jpg"
    },
    {
      name: "Marina Costa",
      position: "Coordenadora de Eventos",
      bio: "Expert em organização de eventos corporativos e viagens de incentivo.",
      email: "marina@24hturismo.com.br",
      phone: "(11) 99999-9997",
      linkedin: "#",
      image: "/images/team/marina.jpg"
    },
    {
      name: "Roberto Lima",
      position: "Consultor de Viagens",
      bio: "Apaixonado por destinos nacionais e internacionais, sempre com as melhores dicas.",
      email: "roberto@24hturismo.com.br",
      phone: "(11) 99999-9996",
      linkedin: "#",
      image: "/images/team/roberto.jpg"
    }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const team = equipeData?.team || defaultTeam;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            Conheça Nossa Equipe
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Profissionais dedicados e experientes, prontos para tornar sua viagem inesquecível
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-square bg-gradient-to-br from-brand-gold/20 to-brand-dark/10 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-dark">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-gold font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex space-x-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-brand-gold" />
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-brand-gold" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-brand-gold" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamEquipe;