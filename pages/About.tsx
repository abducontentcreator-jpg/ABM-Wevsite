
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Factory, Truck, Building2, Users, Check, Clock, HeadphonesIcon } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: <Factory size={24} />, title: t.about.process.manufacturers.title, sub: t.about.process.manufacturers.sub },
    { icon: <Truck size={24} />, title: t.about.process.distribution.title, sub: t.about.process.distribution.sub, active: true },
    { icon: <Building2 size={24} />, title: t.about.process.healthcare.title, sub: t.about.process.healthcare.sub },
    { icon: <Users size={24} />, title: t.about.process.patients.title, sub: t.about.process.patients.sub }
  ];

  const features = [
    {
        title: t.about.features.quality.title,
        desc: t.about.features.quality.desc,
        icon: <Check size={20} />
    },
    {
        title: t.about.features.delivery.title,
        desc: t.about.features.delivery.desc,
        icon: <Clock size={20} />
    },
    {
        title: t.about.features.support.title,
        desc: t.about.features.support.desc,
        icon: <HeadphonesIcon size={20} />
    }
  ];

  return (
    <section id="about" className="py-28 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background glow for diagram */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-100/50 dark:bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-4 py-1 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
            >
                {t.common.ourMission}
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
                The <span className="text-medical-600 dark:text-medical-500">Trusted Link</span> in the Healthcare Supply
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
            >
                {t.about.desc}
            </motion.p>
        </div>

        {/* Process Diagram */}
        <div className="relative max-w-5xl mx-auto mb-24 hidden md:block">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
            <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-slate-200 via-medical-500 to-slate-200 dark:from-slate-800 dark:via-medical-500 dark:to-slate-800 -translate-y-1/2 z-0" 
            />

            <div className="grid grid-cols-4 relative z-10">
                {steps.map((step, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="flex flex-col items-center text-center group cursor-default"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-xl border-2 transition-all duration-500 overflow-hidden
                            ${step.active 
                                ? 'bg-medical-500 border-medical-400 text-white scale-110 shadow-medical-500/50' 
                                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-400 group-hover:border-medical-500/50 group-hover:shadow-medical-500/30'}`}
                        >
                            {/* Dynamic Background Overlay for non-active items */}
                            {!step.active && (
                                <div className="absolute inset-0 bg-gradient-to-br from-medical-600 to-medical-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                            )}
                            
                             {/* Active Pulse/Shine */}
                             {step.active && (
                                <div className="absolute inset-0 bg-white/10 animate-pulse" />
                            )}

                            {/* Icon */}
                            <div className={`relative z-10 transition-colors duration-300 ${!step.active ? 'group-hover:text-white' : ''}`}>
                                {step.icon}
                            </div>
                        </motion.div>
                        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${step.active ? 'text-medical-600 dark:text-white' : 'text-slate-600 dark:text-slate-300 group-hover:text-medical-600 dark:group-hover:text-white'}`}>{step.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-500 transition-colors duration-300 group-hover:text-slate-400">{step.sub}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.2) }}
                    whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }}
                    className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl transition-colors duration-300 shadow-md dark:shadow-none"
                >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                       <span className="p-2 rounded-lg bg-medical-500/10 text-medical-600 dark:text-medical-500">{feature.icon}</span>
                       {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {feature.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
