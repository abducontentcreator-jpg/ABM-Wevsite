
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Users } from 'lucide-react';

const LeadershipCard: React.FC<{ member: any; idx: number }> = ({ member, idx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.2, duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[2rem] flex flex-col items-start relative group hover:border-medical-500/50 dark:hover:border-medical-900 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-medical-500/20 [perspective:1000px]"
    >
      {/* Background Hover Glow */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 bg-medical-500/5 dark:bg-medical-500/10 rounded-full blur-[50px] group-hover:bg-medical-500/10 dark:group-hover:bg-medical-500/20 transition-all pointer-events-none"
        style={{ transform: "translateZ(-20px)" }}
      />
      
      {/* 3D Floating Elements */}
      <div style={{ transform: "translateZ(40px)" }} className="relative">
         <div className="w-20 h-20 rounded-2xl bg-medical-50 dark:bg-medical-900/30 flex items-center justify-center text-medical-600 dark:text-medical-500 mb-8 border border-medical-100 dark:border-medical-500/20 shadow-inner">
            {idx === 0 ? <Briefcase size={32} /> : <Users size={32} />}
        </div>
      </div>
      
      <div style={{ transform: "translateZ(25px)" }} className="relative">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
        <p className="text-medical-600 dark:text-medical-500 font-medium text-sm mb-6 uppercase tracking-wider">{member.role}</p>
      </div>
      
      <div style={{ transform: "translateZ(15px)" }} className="relative w-full">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm border-t border-slate-100 dark:border-slate-800 pt-6 w-full">
            {member.desc}
        </p>
      </div>
    </motion.div>
  );
};

export const Leadership: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="leadership" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm"
          >
            {t.common.ourTeam}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.leadership.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto"
          >
            {t.leadership.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.leadership.team.map((member, idx) => (
                <LeadershipCard key={idx} member={member} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};
