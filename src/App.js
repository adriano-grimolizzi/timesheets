import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from "styled-components"

import Table from './components/table/Table'
import Header from './components/header/Header'
import { GlobalStyles } from './theme/GlobalStyles'
import { useTheme } from './theme/useTheme'

import "./i18n/i18n"
import './App.css'

const Container = styled.div`
  margin: 1rem;
`

const App = () => {

  const { theme, themeLoaded } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded])

  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container>
            <Header setSelectedTheme={setSelectedTheme}/>            
            <Table />
          </Container>
        </ThemeProvider>
      }
    </>
  )
}

export default App
