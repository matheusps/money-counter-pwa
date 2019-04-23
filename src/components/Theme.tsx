import React, { FC } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-variant-ligatures: no-common-ligatures;
    padding: 0;
    margin: 0;
  }
`

interface Props {
  theme?: {
    base: string
    light: string
    dark: string
  }
}

const Theme: FC<Props> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Theme
