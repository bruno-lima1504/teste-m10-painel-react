import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './pages/routes.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    font-family: 'Advent Pro', sans-serif;
    list-style: none;
  }
`

export default App;
