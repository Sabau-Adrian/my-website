import { Paper, Box, Typography } from '@mui/material';
import React from 'react';
import { Button, Container} from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import './About.css';
import Divider from '@mui/material/Divider';
import CV from '../src/CV/SabauAdrianResume varianta 2.pdf'

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    yellowPaper: {
        backgroundColor: '#F1D00A'
    },    
  });
   
const About = () => {
    const classes = useStyles();
    return(
        <Container id="about" className="aboutContainer"  disableGutters maxWidth={false}>
        <Typography align='center' variant='h1'>About Me</Typography>
        <Divider ><Typography variant='h5'>Why choose me?</Typography></Divider>           
        <Paper className={classes.yellowPaper}sx={{marginTop:'30px', p: 3,}} elevation="3">
        <Box>   
          <Typography gutterBottom paragraph>With a successful background in sales and e-commerce, I encountered many situations where I wished I had more tech knowledge in order to solve various issues or help promote our products more efficiently. Therefore, I have made an important decision, to change my career path and start learning Information Technology at the Informal School.</Typography>
          <Typography gutterBottom paragraph>My artistic abilities, along with the knowledge learnt from the Informal school, enabled me to become a serious front-end developer, following what I envisioned for my career: to combine the world of graphic design with technology.</Typography>
          <Typography gutterBottom paragraph>Currently, I posses the skills of a front web and mobile developer, along with a knack of building applications with utmost efficiency. Moreover, I am keen on building and implementing websites, solve HTML, CSS, Javascript/React issues, while also being able to optimise the graphic of WEB design. I can also provide maintenance for websites and manage the hosting servers.</Typography>
          <Typography gutterBottom paragraph>Having the courage to make a career change in my mid twenties, I am definitely a strong candidate for your company, as I am determined to learn and improve myself constantly, in order to achieve what others have started earlier than me. I am ambitious and want to prove myself and others that the world of IT is welcoming to everyone who is truly passionate, hardworking and persistent.</Typography>
        </Box>
        <Box className="boxContainer" >
          <Button href="#contact" className="leftButton"variant="dark">Hire me</Button>
          <Button href={CV} variant="dark" download>Get Resume</Button>
        </Box> 
        </Paper>
        </Container>
        
    )
}

export default About