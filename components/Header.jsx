'use client'

import React, { useState } from 'react';
import { Menu, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#self-booking', label: 'Self Booking' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <motion.header
      className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200/70"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-dark hover:text-brand-red transition-colors py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex">
            <motion.a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:opacity-95 bg-brand-red shadow-md hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-semibold">Solicitar Proposta</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100"
          >
            <Menu className="h-5 w-5 text-slate-700" strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:bg-brand-beige"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-brand-red hover:opacity-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Proposta
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;