import { getMonthName, getDayName, getPreviousMonth } from '../../utils/date.utils'
import { exampleMonth, mapToTableRows } from './Table.utils'

import './Table.css'

const Table = () => {

  const date = new Date()
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth() + 1
  const currentDate = date.getDate()
  const currentDay = date.getDay()

  const firstDayOfTheMonth = new Date(Date.UTC(currentYear, currentMonth))

  const previousMonth = getPreviousMonth(currentMonth)

  const result = exampleMonth.weeks

  return (
    <>
      <pre>Today is {getDayName(currentDay)} {currentDate}, {getMonthName(currentMonth)} ({currentMonth}) {currentYear}.</pre>

      <pre>Day of the week: {JSON.stringify(firstDayOfTheMonth.getDay())}</pre>
      <pre>previous: {previousMonth} {getMonthName(previousMonth)}</pre>

      <table>
        <tbody>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
          {mapToTableRows(exampleMonth.weeks)}
        </tbody>
      </table>
    </>
  )
}

export default Table
