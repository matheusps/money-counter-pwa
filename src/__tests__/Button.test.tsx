import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import Button from '../components/Button'

describe('Button component', () => {
  const component = render(<Button>Testing</Button>)

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
