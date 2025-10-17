'use client'

import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#self-booking', label: 'Self Booking' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  const socialLinks = [
    { 
      href: 'https://www.instagram.com/24hescritoriodeviagens', 
      icon: Instagram, 
      label: 'Instagram' 
    },
    { 
      href: 'http://www.facebook.com/24HEscritoriodeViagens', 
      icon: Facebook, 
      label: 'Facebook' 
    },
    { 
      href: 'https://www.linkedin.com/company/24hescritoriodeviagens', 
      icon: Linkedin, 
      label: 'LinkedIn' 
    }
  ];

  return (
    <footer className="border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center">
            <Logo className="h-8" />
          </div>
          
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <div
                  key={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-400 cursor-default"
                  aria-label={social.label}
                  title="Entre em contato para mais informações"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} 24H Escritório de Viagens. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <a href="#contato" className="hover:text-slate-700">Privacidade</a>
            <span aria-hidden="true">•</span>
            <a href="#contato" className="hover:text-slate-700">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;