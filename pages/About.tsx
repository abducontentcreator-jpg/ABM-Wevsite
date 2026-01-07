
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Factory, Truck, Building2, Users, Check, Clock, HeadphonesIcon } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: <Factory size={24} />, title: "Manufacturers", sub: "Quality sources" },
    { icon: <Truck size={24} />, title: "ABM Distribution", sub: "Our warehouses", active: true },
    { icon: <Building2 size={24} />, title: "Healthcare", sub: "Your facilities" },
    { icon: <Users size={24} />, title: "Patients", sub: "Better outcomes" }
  ];

  const features = [
    {
        title: "Quality Assurance",
        desc: "Every product undergoes rigorous quality checks to meet international standards.",
        icon: <Check size={20} />
    },
    {
        title: "Reliable Delivery",
        desc: "Timely distribution network ensuring your supplies arrive when needed.",
        icon: <Clock size={20} />
    },
    {
        title: "Partner Support",
        desc: "Dedicated team providing personalized service and ongoing support.",
        icon: <HeadphonesIcon size={20} />
    }
  ];

  return (
    <section id="about" className="py-28 bg-slate-900 relative overflow-hidden">
      {/* Background glow for diagram */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-4 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold tracking-widest uppercase mb-6"
            >
                Our Mission
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
                The <span className="text-medical-500">Trusted Link</span> in the Healthcare Supply
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-slate-400 max-w-2xl mx-auto text-lg"
            >
                ABM Wholesale operates between the manufacturers of pharmaceuticals and the providers of health care, ensuring the availability of quality health care materials.
            </motion.p>
        </div>

        {/* Process Diagram */}
        <div className="relative max-w-5xl mx-auto mb-24 hidden md:block">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
            <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-slate-800 via-medical-500 to-slate-800 -translate-y-1/2 z-0" 
            />

            <div className="grid grid-cols-4 relative z-10">
                {steps.map((step, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-xl border-2 transition-all duration-300 ${step.active ? 'bg-medical-500 border-medical-400 text-white scale-110 shadow-medical-500/50' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                            {step.icon}
                        </div>
                        <h3 className={`text-lg font-bold mb-1 ${step.active ? 'text-white' : 'text-slate-300'}`}>{step.title}</h3>
                        <p className="text-sm text-slate-500">{step.sub}</p>
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
                    className="bg-slate-950/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors"
                >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                       {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        {feature.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
