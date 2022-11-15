const modulo = (n, m) => ((n % m) + m) % m // js 

export const getPreviousMonth = (month) => modulo(month - 1, 12)

export const getPreviousMonthYear = (previousMonth, currentYear) => previousMonth === 11 ? currentYear - 1 : currentYear

export const getNumberOfDays = (month, year) => new Date(year, month + 1, 0).getDate()
