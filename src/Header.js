import React from "react";
import { AppBar, Toolbar, Button, Grid, } from "@mui/material";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import { green,} from "@mui/material/colors";


const theme = createTheme({
    typography: {
      button: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        fontColor: '#F1D00A',
        '@media (min-width:600px)': {
            fontSize: '1.25rem',
            fontWeight: 'bold',
          },
      }
    },
    palette: {
      primary: {
        main: "#F0F0F0",
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
                    style={{ backgroundColor: '#21325E' }}>

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