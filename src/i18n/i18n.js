import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next'

import EN from './translations/en'
import IT from './translations/it'
import FR from './translations/fr'
import ES from './translations/es'
import JP from './translations/jp'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: EN, },
      it: { translations: IT, },
      fr: { translations: FR, },
      es: { translations: ES, },
      jp: { translations: JP, },
    },
    fallbackLng: "en",
    debug: false,

    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false,
    }
  })

export default i18n
