import React, { useState } from 'react';

import './ProgrammingSkills.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProgressBar } from 'react-bootstrap';
import {FaReact,FaBootstrap,FaCss3Alt,FaHtml5,FaGithub} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'


const ProgrammingSkills = () =>  {
    return(
        <Container style={{}} >
        
        <Row>
           <Col className='pb-3 pt-4'><FaCss3Alt size={42} /> CSS<ProgressBar  animated now={70} /></Col>
        </Row>
        
        <Row>
           <Col className='pb-3'><FaHtml5 size={42}/> HTML<ProgressBar variant ="danger" animated now={90} /></Col>
        </Row>
        <Row>
           <Col className='pb-3'><SiJavascript size={42} /> JavaScript<ProgressBar variant ="warning" animated now={70} /></Col>
        </Row>
        <Row>
           <Col className='pb-3'><FaReact size={42} /> React<ProgressBar variant ="info" animated now={60} /></Col>
        </Row>
        <Row>
           <Col className='pb-3'><FaBootstrap size={42}/> Bootstrap<ProgressBar variant ="primary" animated now={40} /></Col>
        </Row>
        <Row>
           <Col className='pb-3'><FaGithub size={42}/> Git<ProgressBar variant ="secondary" animated now={60} /></Col>
        </Row>
      </Container>  
    );
        
}

export default ProgrammingSkills;