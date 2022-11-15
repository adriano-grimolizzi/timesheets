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
