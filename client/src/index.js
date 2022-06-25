import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from "react-router-dom"
import "./index.css"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);