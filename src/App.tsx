import React, { FC } from 'react'

import Theme from './components/Theme'
import Container from './components/Container'
import Image from './components/Image'
import Message from './components/Message'
import Button from './components/Button'

import cameraImg from './assets/img/camera.png'

const theme = {
  base: '#FEFEFE',
  dark: '#3165EC',
  light: '#F0F6FF',
}

const App: FC = () => {
  return (
    <Theme theme={theme}>
      <Container>
        <Image src={cameraImg} />
        <Message>Take or send a picture</Message>
        <Button>Send</Button>
      </Container>
    </Theme>
  )
}

export default App
