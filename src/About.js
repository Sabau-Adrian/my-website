import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import Timeline from '@mui/lab/Timeline';
import { Box } from '@mui/system';
import React, {useState } from 'react';
import {  Container, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './About.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const theme = createTheme();
theme.typography.h6 = {
  fontSize: '0.5rem',
  
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

theme.typography.h5 = {
  fontSize: '0.6rem',
  fontWeight: 'bold',
  textAlign: 'center',
  
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
const style = {
    width: '100%',
    maxWidth: 360,
    minWidth: 360,
    bgcolor: 'background.paper',
  };

const listItem = {
    ":hover":{
        backgroundColor: 'blue',
        color: '#F1D00A',
        backgroundColor: '#21325E',
        borderRadius: '10px',
        transform: 'scale(1.1,1.1)'
        }
}
function About() {
  const [count, setCount] = useState(4)

  function hideElement() {
    
  }

  function decrementCount() {
    setCount(prevCount => prevCount -1)
  }
  function incrementCount() {
    setCount(prevCount => prevCount +1)
  }
  
    return(
      <ThemeProvider theme={theme}> 
        <Container disableGutters maxWidth={false}
        sx={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
         <Typography variant="h2">Work History</Typography> 
        <Box>
        <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2014-2017
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Waiter/Bartender at Motel Gilau
            </Typography>
            <Typography variant="h6">Customer Service</Typography>
            <Typography variant="h6">Teamwork</Typography>
            <Typography variant="h6">Effective communication</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2017-2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <TrendingUpIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
            E commerce product manager at EuroArtDeco
            </Typography>
            <Typography variant="h6">Photo shooting/editing (PhotoShop)</Typography>
            <Typography variant="h6">Customer service</Typography>
            <Typography variant="h6">Problem-solving</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2019-2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" variant="filled">
              <BusinessCenterIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Salesperson at RMC Suport Motors
            </Typography>
            <Typography variant="h6">Time management</Typography>
            <Typography variant="h6">Client Engagement</Typography>
            <Typography variant="h6">Active Listening</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2021-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">
              Web Developer at Scoala Informala (course)
            </Typography>
            <Typography variant="h6">Programming laguages:JavaScript</Typography>
            <Typography variant="h6">Libraries/Framework:React.js,Node.js</Typography>
            <Typography variant="h6">HTML/CSS</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </Box>
      </Container>
      </ThemeProvider>
    );
}
 


export default About;