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
import { loading, fail, success } from './store/actions'
const URL = 'http://10.144.141.117:5000/predict?model=DATA&format=b64'
const BRL_DICT = {
  '0': 0.05,
  '1': 0.1,
  '2': 0.5,
  '3': 1.0,
}

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
    dispatch(loading)
    fetch(URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
      body: image,
    })
      .then(response => response.json())
      .then(data => {
        const result = data.success
          ? data.coins
              .replace('[', '')
              .replace(']', '')
              .split(' ')
              .map(clfic => BRL_DICT[clfic])
              .reduce((pv, crr) => pv + crr, 0)
          : 0
        dispatch(success(result))
      })
      .catch(() => dispatch(fail))
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
        <Button
          size="xl"
          onClick={() => sendPicture()}
          full
          disabled={state.btnDisabled}
        >
          {state.btnText}
        </Button>
      </Surface>
    </DarksideTheme>
  )
}

export default App
