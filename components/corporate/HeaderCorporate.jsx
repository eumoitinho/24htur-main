'use client'

import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const HeaderCorporate = () => {
  return (
    <motion.header
      className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200/70"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center h-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/selo-vermelho.png"
              alt="24H Escritório de Viagens"
              className="h-full w-auto"
            />
          </motion.a>

          {/* CTA Button */}
          <motion.a
            href="tel:(51) 3516-0098"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:opacity-95 bg-brand-gold shadow-md hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            <span className="text-sm font-semibold">(51) 3516-0098</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderCorporate;
