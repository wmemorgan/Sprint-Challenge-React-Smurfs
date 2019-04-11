import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/StyleComponents/GlobalStyle'
import theme from './components/StyleComponents/theme'
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </ThemeProvider>, 
  document.getElementById('root'));
