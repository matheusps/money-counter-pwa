import React, { FC } from 'react'

import Theme from './components/Theme'
import Container from './components/Container'
import Emoji from './components/Emoji'
import Message from './components/Message'
import Button from './components/Button'

const theme = {
  base: '#FEFEFE',
  dark: '#3165EC',
  light: '#F0F6FF',
}

const App: FC = () => {
  return (
    <Theme theme={theme}>
      <Container>
        <Emoji symbol="💸" />
        <Message>Some Message</Message>
        <Button />
      </Container>
    </Theme>
  )
}

export default App
