import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from "styled-components"

import Table from './components/table/Table'
import Header from './components/header/Header'
import Modal from './components/modal/Modal'
import { GlobalStyles } from './theme/GlobalStyles'
import { useTheme } from './theme/useTheme'

import "./i18n/i18n"
import './App.css'

const Container = styled.div`
  margin: 0 1rem;
`

const App = () => {
  const [date, setDate] = useState({})
  const { theme, themeLoaded } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded, theme])

  return (
    themeLoaded && <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header setSelectedTheme={setSelectedTheme} />
      <Container>
        {showModal && <Modal date={date} onClose={() => setShowModal(false)} />}
        <Table setDate={setDate} setShowModal={setShowModal} />
      </Container>
    </ThemeProvider>
  )
}

export default App
