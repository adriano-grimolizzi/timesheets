import { useTranslation } from 'react-i18next'
import { getNextMonth, getNextMonthYear, getPreviousMonth, getPreviousMonthYear } from '../../utils/date.utils'

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

    return (
        <div className='selector'>
            <h3 onClick={handlePrevious} className='no-select'> &lt; </h3>
            <h2 className='current'>
                {t('months.' + month) + ' ' + year}
            </h2>
            <h3 onClick={handleNext} className='no-select'> &gt; </h3>
        </div>
    )
}

export default MonthSelector
