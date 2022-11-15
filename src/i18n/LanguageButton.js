import { useTranslation } from "react-i18next"

const LanguageButton = () => {
  const { i18n } = useTranslation()

  const languages = [
    {
      id: 'en',
      label: 'English',
    },
    {
      id: 'it',
      label: 'Italiano',
    },
  ]

  return (
    <>
      {
        languages.map((language, index) => (
          <button
            key={index}
            onClick={() => i18n.changeLanguage(language.id)}>
            {language.label}
          </button>
        ))
      }
    </>
  )
}

export default LanguageButton
