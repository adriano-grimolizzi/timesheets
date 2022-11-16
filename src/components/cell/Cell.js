import { equals } from '../../utils/date.utils'

import './Cell.css'

const Cell = ({ date, setDate, setShowModal }) => {
  
  const today = new Date()

  const isToday = () => equals(date, today) ? 'today' : ''

  const handleClick = () => {
    setShowModal(true)
    setDate(date)
  }

  return (
    <div 
      className={`container ${isToday()} ${date.status}`}
      onClick={handleClick}>
      {date.dayOfMonth}
    </div>
  )
}

export default Cell
