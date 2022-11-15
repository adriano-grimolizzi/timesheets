import { useEffect, useState } from 'react'
import { setToLocalStorage, getFromLocalStorage } from '../utils/storage/storage'


export const useTheme = () => {
    const themes = getFromLocalStorage('all-themes')
    const DEFAULT_THEME = themes.data.dark
    
    const [theme, setTheme] = useState(DEFAULT_THEME)
    const [themeLoaded, setThemeLoaded] = useState(false)

    const setMode = mode => {
        setToLocalStorage('theme', mode)
        setTheme(mode)
    }

    useEffect(() => {
        const localTheme = getFromLocalStorage('theme')
        localTheme ? setTheme(localTheme) : setTheme(DEFAULT_THEME)
        setThemeLoaded(true)
    }, [])

    return { theme, themeLoaded, setMode }
}