import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu Mono', monospace;
    color: ${({ theme }) => theme.text.primary};
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  body{
    background: ${({ theme }) => theme.bg.primary};
  }
`
