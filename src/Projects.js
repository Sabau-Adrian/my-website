
import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import MovieList from '../src/images/MovieList.jpg'
import './Projects.css'

const Projects = () => {
    return(
        <Row xs={1} md={3} className='d-flex flex-row w-100'>
            <Col className='d-flex justify-content-center' >
                <Card  style={{width: '20rem'}}>
                    <Card.Img className='p-0' bsPrefix='card-img'	
        variant="top" src={MovieList} />
                    <Card.Body>
                        <Card.Title>Movie List</Card.Title>
                        <Card.Body>
                        Some quick example text to build on the card title and make up the bulk of
            the card's content.
                        </Card.Body>
                        <Button variant='primary'>Website</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className=' d-flex justify-content-center '>
                <Card  style={{width: '20rem'}}>
                    <Card.Img className='p-0' bsPrefix='card-img'	
        variant="top" src={MovieList} />
                    <Card.Body>
                        <Card.Title>Tip Tap Toe</Card.Title>
                        <Card.Body>
                        Some quick example text to build on the card title and make up the bulk of
            the card's content.
                        </Card.Body>
                        <Button variant='primary'>Website</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Projects