const DAYS_IN_WEEK = 7

const reduceFunction = (previousValue, currentValue, index) => {
    const weekIndex = Math.floor(index / DAYS_IN_WEEK)
    if (!previousValue[weekIndex]) {
        previousValue[weekIndex] = [] // start a new week
    }
    previousValue[weekIndex].push(currentValue)
    return previousValue
}

const initialValue = []

export const splitInWeeks = (input) => input.reduce(reduceFunction, initialValue)
