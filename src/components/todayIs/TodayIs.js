import { useTranslation } from 'react-i18next'

import './TodayIs.css'

const TodayIs = ({ date = new Date() }) => {
  const { t } = useTranslation();

  return (
    <p>{t('todayIsMessage', {
      dayOfWeek: t('days.' + date.getDay()),
      dayOfMonth: date.getDate(),
      month: t('months.' + date.getMonth()),
      monthNumber: date.getMonth(),
      year: date.getFullYear(),
    })}</p>
  )
}

export default TodayIs
