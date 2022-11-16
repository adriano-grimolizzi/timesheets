import { useState } from 'react'

import { getFullCalendar } from './Table.utils'
import TableHeaders from './TableHeaders'
import MonthSelector from '../monthSelector/MonthSelector'

import './Table.css'

const Table = ({setDate, setShowModal}) => {

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
          {getFullCalendar(month, year, setDate, setShowModal)}
        </tbody>
      </table>
    </>
  )
}

export default Table
