import React, { FC, useState } from 'react'
import {
  DarksideTheme,
  Surface,
  Button,
  Heading,
  Emoji,
  Input,
} from 'darkside-ui'

import useStore from './store/useStore'
const URL = 'http://localhost:5000/predict'

const App: FC = () => {
  const [state, dispatch] = useStore()
  const [image, setImage] = useState('')

  function base64(file, callback) {
    const result = {
      base64: '',
    }
    const reader = new FileReader()
    reader.onload = e => {
      //@ts-ignore
      const base64 = btoa(e.target.result)
      result.base64 = base64
      callback(result)
    }
    reader.readAsBinaryString(file)
  }

  const handleFileChange = event => {
    const { target } = event
    const { files } = target
    base64(files[0], data => {
      console.log(data.base64)
      setImage(data.base64)
    })
  }

  const sendPicture = () => {
    fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: image,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
      })
      .catch(e => console.log(e))
  }

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
        <Input type="file" onChange={handleFileChange} />
        <Button size="xl" onClick={() => sendPicture()} full>
          {state.btnText}
        </Button>
      </Surface>
    </DarksideTheme>
  )
}

export default App
