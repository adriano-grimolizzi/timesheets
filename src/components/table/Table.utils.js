// import { getPreviousMonth } from "../../utils/date.utils"

import { getArrayFromRange } from "../../utils/array.utils";

export const mapToTableRows = month => month.map((week, index) => (
  <tr key={index}>{week.map(({ date }) => (
    <td key={date}>{date}</td>
  ))}
  </tr>
))

export const exampleMonth = {
  month: 11,
  weeks: [[
    {
      dayOfWeek: 1,
      date: 31,
      pcn: 'previous'
    },
    {
      dayOfWeek: 2,
      date: 1,
      pcn: 'current'
    },
    {
      dayOfWeek: 3,
      date: 2,
      pcn: 'current'
    },
    {
      dayOfWeek: 4,
      date: 3,
      pcn: 'current'
    },
    {
      dayOfWeek: 5,
      date: 4,
      pcn: 'current'
    },
    {
      dayOfWeek: 6,
      date: 5,
      pcn: 'current'
    },
    {
      dayOfWeek: 7,
      date: 6,
      pcn: 'current'
    },
  ],
  [
    {
      dayOfWeek: 1,
      date: 7,
      pcn: 'current'
    },
    {
      dayOfWeek: 2,
      date: 8,
      pcn: 'current'
    },
    {
      dayOfWeek: 3,
      date: 9,
      pcn: 'current'
    },
    {
      dayOfWeek: 4,
      date: 10,
      pcn: 'current'
    },
    {
      dayOfWeek: 5,
      date: 11,
      pcn: 'current'
    },
    {
      dayOfWeek: 6,
      date: 12,
      pcn: 'current'
    },
    {
      dayOfWeek: 7,
      date: 13,
      pcn: 'current'
    },
  ],
  [
    {
      dayOfWeek: 1,
      date: 14,
      pcn: 'current'
    },
    {
      dayOfWeek: 2,
      date: 15,
      pcn: 'current'
    },
    {
      dayOfWeek: 3,
      date: 16,
      pcn: 'current'
    },
    {
      dayOfWeek: 4,
      date: 17,
      pcn: 'current'
    },
    {
      dayOfWeek: 5,
      date: 18,
      pcn: 'current'
    },
    {
      dayOfWeek: 6,
      date: 19,
      pcn: 'current'
    },
    {
      dayOfWeek: 7,
      date: 20,
      pcn: 'current'
    },
  ],
  [
    {
      dayOfWeek: 1,
      date: 21,
      pcn: 'current'
    },
    {
      dayOfWeek: 2,
      date: 22,
      pcn: 'current'
    },
    {
      dayOfWeek: 3,
      date: 23,
      pcn: 'current'
    },
    {
      dayOfWeek: 4,
      date: 24,
      pcn: 'current'
    },
    {
      dayOfWeek: 5,
      date: 25,
      pcn: 'current'
    },
    {
      dayOfWeek: 6,
      date: 26,
      pcn: 'current'
    },
    {
      dayOfWeek: 7,
      date: 27,
      pcn: 'current'
    },
  ],
  [
    {
      dayOfWeek: 1,
      date: 28,
      pcn: 'current'
    },
    {
      dayOfWeek: 2,
      date: 29,
      pcn: 'current'
    },
    {
      dayOfWeek: 3,
      date: 30,
      pcn: 'current'
    },
    {
      dayOfWeek: 4,
      date: 1,
      pcn: 'next'
    },
    {
      dayOfWeek: 5,
      date: 2,
      pcn: 'next'
    },
    {
      dayOfWeek: 6,
      date: 3,
      pcn: 'next'
    },
    {
      dayOfWeek: 7,
      date: 4,
      pcn: 'next'
    },
  ],
  ]
}

const splitByWeeks = (daysArray) => daysArray.reduce()

// start: the first day of the month is a tuesday (2).

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const novemberNumber = 10 // months are 0-based

const firstDayOfTheMonth = new Date(Date.UTC(2022, novemberNumber))
const firstDayOfTheMonthNumber = firstDayOfTheMonth.getDay()

// const previousMonth = getPreviousMonth(currentMonth)

console.log(firstDayOfTheMonth)
console.log(firstDayOfTheMonthNumber) // 2 - Tuesday

const previousMonth = new Date(Date.UTC(2022, novemberNumber - 1)).getMonth()
const currentMonth = new Date(Date.UTC(2022, novemberNumber)).getMonth()

console.log(previousMonth)
console.log(getDaysInMonth(2022, previousMonth))

const numberOfDaysInPreviousMonth = getDaysInMonth(2022, previousMonth)
const numberOfDaysInCurrentMonth = getDaysInMonth(2022, currentMonth)

const numberOfDaysOfPreviousMonth = firstDayOfTheMonthNumber - 1

console.log(numberOfDaysInPreviousMonth)

const firstMondayOfPreviousMonth = numberOfDaysInPreviousMonth - numberOfDaysOfPreviousMonth

console.log(getArrayFromRange(3, 8))

console.log(getArrayFromRange(firstMondayOfPreviousMonth, numberOfDaysInPreviousMonth))

const previousMonthDaysArray = getArrayFromRange(firstMondayOfPreviousMonth, numberOfDaysInPreviousMonth)
const currentMonthDaysArray = getArrayFromRange(1, numberOfDaysInCurrentMonth)

const screenDaysArray = [...previousMonthDaysArray, ...currentMonthDaysArray]

console.log(screenDaysArray)