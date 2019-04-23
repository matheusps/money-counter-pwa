import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import Image from '../components/Image'

describe('Image component', () => {
  const component = render(<Image src="testing" />)

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
