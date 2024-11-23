import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import it from './locales/it.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    it: { translation: it }
  },
  lng: 'it', // Lingua di default
  fallbackLng: 'en', // Lingua di fallback
  interpolation: { escapeValue: false }
});

export default i18n;
