
import { AppBar,  Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{backgroundColor:'#ffffff'}}>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                <Typography variant="h1" sx={{ textAlign: 'center', fontSize:'1.4rem', fontWeight:'bold' }} color="secondary">
                  LABORATORIO DE IDEAS
                </Typography>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
