import i18next from "i18next"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { DAYS_OF_THE_WEEK } from '../../model/DaysOfTheWeek'

const RESIZE = "resize"

const none = day => day
const small = day => day.substring(0, 3)
const smallest = day => day.substring(0, 1)

const toTableHeader = (element, index) => <th key={index}>{element}</th>

const TableHeaders = () => {
  const { t } = useTranslation()
  const translate = index => t('days.' + index)

  const [width, setWindowWidth] = useState(0)
  const [headers, setHeaders] = useState(DAYS_OF_THE_WEEK
    .map(translate)
    .map(toTableHeader))

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener(RESIZE, updateDimensions)
    return () =>
      window.removeEventListener(RESIZE, updateDimensions)
  }, [])

  useEffect(() => {
    let sizeFunction
    if (width <= 500) {
     sizeFunction = smallest
    } else if (width < 700) {
      sizeFunction = small
    } else {
      sizeFunction = none
    }
    setHeaders(
      DAYS_OF_THE_WEEK
        .map(translate)
        .map(sizeFunction)
        .map(toTableHeader)
    )
  }, [width, i18next.language])

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth)
  }

  return <tr>{headers}</tr>
}

export default TableHeaders
