import { useTranslation } from 'react-i18next'

const TodayIs = ({ date = new Date() }) => {
  const { t } = useTranslation();

  return (
    <p>{t('todayIsMessage', {
      dayOfWeek: t('days.' + date.getDay()),
      dayOfMonth: date.getDate(),
      month: t('months.' + date.getMonth()),
      year: date.getFullYear(),
    })}</p>
  )
}

export default TodayIs
