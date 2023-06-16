import React from 'react';
import ReactDOM from 'react-dom';
import'./index.css'
import App from './App';


import { createTheme, ThemeProvider} from '@mui/material/styles';
import {blue} from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: blue,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


