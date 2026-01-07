
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-medical-500/5 rounded-full blur-3xl" />
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.contact.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: <MapPin />, title: t.contact.info.address, value: "Chagini Town, behind Dr. Mulugeta Specialist Clinic" },
              { icon: <Phone />, title: t.contact.info.phone, value: "+251 918 292 575" },
              { icon: <Mail />, title: t.contact.info.email, value: "mamesmart@gmail.com" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
              >
                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl text-medical-600 shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.contact.form.name}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-medical-500 outline-none transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.contact.form.phone}</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-medical-500 outline-none transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.contact.form.email}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-medical-500 outline-none transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.contact.form.message}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-medical-500 outline-none transition-all dark:text-white"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-medical-600 hover:bg-medical-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-medical-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t.contact.form.submit}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
