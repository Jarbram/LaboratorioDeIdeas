import React from 'react';
import {  Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const TestimonialCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: '0 auto',
  textAlign: 'center',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TestimonialAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: '0 auto',
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const testimonios = [
  {
    id: 1,
    name: 'Juan Pérez',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Excelente plataforma . Aprendí mucho de emprendimiento y negocios.',
  },
  {
    id: 2,
    name: 'María López',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Los mentores son muy amables y serviciales. Me ayudaron a desarrollar mi idea de negocio.',
  },
  {
    id: 3,
    name: 'Carlos Rodríguez',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'Una experiencia increíble. Gracias a los mentores, mi startup despegó con éxito.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Container sx={{ mt: 8 }}>
    <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
    Explora los testimonios inspiradores de nuestra comunidad
    </Typography>
    <Typography variant="body1" align="center" color="textSecondary" paragraph>
    Conoce las historias de éxito y aprendizaje compartidas por aquellos que han sido parte del Laboratorio de Ideas y han recibido mentorías únicas.
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid container item spacing={4} justifyContent="center">
        {testimonios.map((testimonio) => (
          <Grid item key={testimonio.id}>
            <TestimonialCard>
              <TestimonialAvatar alt={testimonio.name} src={testimonio.avatar} />
              <CardContent>
                <Typography variant="h6">{testimonio.name}</Typography>
                <TestimonialText variant="body2" color="textSecondary">
                  "{testimonio.text}"
                </TestimonialText>
              </CardContent>
            </TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Container>
  );
};


