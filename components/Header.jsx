'use client'

import React, { useState } from 'react';
import { Menu, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Início' },
    {
      href: '#',
      label: 'Serviços',
      hasDropdown: true,
      dropdownItems: [
        { href: '/lazer', label: 'Viagens de Lazer' },
        { href: '/eventos', label: 'Eventos Corporativos' },
        { href: '/corporate', label: 'Viagens Corporativas' }
      ]
    },
    { href: '/sobre', label: 'Sobre' },
    { href: '/equipe', label: 'Equipe' },
    { href: '/eventos-info', label: 'Eventos' },
    { href: '/opcoes-viagem', label: 'Opções de Viagem' },
    { href: '/trabalhe-conosco', label: 'Trabalhe Conosco' },
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
              <div key={item.href || index} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <motion.button
                      className="flex items-center space-x-1 text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-dark hover:text-brand-gold transition-colors py-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>

                    {servicesDropdownOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-brand-dark hover:bg-brand-beige hover:text-brand-gold transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-dark hover:text-brand-gold transition-colors py-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex">
            <motion.a
              href="tel:(51) 3516-0098"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white transition-all hover:opacity-95 bg-brand-gold shadow-md hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              <span className="text-sm font-semibold">(51) 3516-0098</span>
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
                <div key={item.href || item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="px-3 py-2 text-base font-medium text-brand-dark border-b border-gray-200">
                        {item.label}
                      </div>
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-6 py-2 text-sm text-brand-dark hover:bg-brand-beige"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:bg-brand-beige"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="tel:(51) 3516-0098"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-brand-gold hover:opacity-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(51) 3516-0098</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;