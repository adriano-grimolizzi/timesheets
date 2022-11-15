import { getNextMonth, getNumberOfDays, getPreviousMonth } from "./date.utils"

describe('date', () => {
    test('get previous month', () => {
        expect(getPreviousMonth(0)).toBe(11)
        expect(getPreviousMonth(11)).toBe(10)
    })
    test('get next month', () => {
        expect(getNextMonth(0)).toBe(1)
        expect(getNextMonth(11)).toBe(0)
    })

    test('get number of days', () => {
        expect(getNumberOfDays(10, 2022)).toBe(30)
        expect(getNumberOfDays(1, 2024)).toBe(29)
    })
})
