import { getArrayFromRange } from './array.utils'

describe('calendar utils', () => {
    test('get array from range', () => {
        expect(getArrayFromRange(6, 9)).toEqual([6, 7, 8, 9,])
    })
})
