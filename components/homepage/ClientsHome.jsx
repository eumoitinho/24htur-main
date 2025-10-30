'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useHomepage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ClientsHome = () => {
  const { data: homepageData } = useHomepage();

  const clientsData = homepageData?.clients || null;

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-8">
            {portableTextToPlain(clientsData?.title) || 'NOSSOS CLIENTES'}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-12 text-center"
          >
            <p className="text-slate-600 text-lg">
              {portableTextToPlain(clientsData?.placeholder) || '(Aguardando envio pela cliente)'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsHome;