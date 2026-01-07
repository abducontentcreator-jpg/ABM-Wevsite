
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ShieldCheck, Truck, Box, CheckCircle } from 'lucide-react';

const Capsule = ({ className, delay = 0, style }: { className?: string; delay?: number; style?: any }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
    transition={{
      opacity: { duration: 1 },
      y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay }
    }}
    style={style}
    className={`absolute rounded-full shadow-lg backdrop-blur-sm border border-white/10 z-0 ${className}`}
  >
    {/* Internal Shine/Volume effect */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />
    <div className="absolute top-[10%] left-[5%] right-[5%] h-[40%] bg-gradient-to-b from-white/20 to-transparent rounded-full blur-[2px]" />
  </motion.div>
);

const NodeConnection = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" className="fill-slate-400 dark:fill-slate-600" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Animated Connecting Lines */}
        <motion.path 
            d="M100,100 Q400,200 600,100 T1000,150"
            fill="none" 
            stroke="rgba(59, 130, 246, 0.4)" 
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
         <motion.path 
            d="M-100,400 Q200,300 500,500 T1200,400"
            fill="none" 
            stroke="rgba(99, 102, 241, 0.3)" 
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
    </svg>
)

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  // Mouse Interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  // Smooth Physics for Mouse Tilt
  const springConfig = { stiffness: 100, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  // Mouse Parallax for Objects
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);

  // Scroll Parallax
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const yContent = useTransform(scrollY, [0, 1000], [0, -50]);

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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
        id="home" 
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 bg-slate-50 dark:bg-slate-950 perspective-[2000px] transition-colors duration-300"
    >
      {/* Dynamic Background Layer (Parallax + Nodes) */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 dark:opacity-20 pointer-events-none" />
          <NodeConnection />
          {/* Ambient Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      </motion.div>

      {/* Floating Capsules Layer (Mouse Reactive) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <Capsule 
            className="top-[15%] left-[8%] w-24 h-10 bg-blue-500/20 rotate-12" 
            delay={0}
            style={{ x: useTransform(moveX, x => x * -1.2), y: useTransform(moveY, y => y * -1.2) }} 
          />
          <Capsule 
            className="bottom-[25%] right-[5%] w-32 h-12 bg-indigo-500/20 -rotate-12" 
            delay={1.5}
            style={{ x: useTransform(moveX, x => x * 1.5), y: useTransform(moveY, y => y * 1.5) }} 
          />
          <Capsule 
            className="top-[45%] right-[40%] w-16 h-6 bg-teal-500/10 blur-[1px]" 
            delay={0.5}
            style={{ x: useTransform(moveX, x => x * -0.5), y: useTransform(moveY, y => y * -0.5) }} 
          />
          <Capsule 
            className="bottom-[10%] left-[20%] w-20 h-8 bg-medical-500/10 blur-[2px]" 
            delay={2}
            style={{ x: useTransform(moveX, x => x * 0.8), y: useTransform(moveY, y => y * 0.8) }} 
          />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: yContent, rotateX: useTransform(rotateX, r => r * 0.2), rotateY: useTransform(rotateY, r => r * 0.2) }}
          className="max-w-3xl transform-gpu preserve-3d"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium mb-8 backdrop-blur-md hover:border-medical-500/50 transition-colors shadow-sm">
            <ShieldCheck size={16} className="text-medical-600 dark:text-medical-500" />
            <span>{t.common.trustedPartner}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-sm dark:drop-shadow-2xl">
            {t.hero.title}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed border-l-4 border-medical-500 pl-6 bg-gradient-to-r from-slate-100/80 dark:from-slate-900/50 to-transparent py-2">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-medical-600 hover:bg-medical-500 text-white rounded-xl font-bold text-lg transition-all flex items-center gap-2 shadow-lg shadow-medical-600/20"
            >
              {t.hero.cta} <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
            >
              {t.nav.services}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 border-t border-slate-200 dark:border-slate-800/50 pt-8 backdrop-blur-sm rounded-xl p-4 bg-white/40 dark:bg-slate-900/20 shadow-sm dark:shadow-none">
            {[
                { val: "500+", label: t.hero.stats.products },
                { val: "100+", label: t.hero.stats.partners },
                { val: "10+", label: t.hero.stats.years }
            ].map((stat, idx) => (
                <div key={idx}>
                    <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.val}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Dashboard Visuals (Tilt Reactive) */}
        <motion.div 
            style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d" 
            }}
            className="relative h-[600px] w-full hidden lg:flex items-center justify-center"
        >
          {/* Main Glass Panel */}
          <motion.div 
             initial={{ opacity: 0, rotateY: 15, rotateX: 5 }}
             animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
             transition={{ duration: 1 }}
             style={{ translateZ: "0px" }}
             className="absolute inset-0 border border-slate-200/50 dark:border-slate-700/50 bg-white/40 dark:bg-slate-900/40 rounded-3xl backdrop-blur-xl shadow-2xl"
          >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/5 to-transparent rounded-3xl pointer-events-none" />
              {/* Fake UI Lines */}
              <div className="absolute top-8 left-8 right-8 h-px bg-slate-300/50 dark:bg-slate-700/50" />
              <div className="absolute top-8 left-20 bottom-8 w-px bg-slate-300/50 dark:bg-slate-700/50" />
          </motion.div>

          {/* Floating Card 1: Fast Delivery */}
          <motion.div
            style={{ translateZ: "60px" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[5%] w-64 p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-600/50 backdrop-blur-md shadow-2xl shadow-slate-200/50 dark:shadow-black/50 group hover:border-medical-500 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                <Truck size={24} />
            </div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg">{t.hero.cards.fastDelivery}</h3>
            {/* Dashed Connector */}
            <svg className="absolute top-1/2 right-[-50px] w-[50px] h-[2px] overflow-visible opacity-50">
                <line x1="0" y1="0" x2="50" y2="0" stroke="currentColor" className="text-slate-400" strokeDasharray="4 4" />
                <circle cx="50" cy="0" r="3" fill="currentColor" className="text-slate-400" />
            </svg>
          </motion.div>

          {/* Floating Card 2: Quality Products */}
          <motion.div
            style={{ translateZ: "80px" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[35%] right-[-5%] w-64 p-6 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-600/50 backdrop-blur-md shadow-2xl shadow-slate-200/50 dark:shadow-black/50 group hover:border-medical-500 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-medical-500/10 dark:bg-medical-500/20 flex items-center justify-center text-medical-600 dark:text-medical-400 mb-4 group-hover:scale-110 transition-transform">
                <Box size={24} />
            </div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg">{t.hero.cards.qualityProducts}</h3>
            <div className="flex gap-2 mt-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-xs text-green-600 dark:text-green-500 font-medium">{t.hero.cards.inStock}</span>
            </div>
          </motion.div>

          {/* Floating Card 3: Certified */}
          <motion.div
            style={{ translateZ: "40px" }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[15%] w-56 p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-600/50 backdrop-blur-md shadow-2xl shadow-slate-200/50 dark:shadow-black/50 group hover:border-medical-500 transition-colors"
          >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <h3 className="text-slate-900 dark:text-white font-bold">{t.hero.cards.certified}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">ISO 9001:2015</p>
                </div>
             </div>
          </motion.div>

           {/* Floating Card 4: Reliable */}
           <motion.div
            style={{ translateZ: "50px" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[10%] w-60 p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-600/50 backdrop-blur-md shadow-2xl shadow-slate-200/50 dark:shadow-black/50 group hover:border-medical-500 transition-colors"
          >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-medical-500/10 dark:bg-medical-500/20 flex items-center justify-center text-medical-600 dark:text-medical-400">
                    <CheckCircle size={20} />
                </div>
                <div>
                    <h3 className="text-slate-900 dark:text-white font-bold">{t.hero.cards.reliable}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.hero.cards.uptime}</p>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
