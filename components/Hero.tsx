import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ShieldCheck, Truck, Box, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatVariants: Variants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    floatDelayed: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        delay: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 bg-slate-950">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md">
            <ShieldCheck size={16} className="text-medical-500" />
            <span>Trusted Pharmaceutical Partner</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 tracking-tight">
            Reliable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-500 to-indigo-400">Pharmaceutical</span> and <br />
            Medical Supply <br />
            Partner
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed border-l-4 border-medical-500 pl-6">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-medical-600 hover:bg-medical-500 text-white rounded-lg font-bold text-lg transition-all flex items-center gap-2"
            >
              {t.hero.cta} <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-lg font-bold text-lg hover:bg-slate-800 transition-all"
            >
              {t.nav.services}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-8">
            {[
                { val: "500+", label: "Products" },
                { val: "100+", label: "Partners" },
                { val: "10+", label: "Years" }
            ].map((stat, idx) => (
                <div key={idx}>
                    <h4 className="text-3xl font-bold text-white mb-1">{stat.val}</h4>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Dashboard Visuals */}
        <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[2000px]">
          {/* Main Container Outline */}
          <motion.div 
             initial={{ opacity: 0, rotateY: 15, rotateX: 5 }}
             animate={{ opacity: 1, rotateY: 10, rotateX: 5 }}
             transition={{ duration: 1 }}
             className="absolute inset-0 border border-slate-800/50 bg-slate-900/20 rounded-3xl backdrop-blur-sm -z-10 transform-gpu"
          />

          {/* Floating Card 1: Fast Delivery */}
          <motion.div
            variants={floatVariants}
            animate="float"
            className="absolute top-[20%] left-[10%] w-64 p-6 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-black/50 z-20 group hover:border-medical-500/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                <Truck size={24} />
            </div>
            <h3 className="text-white font-bold text-lg">Fast Delivery</h3>
            <div className="mt-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-indigo-500" 
                />
            </div>
          </motion.div>

          {/* Floating Card 2: Quality Products */}
          <motion.div
            variants={floatVariants}
            animate="floatDelayed"
            className="absolute top-[30%] right-[5%] w-64 p-6 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-black/50 z-10 group hover:border-medical-500/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-medical-500/10 flex items-center justify-center text-medical-400 mb-4 group-hover:scale-110 transition-transform">
                <Box size={24} />
            </div>
            <h3 className="text-white font-bold text-lg">Quality Products</h3>
            <div className="flex gap-2 mt-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-500 font-medium">In Stock</span>
            </div>
          </motion.div>

          {/* Floating Card 3: Certified */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[25%] left-[20%] w-56 p-5 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-black/50 z-30 group hover:border-medical-500/50 transition-colors"
          >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <h3 className="text-white font-bold">Certified</h3>
                    <p className="text-xs text-slate-400">ISO 9001:2015</p>
                </div>
             </div>
          </motion.div>

           {/* Floating Card 4: Reliable */}
           <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] right-[15%] w-60 p-5 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-black/50 z-20 group hover:border-medical-500/50 transition-colors"
          >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-medical-500/10 flex items-center justify-center text-medical-400">
                    <CheckCircle size={20} />
                </div>
                <div>
                    <h3 className="text-white font-bold">Reliable Supply</h3>
                    <p className="text-xs text-slate-400">99.9% Uptime</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};