import { useTranslation } from "react-i18next"

const LanguageButton = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("it")}>Italiano</button>
    </>
  )
}

export default LanguageButton
