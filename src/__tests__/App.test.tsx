import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import App from '../App'

describe('App component', () => {
  const component = render(<App />)

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
