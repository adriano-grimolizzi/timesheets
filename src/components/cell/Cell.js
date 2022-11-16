import { equals } from '../../utils/date.utils'

import './Cell.css'

const Cell = ({ date }) => {
  const today = new Date()

  const isToday = () => equals(date, today) ? 'today' : ''

  return (
    <div className={`${isToday()} ${date.status}`}>
      {date.dayOfMonth}
    </div>
  )
}

export default Cell
