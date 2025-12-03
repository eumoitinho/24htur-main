'use client'

import React from 'react';
import { Mail } from 'lucide-react';

const FooterCorporate = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Contact */}
          <div className="flex items-center gap-2 text-slate-600">
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            <span className="text-sm">Contato:</span>
            <a 
              href="mailto:contato@24h.tur.br" 
              className="text-sm font-medium text-brand-dark hover:text-brand-red transition-colors"
            >
              contato@24h.tur.br
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700 transition-colors">Política de Privacidade</a>
            <span aria-hidden="true">|</span>
            <a href="#" className="hover:text-slate-700 transition-colors">Termos de Uso</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {currentYear} 24H Escritório de Viagens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCorporate;
