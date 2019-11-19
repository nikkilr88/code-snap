import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './components/App'

// Context
import { AppProvider } from './contexts/appContext'

// Fonts
import FiraCode from './fonts/FiraCode-Regular.ttf'
import Inconsolata from './fonts/Inconsolata-Regular.ttf'

// Styles
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url('${FiraCode}') format('truetype');
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url('${Inconsolata}') format('truetype');
  }

  body {
    background: #f7f7f7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  select {
    margin-right: 10px;
    padding: 10px;
    height: 40px;
    border: none;
    border-radius: 50px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    color: #eee;
    background: #444;
    cursor: pointer;
  }
`

ReactDOM.render(
  <AppProvider>
    <GlobalStyle />
    <App />
  </AppProvider>,
  document.getElementById('root')
)
