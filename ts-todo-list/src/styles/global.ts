import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *::before,
  *,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: background-color 0.3s, color 0.3s, opacity 0.3s, scale 0.3s,
      transform 0.3s;
  }

  *:focus {
    border: .2rem solid ${(props) => props.theme['purple-dark']};
    outline: transparent;
  }

  :root {
    font-size: clamp(0.5rem, 1vw, 0.625rem);
  }

  html {
    hanging-punctuation: first last;
    color-scheme: dark light;
  }

  body {
    height: 100vh;
    min-height: 100svh;

    color: ${(props) => props.theme['gray-100']};
    background-color: ${(props) => props.theme['gray-600']};
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Inter', system-ui, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-wrap: balance;
  }

  h2,
  h3,
  body,
  span,
  input,
  button {
    font-weight: 400;
    line-height: 140%;
    font-family: 'Inter', system-ui, sans-serif;
  }

  p {
    max-width: 62ch;

    text-wrap: pretty;
  }

  a,
  button,
  input,
  ol,
  select,
  textarea,
  ul {
    all: unset;
    appearance: none;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }
`
