import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typical from 'react-typical';
import profileImg from '../src/images/Linkedin.png';
import './Home.css';
import { ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';


const theme = createTheme({
    
    palette: {
      primary: {
        main: "#F0F0F0",
      },
      secondary: {
        main: "#F1D00A",
      },
    },
  });

theme.typography.h3 = {
    fontSize: '2.3rem',
    pl: '5px',
    '@media (min-width:600px)': {
      fontSize: '2.3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5rem',
    },
  };

const Home = () => {
    return(
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth={false}>
                <Box
                className="box-container"
                sx={{
                    display:'flex',
                    paddingTop: 2,
                    justifyContent:'center',
                    backgroundColor: '#3E497A',
                    height: '100vh',
                
                    
                }}>
                <Box 
                className="text-container"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                   
                    
                    alignItems: 'center',
                    justifyContent: 'center'
                    
                }}>
                    <Typography
                    className="text"
                    display='flex'
                    variant='h3'>
                        Hello, I'm <Typography variant='h3' pl='15px' color="#F1D00A">Adrian</Typography>
                    </Typography>
                    <p>
                    I'm a {' '}<Typical  
                    steps={['Front-End Developer 💻', 1000,
                            'React Enthusiast 😎', 1000,
                            'Css & HTML Wizard 🧙‍♂️', 1000
                        ]}
                    loop={Infinity}
                    wrapper="b"/>
                    
                    </p>
                    <Box>
                            <Button href='https://www.facebook.com/sabau.adrian.75'>
                                <FacebookIcon />
                            </Button>
                            <Button href='https://www.instagram.com/adi.sab/'>
                                <InstagramIcon />
                            </Button>
                            <Button color="secondary" href='https://www.linkedin.com/in/adrian-sabau-626a57205'>
                                <LinkedInIcon />
                            </Button>
                            <Button href='https://github.com/Sabau-Adrian'>
                                <GitHubIcon />
                            </Button>
                    </Box>
                    
                </Box>
                <Box
                className="img-container"
                sx={{
                    display:'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                    
                }}>
                    <img alt='Personal-img' src={profileImg}></img>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Home;