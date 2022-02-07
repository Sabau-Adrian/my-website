import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import {  ButtonGroup, Container, FormControlLabel, Grid, Paper, Typography } from '@mui/material';
import { Checkbox } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AcUnitIconOutlined from '@mui/icons-material/AcUnit';
import styled from "styled-components"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import 'fontsource-roboto';
import MenuIcon from '@mui/icons-material/Menu';
import Header from './Header.js';
import Home from './Home.js';



const StyledButton = styled.button`
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
background: linear-gradient(45deg, #FE6B8B, #FF8E53)
`;

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

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(false)
  return(
    <div>
      <FormControlLabel control={<Checkbox
        icon={<AcUnitIcon/>}
        checkedIcon={<AcUnitIconOutlined />}
        size ="large"
        color = "primary"
        checked={checked}
        onChange={(e)=> setChecked(e.target.checked)}
      />}label="Check this!" />
      
    </div>
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false}>
            <Header />
            <Home />
            
      </Container>
    </ThemeProvider>
  );
}

export default App;

