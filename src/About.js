import { Paper, Box, Typography } from '@mui/material';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import HomeImg from '../src/images/Profile.jpeg';
import './About.css';
import Divider from '@mui/material/Divider';

const About = () => {
    return(
        <Container className="aboutContainer"  disableGutters maxWidth={false}>
        <Typography align='center' variant='h1'>About Me</Typography>
        <Divider ><Typography variant='h5'>Why choose me?</Typography></Divider>           
        <Paper sx={{marginTop:'30px'}} elevation="3">
        <Typography>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Typography>
        </Paper>
        </Container>
        
    )
}

export default About