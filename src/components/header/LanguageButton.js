import i18next from "i18next"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import { languages } from "../../i18n/languages"

const LanguageButton = () => {
  const { i18n } = useTranslation()
  const byStartingLanguage = language => language.value === i18next.language
  const startingLanguage = languages.find(byStartingLanguage)
  const [selectedLanguage, setSelectedLanguage] = useState(startingLanguage)

  const handleChange = (event) => {
    const { value } = event.target
    const byLanguage = (language) => language.value === value
    const selectedLanguage = languages.find(byLanguage)
    setSelectedLanguage(selectedLanguage)
    i18n.changeLanguage(selectedLanguage.value)
  }

  const mapLanguages = () =>
    languages.map((language) => (
      <option
        key={language.id}
        value={language.value}>
        {language.label}
      </option>
    ))

  return (
    <>
      <select
        value={selectedLanguage?.value}
        onChange={handleChange}>
        {mapLanguages()}
      </select>
    </>
  )
}

export default LanguageButton
