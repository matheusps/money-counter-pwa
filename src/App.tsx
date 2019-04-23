import React, { FC } from 'react'

import Container from './components/Container'
import Emoji from './components/Emoji'
import Message from './components/Message'
import Button from './components/Button'

const App: FC = () => {
  return (
    <Container>
      <Emoji />
      <Message />
      <Button />
    </Container>
  )
}

export default App
