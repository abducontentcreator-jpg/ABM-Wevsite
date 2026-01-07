
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Pill, FlaskConical, Microscope, TestTube, BriefcaseMedical } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Pill': <Pill size={28} />,
  'FlaskConical': <FlaskConical size={28} />,
  'Microscope': <Microscope size={28} />,
  'TestTube': <TestTube size={28} />,
  'BriefcaseMedical': <BriefcaseMedical size={28} />,
};

export const ProductsSupplies: React.FC = () => {
  const { t } = useLanguage();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="products" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.productsSupplies.title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-medical-500 mx-auto rounded-full mb-6" 
          />
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {t.productsSupplies.subtitle}
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {t.productsSupplies.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:shadow-medical-500/20 transition-all duration-300 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-medical-600 dark:text-medical-400 mb-5 group-hover:bg-gradient-to-br group-hover:from-medical-500 group-hover:to-medical-600 group-hover:text-white group-hover:shadow-medical-500/50 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-medical-500/20 transition-all duration-500 ease-out"
              >
                {iconMap[item.icon]}
              </motion.div>
              
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 leading-tight">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-6 py-2 rounded-full bg-medical-50 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400 text-sm font-medium border border-medical-200 dark:border-medical-800"
            >
                {t.productsSupplies.badge}
            </motion.div>
        </div>
      </div>
    </section>
  );
};
