import { Container, Paper, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import freeCodeCamp from '../src/images/free.jpg';
import GeorgeB from '../src/images/GB.jpg';
import IT from '../src/images/IT.jpg';
import USAMV from '../src/images/USAMV.jpg'


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
            <Container>
            <Paper sx={{marginTop:'30px', marginBottom:'30px', padding:'15px'}} elevation="3">
            <Box className="textBox">
              <Box><img  className='Logo' alt='Logo' src={IT}></img></Box>
              <Box className="textContainer">
                <Typography variant="h4">Front-end Development course at "Scoala Informala"</Typography>
                <Typography variant="h4">Front-End Developer</Typography>
                <Typography variant="h4">2021-2022</Typography>
              </Box>
            </Box>
            <Box className="textBox">
              <Box className="educationLogo"><img className='Logo' alt='Logo' src={freeCodeCamp}></img></Box>
              <Box className="textContainer">
                <Typography variant="h4">JavaScript Algorithms and Data Structures course at "freeCodeCamp"</Typography>
                <Typography variant="h4">Developer Certification, representing approximately 300 hours of coursework</Typography>
                <Typography variant="h4">2021</Typography>
              </Box>
            </Box>
            <Box className="textBox">
              <Box className="educationLogo"><img className='Logo' alt='Logo' src={freeCodeCamp}></img></Box>
              <Box className="textContainer">
                <Typography variant="h4">Responsive Web Design course at "freeCodeCamp"</Typography>
                <Typography variant="h4">Developer Certification, representing approximately 300 hours of coursework.</Typography>
                <Typography variant="h4">2020</Typography>
              </Box>
            </Box>
            <Box className="textBox">
              <Box className="educationLogo"><img className='Logo' alt='Logo' src={USAMV}></img></Box>
              <Box className="textContainer">
                <Typography variant="h4">University of Agricultural Sciences and Veterinary Medicine</Typography>
                <Typography variant="h4">Bachelor in Economics Engineering</Typography>
                <Typography variant="h4">2014-2018</Typography>
              </Box>
            </Box>
            <Box className="textBox">
              <Box className="educationLogo"><img className='Logo' alt='Logo' src={GeorgeB}></img></Box>
              <Box className="textContainer">
                <Typography variant="h4">"George Baritiu" National College</Typography>
                <Typography variant="h4">Highschool Diploma</Typography>
                <Typography variant="h4">2010-2014</Typography>
              </Box> 
            </Box>
            </Paper>
            </Container>
            
        </ThemeProvider>
        
    );
};

export default Education