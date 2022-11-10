export const getMonthName = (monthNumber) => {
    const date = new Date()
    date.setMonth(monthNumber - 1)
    return date.toLocaleString('en-US', { month: 'long' }).toLowerCase()
}

export const getDayName = (dayNumber) => {
    const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    return dayNames[dayNumber]
}

export const getPreviousMonth = (monthNumber) => {
    const date = new Date()
    date.setDate(1)
    date.setMonth(monthNumber - 1)
    return date.getMonth()
}