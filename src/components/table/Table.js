import { useTranslation } from 'react-i18next'

import TodayIs from '../TodayIs'
import { exampleMonth, mapToTableRows } from './Table.utils'
import { getPreviousMonth } from '../../utils/date.utils'

import './Table.css'

const Table = () => {
  const { t } = useTranslation();

  const date = new Date()
  // const currentYear = date.getFullYear()
  // const currentMonth = date.getMonth() + 1
  // const currentDate = date.getDate()
  // const currentDay = date.getDay()

  // const firstDayOfTheMonth = new Date(Date.UTC(currentYear, currentMonth))

  // const previousMonth = getPreviousMonth(currentMonth)

  return (
    <>
      <TodayIs/>
      <table>
        <tbody>
          <tr>
            <th>{t('days.1')}</th>
            <th>{t('days.2')}</th>
            <th>{t('days.3')}</th>
            <th>{t('days.4')}</th>
            <th>{t('days.5')}</th>
            <th>{t('days.6')}</th>
            <th>{t('days.7')}</th>
          </tr>
          {mapToTableRows(exampleMonth.weeks)}
        </tbody>
      </table>
    </>
  )
}

export default Table
