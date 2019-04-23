import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import Container from '../components/Container'

describe('Container component', () => {
  const component = render(<Container>Testing</Container>)

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
