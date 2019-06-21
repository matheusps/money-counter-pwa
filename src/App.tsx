import React, { FC } from 'react'
import { DarksideTheme, Surface, Button, Heading, Emoji } from 'darkside-ui'

import useStore from './store/useStore'

const App: FC = () => {
  const [state, dispatch] = useStore()

  return (
    <DarksideTheme>
      <Surface
        height="90vh"
        direction="column"
        justify="space-between"
        items="center"
        style={{ paddingTop: '3rem' }}
      >
        <Emoji size="xl" symbol={state.emoji} />
        <Heading style={{ textAlign: 'center' }} level={6}>
          {state.message}
        </Heading>
        <Button size="xl" onClick={() => dispatch(state.btnAction)} full>
          {state.btnText}
        </Button>
      </Surface>
    </DarksideTheme>
  )
}

export default App
