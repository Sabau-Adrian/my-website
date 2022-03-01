import { Container, Paper, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './Education.css'



const theme = createTheme();

theme.typography.h6 = {
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.6rem',
    },
  };
  
  theme.typography.h5 = {
    fontSize: '0.8rem',
    textAlign: 'center',
    fontWeight:'normal',
    
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
  };

  theme.typography.h4 = {
    fontSize: '0.8rem',
    textAlign: 'center',
    
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
  };

  theme.typography.h3 = {
    fontSize: '1.5rem',
    paddingTop:'30px',
    paddingBottom:'30px',
    '@media (min-width:600px)': {
        fontSize: '1.7rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem'
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2.3rem',
    },
 };

function Education() {
    return( 
        <ThemeProvider theme={theme}>
            <Container className="educationContainer">
            <Paper className="paperContainer" sx={{marginTop:'30px', p: 3,}} elevation="3">
            <Typography align='center' variant='h3'>Education</Typography>
            
            <Box className="textBox">
                <Typography variant="h4">"George Baritiu" National College</Typography>
                <Typography variant="h4">Highschool Diploma</Typography>
                <Typography variant="h4">2010-2014</Typography>
            </Box>
            <Box className="textBox">
                <Typography variant="h4">University of Agricultural Sciences and Veterinary Medicine</Typography>
                <Typography variant="h4">Bachelor in Economics Engineering</Typography>
                <Typography variant="h4">2014-2018</Typography>
            </Box>
            <Box className="textBox">
                <Typography variant="h4">Front-end Development course at "Scoala Informala"</Typography>
                <Typography variant="h4">Front-End Developer</Typography>
                <Typography variant="h4">2021-2022</Typography>
            </Box>
            </Paper>
            </Container>
            
        </ThemeProvider>
        
    );
};

export default Education