import { Container, Paper, Box, Typography } from '@mui/material';
import React from 'react';
import {FaGamepad, FaHiking} from 'react-icons/fa';
import {IoFootballSharp,IoBicycle, IoBulbOutline} from 'react-icons/io5';
import './Interests.css'
import { GiCampCookingPot, GiBookmark } from "react-icons/gi";
import { MdPhotoCamera } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { IoIosMusicalNotes ,  IoMdFitness} from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
  
  theme.typography.h6 = {
    fontSize: '1rem',
    
    
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




const Interests = () => {
    return(
        <ThemeProvider theme={theme}>
        <Container>
            <Paper className="mainContainer" elevation="3">
                <Box className="iconContainer">
                    <Box>
                        <FaGamepad  className="Icon"/>
                        <Typography variant="h6">Games</Typography> 
                    </Box>
                    <Box>
                        <IoFootballSharp  className="Icon"/>
                        <Typography variant="h6">Football</Typography> 
                    </Box>
                    <Box>
                        <FaHiking  className="Icon"/>
                        <Typography variant="h6">Hiking</Typography> 
                    </Box>
                </Box>
                <Box className="iconContainer">
                    <Box>
                        <GiCampCookingPot  className="Icon"/>
                        <Typography variant="h6">Cooking</Typography> 
                    </Box>
                    <Box>
                    <IoBulbOutline color="#F1D00A" className="Icon"/>
                        <Typography variant="h6" >Learning</Typography> 
                        
                    </Box>
                    <Box>
                        <MdPhotoCamera  className="Icon"/>
                        <Typography variant="h6">Photo</Typography> 
                    </Box>
                </Box>
                <Box className="iconContainer">
                    <Box>
                        <SiYourtraveldottv className="Icon"/>
                        <Typography variant="h6">Travel</Typography> 
                    </Box>
                    <Box>
                        <IoIosMusicalNotes className="Icon"/>
                        <Typography variant="h6">Music</Typography> 
                    </Box>
                    <Box>
                        <BiCameraMovie className="Icon"/>
                        <Typography variant="h6">Cinema</Typography> 
                    </Box>
                </Box>
                <Box className="iconContainer">
                    <Box>
                        <GiBookmark className="Icon"/>
                        <Typography variant="h6">Reading</Typography> 
                    </Box>
                    <Box>
                    <IoBicycle className="Icon"/>
                        <Typography variant="h6">Bicycles</Typography> 
                    </Box>
                    <Box>
                        <IoMdFitness  className="Icon"/>
                        <Typography variant="h6">Fitness</Typography> 
                    </Box>
                </Box>
            </Paper>
        </Container>
        </ThemeProvider>
    )
}




export default Interests;