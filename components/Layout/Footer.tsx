import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Activity, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-medical-500 rounded-lg text-white">
                <Activity size={20} />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">ABM</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {t.footer.credibility}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.nav.services}</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>{t.services.items.pharma.title}</li>
              <li>{t.services.items.equipment.title}</li>
              <li>{t.services.items.lab.title}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.nav.about}</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>{t.about.mission.title}</li>
              <li>{t.about.vision.title}</li>
              <li>{t.leadership.title}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.contact.title}</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-medical-500 shrink-0" />
                <span>{t.contact.info.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-medical-500 shrink-0" />
                <span>+251 918 292 575</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-medical-500 shrink-0" />
                <span>{t.contact.info.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} ABM Wholesale. {t.footer.rights}
          </p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800" />
             <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800" />
             <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>
    </footer>
  );
};