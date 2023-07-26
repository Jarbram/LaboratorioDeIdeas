
import { AppBar,  Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                <Typography variant="h5" sx={{ textAlign: 'center' }} color="white">
                  Laboratorio de Ideas
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
