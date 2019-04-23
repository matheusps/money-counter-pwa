import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  symbol: string
}

const Span = styled.span`
  font-size: 8em;
`

const Emoji: FC<Props> = ({ symbol }) => {
  return (
    <Span role="img" aria-label="Money Counter Emoji">
      {symbol}
    </Span>
  )
}

export default Emoji
