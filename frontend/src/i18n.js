import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import gr from './locales/gr.json';
import bg from './locales/bg.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    gr: { translation: gr },
    bg: { translation: bg }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
