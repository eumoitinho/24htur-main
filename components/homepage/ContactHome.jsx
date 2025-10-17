'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactHome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Precisa de ajuda para organizar sua viagem?
          </h2>
          <p className="text-lg text-slate-600">
            Preencha o formulário e nossa equipe especializada entrará em contato com você em breve.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-[15px] font-semibold text-brand-dark shadow-sm hover:shadow-xl transition-all duration-300"
            >
              Enviar mensagem
              <Send className="ml-2 h-5 w-5" strokeWidth={2} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHome;