const modulo = (n, m) => ((n % m) + m) % m // js 

export const getPreviousMonth = (month) => modulo(month - 1, 12)
export const getNextMonth = (month) => modulo(month + 1, 12)

export const getPreviousMonthYear = (previousMonth, currentYear) => previousMonth === 11 ? currentYear - 1 : currentYear
export const getNextMonthYear = (currentMonth, currentYear) => currentMonth === 11 ? currentYear + 1 : currentYear

export const getNumberOfDays = (month, year) => new Date(year, month + 1, 0).getDate()

export const getFirstDate = (month, year) => new Date(Date.UTC(year, month))
export const getLastDate = (month, year, numberOfDays) => new Date(Date.UTC(year, month, numberOfDays))

export const getNumberOfPreviousMonthLeftovers = (firstDayOfCurrentMonth_dayOfWeek) => firstDayOfCurrentMonth_dayOfWeek === 0 ? 6 : firstDayOfCurrentMonth_dayOfWeek - 1

export const getNumberOfNextMonthLeftovers = (numberOfDaysInCurrentMonth) => 7 - numberOfDaysInCurrentMonth 

export const equals = (date1, date2) => 
    date1.dayOfMonth === date2.getDate() &&
    date1.month === date2.getMonth() &&
    date1.year === date2.getFullYear()
