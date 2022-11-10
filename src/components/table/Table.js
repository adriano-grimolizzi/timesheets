import { useTranslation } from 'react-i18next'

import TodayIs from './TodayIs'
import { exampleMonth, mapToTableRows } from './Table.utils'
import { getPreviousMonth } from '../../utils/date.utils'

import './Table.css'

const Table = () => {
  const { t } = useTranslation();

  const date = new Date()
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth() + 1
  const currentDate = date.getDate()
  const currentDay = date.getDay()

  const firstDayOfTheMonth = new Date(Date.UTC(currentYear, currentMonth))

  const previousMonth = getPreviousMonth(currentMonth)

  return (
    <>
      <TodayIs currentDay={currentDay} currentMonth={currentMonth} currentYear={currentYear} />
      <table>
        <tbody>
          <tr>
            <th>{t('days.monday')}</th>
            <th>{t('days.tuesday')}</th>
            <th>{t('days.wednesday')}</th>
            <th>{t('days.thursday')}</th>
            <th>{t('days.friday')}</th>
            <th>{t('days.saturday')}</th>
            <th>{t('days.sunday')}</th>
          </tr>
          {mapToTableRows(exampleMonth.weeks)}
        </tbody>
      </table>
    </>
  )
}

export default Table
