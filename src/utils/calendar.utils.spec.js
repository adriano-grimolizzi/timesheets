import { splitInWeeks } from "./calendar.utils"

describe("calendar utils", () => {
  test("split in weeks", () => {
    const input = [
      { dayOfMonth: 31, month: 9, year: 2022 },
      { dayOfMonth: 1, month: 10, year: 2022 },
      { dayOfMonth: 2, month: 10, year: 2022 },
      { dayOfMonth: 3, month: 10, year: 2022 },
      { dayOfMonth: 4, month: 10, year: 2022 },
      { dayOfMonth: 5, month: 10, year: 2022 },
      { dayOfMonth: 6, month: 10, year: 2022 },
      { dayOfMonth: 7, month: 10, year: 2022 },
      { dayOfMonth: 8, month: 10, year: 2022 },
      { dayOfMonth: 9, month: 10, year: 2022 },
      { dayOfMonth: 10, month: 10, year: 2022 },
      { dayOfMonth: 11, month: 10, year: 2022 },
      { dayOfMonth: 12, month: 10, year: 2022 },
      { dayOfMonth: 13, month: 10, year: 2022 },
      { dayOfMonth: 14, month: 10, year: 2022 },
      { dayOfMonth: 15, month: 10, year: 2022 },
      { dayOfMonth: 16, month: 10, year: 2022 },
      { dayOfMonth: 17, month: 10, year: 2022 },
      { dayOfMonth: 18, month: 10, year: 2022 },
      { dayOfMonth: 19, month: 10, year: 2022 },
      { dayOfMonth: 20, month: 10, year: 2022 },
      { dayOfMonth: 21, month: 10, year: 2022 },
      { dayOfMonth: 22, month: 10, year: 2022 },
      { dayOfMonth: 23, month: 10, year: 2022 },
      { dayOfMonth: 24, month: 10, year: 2022 },
      { dayOfMonth: 25, month: 10, year: 2022 },
      { dayOfMonth: 26, month: 10, year: 2022 },
      { dayOfMonth: 27, month: 10, year: 2022 },
      { dayOfMonth: 28, month: 10, year: 2022 },
      { dayOfMonth: 29, month: 10, year: 2022 },
      { dayOfMonth: 30, month: 10, year: 2022 },
      { dayOfMonth: 1, month: 11, year: 2022 },
      { dayOfMonth: 2, month: 11, year: 2022 },
      { dayOfMonth: 3, month: 11, year: 2022 },
      { dayOfMonth: 4, month: 11, year: 2022 },
    ]
    const expected = [
      [
        { dayOfMonth: 31, month: 9, year: 2022 },
        { dayOfMonth: 1, month: 10, year: 2022 },
        { dayOfMonth: 2, month: 10, year: 2022 },
        { dayOfMonth: 3, month: 10, year: 2022 },
        { dayOfMonth: 4, month: 10, year: 2022 },
        { dayOfMonth: 5, month: 10, year: 2022 },
        { dayOfMonth: 6, month: 10, year: 2022 },
      ],
      [
        { dayOfMonth: 7, month: 10, year: 2022 },
        { dayOfMonth: 8, month: 10, year: 2022 },
        { dayOfMonth: 9, month: 10, year: 2022 },
        { dayOfMonth: 10, month: 10, year: 2022 },
        { dayOfMonth: 11, month: 10, year: 2022 },
        { dayOfMonth: 12, month: 10, year: 2022 },
        { dayOfMonth: 13, month: 10, year: 2022 },
      ],
      [
        { dayOfMonth: 14, month: 10, year: 2022 },
        { dayOfMonth: 15, month: 10, year: 2022 },
        { dayOfMonth: 16, month: 10, year: 2022 },
        { dayOfMonth: 17, month: 10, year: 2022 },
        { dayOfMonth: 18, month: 10, year: 2022 },
        { dayOfMonth: 19, month: 10, year: 2022 },
        { dayOfMonth: 20, month: 10, year: 2022 },
      ],
      [
        { dayOfMonth: 21, month: 10, year: 2022 },
        { dayOfMonth: 22, month: 10, year: 2022 },
        { dayOfMonth: 23, month: 10, year: 2022 },
        { dayOfMonth: 24, month: 10, year: 2022 },
        { dayOfMonth: 25, month: 10, year: 2022 },
        { dayOfMonth: 26, month: 10, year: 2022 },
        { dayOfMonth: 27, month: 10, year: 2022 },
      ],
      [
        { dayOfMonth: 28, month: 10, year: 2022 },
        { dayOfMonth: 29, month: 10, year: 2022 },
        { dayOfMonth: 30, month: 10, year: 2022 },
        { dayOfMonth: 1, month: 11, year: 2022 },
        { dayOfMonth: 2, month: 11, year: 2022 },
        { dayOfMonth: 3, month: 11, year: 2022 },
        { dayOfMonth: 4, month: 11, year: 2022 },
      ],
    ]
    expect(splitInWeeks(input)).toEqual(expected)
  })
})
