import React, { FC } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100vh;
  padding: 3rem;
  background-color: ${props => props.theme.base};
`

const Container: FC = ({ children }) => {
  return <Div>{children}</Div>
}

export default Container
