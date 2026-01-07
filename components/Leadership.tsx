import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Users } from 'lucide-react';

export const Leadership: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="leadership" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            Our Team
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Meet Our <span className="text-medical-500">Leadership</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-lg mx-auto"
          >
            {t.leadership.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.leadership.team.map((member, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="bg-slate-900 border border-slate-800 p-10 rounded-[2rem] flex flex-col items-start relative overflow-hidden group hover:border-medical-900 transition-colors"
                >
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-medical-500/10 rounded-full blur-[50px] group-hover:bg-medical-500/20 transition-all" />

                    <div className="w-20 h-20 rounded-2xl bg-medical-900/30 flex items-center justify-center text-medical-500 mb-8 border border-medical-500/20">
                        {idx === 0 ? <Briefcase size={32} /> : <Users size={32} />}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-medical-500 font-medium text-sm mb-6 uppercase tracking-wider">{member.role}</p>
                    
                    <p className="text-slate-400 leading-relaxed text-sm border-t border-slate-800 pt-6 w-full">
                        {member.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};