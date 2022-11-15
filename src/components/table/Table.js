import { useState } from 'react'

import { getFullCalendar } from './Table.utils'
import MonthSelector from './MonthSelector'

import './Table.css'
import TableHeaders from './TableHeaders'

const Table = () => {

  const date = new Date()
  const startingMonth = date.getMonth()
  const startingYear = date.getFullYear()

  const [month, setMonth] = useState(startingMonth)
  const [year, setYear] = useState(startingYear)

  return (
    <>
      <MonthSelector month={month} year={year} setMonth={setMonth} setYear={setYear} />
      <table>
        <tbody>
          <TableHeaders />
          {getFullCalendar(month, year)}
        </tbody>
      </table>
    </>
  )
}

export default Table
