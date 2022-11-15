import { getNumberOfDays, getPreviousMonth, getPreviousMonthYear } from "../../utils/date.utils";
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
      status: 'previous'
    },
    {
      dayOfWeek: 2,
      date: 1,
      status: 'current'
    },
    {
      dayOfWeek: 3,
      date: 2,
      status: 'current'
    },
    {
      dayOfWeek: 4,
      date: 3,
      status: 'current'
    },
    {
      dayOfWeek: 5,
      date: 4,
      status: 'current'
    },
    {
      dayOfWeek: 6,
      date: 5,
      status: 'current'
    },
    {
      dayOfWeek: 7,
      date: 6,
      status: 'current'
    },
  ],
  [
    {
      dayOfWeek: 1,
      date: 7,
      status: 'current'
    },
    {
      dayOfWeek: 2,
      date: 8,
      status: 'current'
    },
    {
      dayOfWeek: 3,
      date: 9,
      status: 'current'
    },
    {
      dayOfWeek: 4,
      date: 10,
      status: 'current'
    },
    {
      dayOfWeek: 5,
      date: 11,
      status: 'current'
    },
    {
      dayOfWeek: 6,
      date: 12,
      status: 'current'
    },
    {
      dayOfWeek: 7,
      date: 13,
      status: 'current'
    },
  ],
  [
    {
      dayOfWeek: 1,
      date: 14,
      status: 'current'
    },
    {
      dayOfWeek: 2,
      date: 15,
      status: 'current'
    },
    {
      dayOfWeek: 3,
      date: 16,
      status: 'current'
    },
    {
      dayOfWeek: 4,
      date: 17,
      status: 'current'
    },
    {
      dayOfWeek: 5,
      date: 18,
      status: 'current'
    },
    {
      dayOfWeek: 6,
      date: 19,
      status: 'current'
    },
    {
      dayOfWeek: 7,
      date: 20,
      status: 'current'
    },
  ],
  [
    {
      dayOfWeek: 1,
      date: 21,
      status: 'current'
    },
    {
      dayOfWeek: 2,
      date: 22,
      status: 'current'
    },
    {
      dayOfWeek: 3,
      date: 23,
      status: 'current'
    },
    {
      dayOfWeek: 4,
      date: 24,
      status: 'current'
    },
    {
      dayOfWeek: 5,
      date: 25,
      status: 'current'
    },
    {
      dayOfWeek: 6,
      date: 26,
      status: 'current'
    },
    {
      dayOfWeek: 7,
      date: 27,
      status: 'current'
    },
  ],
  [
    {
      dayOfWeek: 1,
      date: 28,
      status: 'current'
    },
    {
      dayOfWeek: 2,
      date: 29,
      status: 'current'
    },
    {
      dayOfWeek: 3,
      date: 30,
      status: 'current'
    },
    {
      dayOfWeek: 4,
      date: 1,
      status: 'next'
    },
    {
      dayOfWeek: 5,
      date: 2,
      status: 'next'
    },
    {
      dayOfWeek: 6,
      date: 3,
      status: 'next'
    },
    {
      dayOfWeek: 7,
      date: 4,
      status: 'next'
    },
  ],
  ]
}

const today = new Date() 

const currentMonth = today.getMonth()
const currentYear = today.getFullYear()

const firstDayOfCurrentMonth = new Date(Date.UTC(currentYear, currentMonth))
console.log(firstDayOfCurrentMonth)

// const firstDayOfTheMonthNumber = firstDayOfTheMonth.getDay()

const previousMonth = getPreviousMonth(currentMonth)
const previousMonthYear = getPreviousMonthYear(previousMonth, currentYear)

// console.log(previousMonth)
// console.log(previousMonthYear)

// console.log(firstDayOfTheMonthNumber) // 2 - Tuesday

const numberOfDaysInPreviousMonth = getNumberOfDays(2022, previousMonth)
const numberOfDaysInCurrentMonth = getNumberOfDays(2022, currentMonth)

// const numberOfDaysOfPreviousMonth = firstDayOfTheMonthNumber - 1

// // console.log(numberOfDaysInPreviousMonth)

// const firstMondayOfPreviousMonth = numberOfDaysInPreviousMonth - numberOfDaysOfPreviousMonth

// // console.log(getArrayFromRange(3, 8))

// // console.log(getArrayFromRange(firstMondayOfPreviousMonth, numberOfDaysInPreviousMonth))

// const previousMonthDaysArray = getArrayFromRange(firstMondayOfPreviousMonth, numberOfDaysInPreviousMonth)
// const currentMonthDaysArray = getArrayFromRange(1, numberOfDaysInCurrentMonth)

// const screenDaysArray = [...previousMonthDaysArray, ...currentMonthDaysArray]

// // console.log(screenDaysArray)