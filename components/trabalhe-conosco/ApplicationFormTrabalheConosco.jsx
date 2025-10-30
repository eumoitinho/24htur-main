'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, User, Mail, Phone, FileText } from 'lucide-react';
import { useTrabalheConoscoPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ApplicationFormTrabalheConosco = () => {
  const { data: trabalheConoscoData, loading, error } = useTrabalheConoscoPage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Currículo enviado com sucesso! Entraremos em contato em breve.');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const heading = portableTextToPlain(trabalheConoscoData?.applyHeading) || 'Candidate-se Agora';
  const lead = portableTextToPlain(trabalheConoscoData?.applyLead) || 'Preencha o formulário abaixo e anexe seu currículo. Nossa equipe de RH analisará seu perfil';
  const submitText = trabalheConoscoData?.submitText || 'Enviar Candidatura';

  return (
    <section id="candidatura" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {lead}
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-brand-beige rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nome completo"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-colors bg-white"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-colors bg-white"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefone"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-colors bg-white"
                />
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Vaga de interesse (opcional)"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-colors bg-white"
                />
              </div>
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Conte-nos um pouco sobre você e por que gostaria de trabalhar na 24H..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-colors resize-none bg-white"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anexar Currículo (PDF, DOC, DOCX - máx. 5MB)
              </label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-gold transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">
                    {formData.resume ? formData.resume.name : 'Clique aqui para selecionar seu currículo'}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>{submitText}</span>
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Seus dados serão tratados de forma confidencial e utilizados apenas para processos seletivos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationFormTrabalheConosco;