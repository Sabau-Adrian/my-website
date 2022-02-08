import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import Timeline from '@mui/lab/Timeline';
import { borderRadius, Box } from '@mui/system';
import React from 'react';
import { Collapse, Container, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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
    return(
        <Container disableGutters maxWidth={false}
        sx={{
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
        <Box>
            <Collapse>Hi</Collapse>
        <List sx={style} component="nav" aria-label="mailbox folders">      
      <ListItem sx={listItem} button>
        <ListItemText primary="Education"/>
      </ListItem>
      <Divider />
      <ListItem  sx={listItem} button divider>
        <ListItemText primary="Interests" />
      </ListItem>
      <ListItem  sx={listItem} button>
        <ListItemText primary="Programming Skills" />
      </ListItem>
      <Divider light />
      <ListItem  sx={listItem}button>
        <ListItemText primary="Projects" />
      </ListItem>
    </List>  
        </Box>    
        <Box>
        <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </Box>
      </Container>
    );
}

export default About;