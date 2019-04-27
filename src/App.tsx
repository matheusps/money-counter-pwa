import React, { FC } from 'react'

import useStore from './store/useStore'
import { theme } from './store/data'

import Theme from './components/Theme'
import Container from './components/Container'
import Image from './components/Image'
import Message from './components/Message'
import Button from './components/Button'

const App: FC = () => {
  const [state, dispatch] = useStore()

  return (
    <Theme theme={theme}>
      <Container>
        <Image src={state.image} />
        <Message>{state.message}</Message>
        <Button onClick={() => dispatch(state.btnAction)}>
          {state.btnText}
        </Button>
      </Container>
    </Theme>
  )
}

export default App
