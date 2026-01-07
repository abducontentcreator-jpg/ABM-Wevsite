import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Leadership } from '../components/Leadership';
import { About } from './About';
import { Contact } from './Contact';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <About />
      <Services />
      <Leadership />
      <Contact />
    </motion.div>
  );
};