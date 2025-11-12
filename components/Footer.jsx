'use client'

import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { getSiteSettings } from '../utils/lib/sanity';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [siteSettings, setSiteSettings] = useState(null);

  // Fallback data caso o Sanity não esteja disponível
  const fallbackMenuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#self-booking', label: 'Self Booking' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  const fallbackSocialLinks = [
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/24hescritoriodeviagens',
      label: 'Instagram'
    },
    {
      platform: 'facebook',
      url: 'http://www.facebook.com/24HEscritoriodeViagens',
      label: 'Facebook'
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/company/24hescritoriodeviagens',
      label: 'LinkedIn'
    }
  ];

  const fallbackCopyrightText = '24H Escritório de Viagens. Todos os direitos reservados.';
  const fallbackPrivacyLink = { label: 'Privacidade', href: '#contato' };
  const fallbackTermsLink = { label: 'Termos', href: '#contato' };

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await getSiteSettings();
        setSiteSettings(settings);
      } catch (error) {
        console.warn('Usando dados fallback para o Footer:', error);
      }
    };

    loadSettings();
  }, []);

  // Usa dados do Sanity ou fallback
  const menuItems = siteSettings?.footerNavigation?.menuItems || fallbackMenuItems;
  const socialLinks = siteSettings?.footerNavigation?.socialLinks || fallbackSocialLinks;
  const copyrightText = siteSettings?.footerNavigation?.copyrightText || fallbackCopyrightText;
  const privacyLink = siteSettings?.footerNavigation?.privacyLink || fallbackPrivacyLink;
  const termsLink = siteSettings?.footerNavigation?.termsLink || fallbackTermsLink;

  // Função para mapear platform para ícone
  const getIconForPlatform = (platform) => {
    const icons = {
      instagram: Instagram,
      facebook: Facebook,
      linkedin: Linkedin,
    };
    return icons[platform] || Instagram;
  };

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
              const Icon = getIconForPlatform(social.platform);
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
            © {currentYear} {copyrightText}
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <a href={privacyLink.href} className="hover:text-slate-700">{privacyLink.label}</a>
            <span aria-hidden="true">•</span>
            <a href={termsLink.href} className="hover:text-slate-700">{termsLink.label}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;