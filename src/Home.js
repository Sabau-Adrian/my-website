import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typical from 'react-typical';
const Home = () => {
    return(
        <Container>
            <Box
            sx={{
                display:'flex',
                paddingTop: 2,
                justifyContent:'space-between'
            }}>
            <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                
            }}>
                <Typography>
                    Hello, I'm Adrian
                </Typography>
                <Box>
                    <ButtonGroup>
                        <Button>
                            <FacebookIcon />
                        </Button>
                        <Button>
                            <InstagramIcon />
                        </Button>
                        <Button>
                            <LinkedInIcon />
                        </Button>
                        <Button>
                            <GitHubIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
                <Typical  
                steps={['Hello!', 1000,
                        'Front-End Developer 💻', 1000,
                        'Kiss you Roxen 😘', 1000
                    ]}
                loop={Infinity}
                wrapper="p"/>
            </Box>
            <Box
            sx={{
                display:'flex',
            }}>
                IMG
            </Box>
            </Box>
        </Container>
    )
}

export default Home;