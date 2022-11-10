import { useTranslation } from 'react-i18next'

import { getMonthName, getDayName } from '../../utils/date.utils'

const TodayIs = ({ currentDay, currentMonth, currentYear }) => {
  const { t } = useTranslation();

  const dayName = t('days.' + getDayName(currentDay))
  const month = t('months.' + getMonthName(currentMonth))

  return (
    <p>{t('whatDayItIs', {
      dayName,
      dayNumber: currentDay,
      month,
      year: currentYear,
    })}</p>
  )
}

export default TodayIs
