import React from 'react';
import './App.css';
import {  Container} from '@mui/material';
// import styled from "styled-components"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import 'fontsource-roboto';
import Header from './Header.js';
import Home from './Home.js';
import HorizontalTabs from './HorizontalTabs.js';
import NavBar from './NavBar';
import About from './About'



// const StyledButton = styled.button`
// color: white;
// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px solid palevioletred;
// border-radius: 3px;
// background: linear-gradient(45deg, #FE6B8B, #FF8E53)
// `;

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 36,
    }
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false}>
            <NavBar />
            <Home />
            <About />
            <HorizontalTabs />
      </Container>
    </ThemeProvider>
  );
}

export default App;

