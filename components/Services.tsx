
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Pill, Stethoscope, Microscope, HeartPulse, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'pharma',
      icon: <Pill size={28} />,
      title: t.services.items.pharma.title,
      desc: t.services.items.pharma.desc,
      tags: t.services.items.pharma.tags,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50",
      progress: 96
    },
    {
      id: 'medicines', // Was compliance/medicines
      icon: <HeartPulse size={28} />,
      title: t.services.items.compliance.title,
      desc: t.services.items.compliance.desc,
      tags: t.services.items.compliance.tags,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "hover:border-indigo-500/50",
      progress: 94
    },
    {
      id: 'lab',
      icon: <Microscope size={28} />,
      title: t.services.items.lab.title,
      desc: t.services.items.lab.desc,
      tags: t.services.items.lab.tags,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "hover:border-cyan-500/50",
      progress: 88
    },
    {
      id: 'gear', // Was equipment
      icon: <Stethoscope size={28} />,
      title: t.services.items.equipment.title,
      desc: t.services.items.equipment.desc,
      tags: t.services.items.equipment.tags,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "hover:border-teal-500/50",
      progress: 92
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-700 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            {t.common.whatWeOffer}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 text-lg"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 transition-all duration-300 group ${service.border} hover:shadow-2xl hover:shadow-blue-900/20`}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110 duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed h-16">
                {service.desc}
              </p>

              {/* Decorative Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800/80 rounded-full mb-8 overflow-hidden relative">
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${service.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.4 + (index * 0.1), ease: "circOut" }}
                    className={`h-full rounded-full ${service.color.replace('text-', 'bg-')} relative shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                 >
                     <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/50 blur-[1px]" />
                 </motion.div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700">
                        {tag}
                    </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-medical-500 cursor-pointer group-hover:text-medical-400">
                <span>{t.common.learnMore}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
