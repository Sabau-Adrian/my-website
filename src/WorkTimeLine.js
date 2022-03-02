import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import Timeline from '@mui/lab/Timeline';
import { Box } from '@mui/system';
import React  from 'react';
import {  Container, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './About.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


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
  fontSize: '0.5rem',
  
  
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

theme.typography.h5 = {
  fontSize: '0.6rem',
  fontWeight: 'bold',
  
  
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

function WorkTimeLine() {

  
  
  
    return(
      

    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '15px'
          
        }}>
        <Box>
          <Timeline className="TimeColors" position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="h4"
                color="black"
              >
                2021-2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="div">
                  Web Developer at Scoala Informala (course)
                </Typography>
                <Typography variant="h6" component="div">Libraries/Framework:React.js, Node.js</Typography>
                <Typography variant="h6" component="div">Programming laguages: JavaScript</Typography>
                <Typography variant="h6" component="div">HTML/CSS</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="h4"
                color="black"
              >
                2019-2020
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary" variant="filled">
                  <BusinessCenterIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="div">
                  Salesperson at RMC Suport Motors
                </Typography>
                <Typography variant="h6" component="div">Client Engagement</Typography>
                <Typography variant="h6" component="div">Time management</Typography>
                <Typography variant="h6" component="div">Active Listening</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="h4"
                color="black"
                align="center"
              >
                2017-2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <TrendingUpIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="div">
                  E commerce product manager at EuroArtDeco
                </Typography>
                <Typography variant="h6" component="div">Photo shooting/editing (PhotoShop)</Typography>
                <Typography variant="h6" component="div">Customer service</Typography>
                <Typography variant="h6" component="div">Problem-solving</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="h4"
                color="black"
                align="right"
              >
                2014-2017
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="div">
                  Waiter/Bartender at Motel Gilau
                </Typography>
                <Typography variant="h6" component="div">Effective communication</Typography>
                <Typography variant="h6" component="div">Customer Service</Typography>
                <Typography variant="h6" component="div">Teamwork</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
 
        

export default WorkTimeLine;

