import { Paper, Box } from '@mui/material';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import HomeImg from '../src/images/Profile.jpeg';
import './About.css';

const About = () => {
    return(
        <Container >
        <Paper sx={{marginTop:'30px'}} elevation="3">   
        <Row>   
        
            <Col className="p-0">
            
            </Col>
            <Col>
            <div>Hello 2</div>
            </Col>
        
        </Row>
        </Paper>
        </Container>
        
    )
}

export default About