
import { Typography } from '@mui/material';
import React from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import MovieList from '../src/images/MovieList.jpg';
import TicTacToe from '../src/images/TicTacToe.jpg';
import './Projects.css';
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

const Projects = () => {
    return(
        <ThemeProvider theme={theme}>
        <Container>
            <Typography align='center' variant='h3'>Projects</Typography>
            <Row xs={1} md={3} className='d-flex flex-row w-100'>
                <Col className='d-flex justify-content-center' >
                    <Card  style={{width: '20rem'}}>
                        <Card.Img className='img' bsPrefix='card-img'	
            variant="top" src={MovieList} />
                        <Card.Body className="CardBody">
                            <Card.Title>Movie List</Card.Title>
                            <Card.Body>
                            This project is an application to generate a list
of movies in which you can review them.
                            </Card.Body>
                            <div className="d-grid gap-2">
                            <Button href="https://github.com/Sabau-Adrian/movie-list-fe5-master" variant='dark'>Git</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className=' d-flex justify-content-center '>
                    <Card  style={{width: '20rem'}}>
                        <Card.Img className='img' bsPrefix='card-img'	
            variant="top" src={TicTacToe} />
                        <Card.Body className="CardBody">
                            <Card.Title>Tic Tac Toe</Card.Title>
                            <Card.Body >
                            This project is an interactive tic-tac-toe game with React.
                            </Card.Body>
                            <div className="d-grid gap-2">
                            <Button href="https://github.com/Sabau-Adrian/Tic-Tac-Toe" variant='dark'>Git</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </ThemeProvider>
    )
}

export default Projects