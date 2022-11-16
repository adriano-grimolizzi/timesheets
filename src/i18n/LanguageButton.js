import { useTranslation } from "react-i18next"

const LanguageButton = () => {
  const { i18n } = useTranslation()

  const languages = [
    {
      id: '01',
      value: 'en',
      label: 'English',
    },
    {
      id: '02',
      value: 'it',
      label: 'Italiano',
    },
    {
      id: '03',
      value: 'fr',
      label: 'Français',
    },
    {
      id: '04',
      value: 'es',
      label: 'Español',
    },
    {
      id: '05',
      value: 'jp',
      label: '日本語',
    },
  ]

  return (
    <>
      {
        languages.map((language) => (
          <button
            key={language.id}
            onClick={() => i18n.changeLanguage(language.value)}>
            {language.label}
          </button>
        ))
      }
    </>
  )
}

export default LanguageButton
