import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import Message from '../components/Message'

describe('Message component', () => {
  const component = render(<Message>Testing</Message>)

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
