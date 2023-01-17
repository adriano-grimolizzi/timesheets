import React, { useState, useEffect } from "react"
import _ from 'lodash'

import { useTheme } from './useTheme'
import { getFromLocalStorage } from '../utils/storage/storage'

const ThemeSwitcher = (props) => {
  const themesFromStore = getFromLocalStorage('all-themes')
  const [data] = useState(themesFromStore.data)
  const [themes, setThemes] = useState([])
  const { setMode } = useTheme()

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme)
    props.setSelectedTheme(selectedTheme)
  }

  useEffect(() => {
    setThemes(_.keys(data))
  }, [data])

  const ThemeCard = (props) => (<button onClick={() => themeSwitcher(props.theme)}>
    {props.theme.name}
  </button>)

  const byThemeCard = (theme) => (
    <ThemeCard theme={data[theme]} key={data[theme].id} />
  )

  return (
    <div className="theme">
      {
        themes.length > 0 &&
        themes.map(byThemeCard)
      }
    </div>
  )
}

export default ThemeSwitcher
