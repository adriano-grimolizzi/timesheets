import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.color};
    transition: all 0.50s linear;

    text-align: center;
    align-items: center;
  }

  .theme {
    margin-left: 0.8rem;
  }
`
