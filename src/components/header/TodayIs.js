import { useTranslation } from "react-i18next"

const TodayIs = ({ date = new Date() }) => {
  const { t } = useTranslation()

  const todayIsMessage = t("todayIsMessage", {
    dayOfWeek: t("days." + date.getDay()),
    dayOfMonth: date.getDate(),
    month: t("months." + date.getMonth()),
    monthNumber: date.getMonth(),
    year: date.getFullYear(),
  })

  return (
    <p className='today-is'>{todayIsMessage}</p>
  )
}

export default TodayIs
