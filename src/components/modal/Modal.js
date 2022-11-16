import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import './Modal.css'

const Container = styled.div`
  .modal-content {
    background-color: ${({ theme }) => theme.colors.background};
  }
`

const Modal = ({ date, onClose }) => {
  const { t } = useTranslation()

  const ESCAPE = 27

  const closeOnEscapeKeyDown = event => {
    if ((event.charCode || event.keyCode) === ESCAPE) {
      onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  })

  return (
    <Container>
      <div className="modal-background" onClick={onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <h2>{date.dayOfMonth} {t('months.' + date.month)} {date.year}</h2>
        </div>
      </div>
    </Container>
  )
}

export default Modal
