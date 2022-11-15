import { MONDAY, SUNDAY } from "../../model/DaysOfTheWeek"
import { getArrayFromRange } from "../../utils/array.utils"
import { splitInWeeks } from "../../utils/calendar.utils"
import { getFirstDate, getLastDate, getNextMonth, getNextMonthYear, getNumberOfDays, getNumberOfNextMonthLeftovers, getNumberOfPreviousMonthLeftovers, getPreviousMonth, getPreviousMonthYear } from "../../utils/date.utils"

export const mapToTableRows = (month) => month.map((week, weekIndex) => (
  <tr key={`w-${weekIndex}`}>{week.map((date) => (
    <td key={`d-${weekIndex}-${date.dayOfMonth}`}>
      {date.dayOfMonth}
    </td>
  ))}
  </tr>
))

export const getPrevCurrNextMonthArray = (month, year) => {
  const firstDayOfCurrentMonth = getFirstDate(month, year)
  return [
    ...buildPreviousMonthArray(month, year, firstDayOfCurrentMonth),
    ...buildCurrentMonthArray(month, year),
    ...buildNextMonthArray(month, year),
  ]
}

const buildCurrentMonthArray = (month, year) => {
  const numberOfDaysInCurrentMonth = getNumberOfDays(month, year)
  const currentMonthDaysArray = getArrayFromRange(1, numberOfDaysInCurrentMonth)
  return currentMonthDaysArray.map(day => ({ dayOfMonth: day, month, year }))
}

const buildPreviousMonthArray = (month, year, firstDayOfCurrentMonth) => {  
  if (firstDayOfCurrentMonth.getDay() === MONDAY) {
    return []
  }
  const previousMonth = getPreviousMonth(month)
  const previousMonthYear = getPreviousMonthYear(previousMonth, year)

  const numberOfPreviousMonthLeftovers = getNumberOfPreviousMonthLeftovers(firstDayOfCurrentMonth.getDay())
  const numberOfDaysInPreviousMonth = getNumberOfDays(previousMonth, previousMonthYear)
  const firstMondayOfPreviousMonth = numberOfDaysInPreviousMonth - numberOfPreviousMonthLeftovers + 1
  const previousMonthDaysArray = getArrayFromRange(firstMondayOfPreviousMonth, numberOfDaysInPreviousMonth)
  return previousMonthDaysArray.map(day => ({ dayOfMonth: day, month: previousMonth, year: previousMonthYear }))
}

const buildNextMonthArray = (month, year) => {  
  const numberOfDaysInCurrentMonth = getNumberOfDays(month, year)
  const lastDayOfCurrentMonth = getLastDate(month, year, numberOfDaysInCurrentMonth)
  
  if (lastDayOfCurrentMonth.getDay() === SUNDAY) {
    return []
  }
  const nextMonth = getNextMonth(month, year)
  const nextMonthYear = getNextMonthYear(month, year)

  const numberOfNextMonthLeftovers = getNumberOfNextMonthLeftovers(lastDayOfCurrentMonth.getDay())
  const nextMonthDaysArray = getArrayFromRange(1, numberOfNextMonthLeftovers)
  return nextMonthDaysArray.map(day => ({ dayOfMonth: day, month: nextMonth, year: nextMonthYear }))
}

export const getFullCalendar = (month, year) => {
  const screenDaysArray = getPrevCurrNextMonthArray(month, year)
  const weeksArray = splitInWeeks(screenDaysArray)
  return mapToTableRows(weeksArray)
}
