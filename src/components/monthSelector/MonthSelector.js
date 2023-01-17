import { useTranslation } from 'react-i18next'
import {
  getNextMonth,
  getNextMonthYear,
  getPreviousMonth,
  getPreviousMonthYear,
} from '../../utils/date.utils'

import './MonthSelector.css'

const MonthSelector = ({ month, year, setMonth, setYear }) => {
  const { t } = useTranslation()

  const handlePrevious = () => {
    const previousMonth = getPreviousMonth(month)
    setMonth(previousMonth)
    setYear(getPreviousMonthYear(previousMonth, year))
  }

  const handleNext = () => {
    setMonth(getNextMonth(month))
    setYear(getNextMonthYear(month, year))
  }

  const currentMonth = t('months.' + month) + ' ' + year

  return (
    <div className='selector-container'>
      <p onClick={handlePrevious} className='arrow'>&lt;</p>
      <h2 className='current'>{currentMonth}</h2>
      <p onClick={handleNext} className='arrow'>&gt;</p>
    </div>
  )
}

export default MonthSelector
