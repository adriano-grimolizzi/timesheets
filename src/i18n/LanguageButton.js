import i18next from "i18next"
import { useState } from "react"
import { useTranslation } from "react-i18next"

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

const LanguageButton = () => {
  const { i18n } = useTranslation()
  const startingLanguage = languages.find(language => language.value === i18next.language)
  const [selectedLanguage, setSelectedLanguage] = useState(startingLanguage)

  const handleChange = (event) => {
    const {value} = event.target
    const selectedLanguage = languages.find(language => language.value === value)
    setSelectedLanguage(selectedLanguage)
    i18n.changeLanguage(selectedLanguage.value)
  }

  return (
    <>
      <select value={selectedLanguage?.value} onChange={handleChange}>
        {
          languages.map((language) => (
            <option
              key={language.id}
              value={language.value}>
              {language.label}
            </option>
          ))
        }
      </select>
    </>
  )
}

export default LanguageButton
