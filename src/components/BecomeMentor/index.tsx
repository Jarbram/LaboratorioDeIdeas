import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const BecomeMentor: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 4 }}>
      <Box
        sx={{
          p: 4,
          bgcolor: '#ffffff',
          borderRadius: 4,
          textAlign: 'center',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Typography variant="h5" gutterBottom>
              ¿Listo para compartir tu experiencia y guiar a futuros emprendedores?
            </Typography>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph color="textSecondary">
              En el Laboratorio de Ideas, buscamos profesionales apasionados que deseen
              ayudar a impulsar proyectos innovadores.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center" >
            <Link to="/register">
              <Button variant="contained" color="secondary" size="large">
                ¡Únete como Mentor!
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
