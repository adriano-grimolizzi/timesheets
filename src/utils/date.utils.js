export const getMonthName = (monthNumber) => {
    const date = new Date()
    date.setMonth(monthNumber - 1)
    return date.toLocaleString('en-US', { month: 'long' })
}

export const getDayName = (dayNumber) => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return dayNames[dayNumber]
}

export const getPreviousMonth = (monthNumber) => {
    const date = new Date()
    date.setDate(1)
    date.setMonth(monthNumber - 1)
    return date.getMonth()
}