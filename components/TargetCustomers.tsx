import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Store, Building2, HeartPulse, ShoppingBag, Stethoscope } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Store': <Store size={32} />,
  'Building2': <Building2 size={32} />,
  'HeartPulse': <HeartPulse size={32} />,
  'ShoppingBag': <ShoppingBag size={32} />,
  'Stethoscope': <Stethoscope size={32} />,
};

export const TargetCustomers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="customers" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-medical-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.targetCustomers.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            {t.targetCustomers.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {t.targetCustomers.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 w-full md:w-64 flex flex-col items-center text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-medical-500 mb-6 group-hover:bg-medical-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                {iconMap[item.icon]}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">
                {item.name}
              </h3>

              {/* Decorative line */}
              <div className="mt-4 w-8 h-1 bg-slate-200 dark:bg-slate-700 rounded-full group-hover:w-16 group-hover:bg-medical-500 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
