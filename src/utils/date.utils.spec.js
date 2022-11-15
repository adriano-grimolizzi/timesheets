import { getNumberOfDays, getPreviousMonth } from "./date.utils"

describe('date', () => {
    test('get previous month', () => {
        expect(getPreviousMonth(0)).toBe(11)
        expect(getPreviousMonth(1)).toBe(0)
        expect(getPreviousMonth(2)).toBe(1)
        expect(getPreviousMonth(3)).toBe(2)
        expect(getPreviousMonth(4)).toBe(3)
        expect(getPreviousMonth(5)).toBe(4)
        expect(getPreviousMonth(6)).toBe(5)
        expect(getPreviousMonth(7)).toBe(6)
        expect(getPreviousMonth(8)).toBe(7)
        expect(getPreviousMonth(9)).toBe(8)
        expect(getPreviousMonth(10)).toBe(9)
        expect(getPreviousMonth(11)).toBe(10)
    })

    test('get number of days', () => {
        expect(getNumberOfDays(10, 2022)).toBe(30)
        expect(getNumberOfDays(1, 2024)).toBe(29)
    })
})
