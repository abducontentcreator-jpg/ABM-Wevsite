
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Factory, Truck, Building2, Users, Check, Clock, HeadphonesIcon, Target, Eye, Activity, Shield, Award } from 'lucide-react';

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
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-100/50 dark:bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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
                The <span className="text-medical-600 dark:text-medical-500">Trusted Link</span> in Healthcare
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed"
            >
                {t.about.desc}
            </motion.p>
        </div>

        {/* Company Overview & Activities */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-8 rounded-3xl"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                        <Building2 size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.about.overview.title}</h3>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t.about.overview.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-8 rounded-3xl"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <Activity size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.about.activities.title}</h3>
                </div>
                <ul className="space-y-4 mb-6">
                    {t.about.activities.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <Check size={20} className="text-medical-500 mt-1 shrink-0" />
                            <span className="text-slate-700 dark:text-slate-200">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 rounded-xl">
                    <p className="text-sm text-yellow-800 dark:text-yellow-500 font-medium flex gap-2">
                        <Shield size={16} className="shrink-0 mt-0.5" />
                        {t.about.activities.note}
                    </p>
                </div>
            </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.about.values.title}</h3>
                <div className="h-1 w-20 bg-medical-500 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.about.values.items.map((value, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-medical-50 dark:bg-medical-900/30 rounded-full text-medical-600 dark:text-medical-400 shrink-0">
                                <Award size={20} />
                            </div>
                            <p className="font-medium text-slate-800 dark:text-slate-200">{value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
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
