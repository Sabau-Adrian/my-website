import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup, Grid, } from "@mui/material";
import styled from "styled-components";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { purple, green,} from "@mui/material/colors";


const theme = createTheme({
    typography: {
      button: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        fontColor: '#EEEEEE',
        '@media (min-width:600px)': {
            fontSize: '1.25rem',
            fontWeight: 'bold',
          },
      }
    },
    palette: {
      primary: {
        main: "#00ADB5",
      },
      secondary: {
        main: green[500],
      },
    },
  });
const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                <AppBar
                    style={{ backgroundColor: '#393E46' }}>

                    <Toolbar>

                        <Grid item xs={3} md={2} lg={2}>
                            <Button
                                
                                
                                color="primary">
                                Home
                            </Button>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Button
                                color="primary">
                                About Me
                            </Button>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Button
                                color="primary">
                                Resume
                            </Button>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Button
                                color="primary">
                                CONTACT
                            </Button>
                        </Grid>

                    </Toolbar>

                </AppBar>
            </Grid>
        </ThemeProvider>
    )
}

export default Header;