import { Container, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';



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
            <Container disableGutters maxWidth={false}>
            <Typography align='center' variant='h3'>Education</Typography>
            <Box  sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-around',
                backgroundColor:'#F0F0F0',
                borderRadius: '5px',
                alignItems:'center',
                textAlign:'center',
                height: '80vh',
                padding:'0px'
                
            }}>
            <Box>
                <Typography variant="h4">"George Baritiu" National College</Typography>
                <Typography variant="h6" color='#3E497A'>2010-2014</Typography>
                <Typography variant="h5">Highschool Diploma</Typography>
            </Box>
            <Box>
                <Typography variant="h4">University of Agricultural Sciences and Veterinary Medicine</Typography>
                <Typography variant="h6" color='#3E497A'>2014-2018</Typography>
                <Typography variant="h5">Bachelor in Economics Engineering</Typography>
            </Box>
            <Box>
                <Typography variant="h4">Front-end Development course at "Scoala Informala"</Typography>
                <Typography variant="h6" color='#3E497A'>2021-2022</Typography>
                <Typography variant="h5">Front-End Developer</Typography>
            </Box>
            </Box>
            </Container>
        </ThemeProvider>
        
    );
};

export default Education