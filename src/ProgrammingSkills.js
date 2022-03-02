
import './ProgrammingSkills.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProgressBar } from 'react-bootstrap';
import {FaReact,FaBootstrap,FaCss3Alt,FaHtml5,FaGithub} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import { Box} from '@mui/material';
import { ThemeProvider, createTheme,} from '@mui/material/styles';

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


const ProgrammingSkills = () =>  {
    return(
         <ThemeProvider theme={theme} >
            <Container disableGutters maxWidth={false}>
               <Box>
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
               </Box>
            </Container>
         </ThemeProvider>  
    );
        
}

export default ProgrammingSkills;