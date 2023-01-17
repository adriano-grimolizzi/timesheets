import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    --secondary: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.color};
    transition: all 0.50s linear;
  }
`
