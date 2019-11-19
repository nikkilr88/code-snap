import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './components/App'

// Context
import { AppProvider } from './contexts/appContext'

// Fonts
import FiraCode from './FiraCode-Regular.ttf'

// Styles
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Inconsolata');

  @font-face {
    font-family: 'FiraCode';
    src: url('${FiraCode}') format('truetype');
  }

  body {
    font-family: 'Inconsolata', sans-serif;
    color: #2b2b2b;
    background: #f7f7f7;
    text-align: center;
  }

  img {
    margin: 100px 0 0;
    max-width: 500px;
    width: 80%;
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
