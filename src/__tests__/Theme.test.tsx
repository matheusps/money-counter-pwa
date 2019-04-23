import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import Theme from '../components/Theme'

describe('Theme component', () => {
  const component = render(
    <Theme theme={{ base: '', dark: '', light: '' }}>Testing</Theme>
  )

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
