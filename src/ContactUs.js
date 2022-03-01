import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { Button, Container, Form } from 'react-bootstrap';


export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_tgzte5f', form.current, 'user_GSuVMO3x3oFdevRLPkdaM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
    return (
      
        
      <Container id="contact">
        <Box sx={{display:'block', pt:'30px'}}>
        <Typography align='center' variant='h1'>Contact</Typography>
        <Divider variant="middle" ><Typography variant='h5'>Lets keep in touch</Typography></Divider>
       <Paper elevation={3} sx={{marginTop:'30px', p: 3, m: 5,}}>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" name="name"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email"/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
        </Form.Group>
        <Form.Group>
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
      </Paper>
      </Box> 
      </Container>
    );
  };


export default ContactUs