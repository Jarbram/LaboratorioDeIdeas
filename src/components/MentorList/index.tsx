import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Stepper, Step, StepLabel, Typography, CircularProgress, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';

interface MentorListProps {}

interface Mentor {
  id: string | number;
  foto: string;
  nombre: string;
  correo: string;
  especialidad: string;
  descripcion: string;
  disponibilidad: string;
}

export const MentorList: React.FC<MentorListProps> = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const mentorsCollection = collection(db, 'mentores');
        const mentorsSnapshot = await getDocs(mentorsCollection);
        const mentorsData: Mentor[] = [];

        mentorsSnapshot.forEach((doc) => {
          mentorsData.push({ id: doc.id, ...doc.data() } as Mentor);
        });

        setMentors(mentorsData);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los mentores. Por favor, inténtalo de nuevo más tarde.');
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  const handleLearnMore = (mentorId: string | number) => {
    navigate(`/mentor/${mentorId}`);
  };

  if (loading) {
    
    return(<Box mt={5} sx={{display :'flex', alignItems:'center', justifyContent:'center'}}>
      <CircularProgress color='secondary' />;
    </Box>)
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <>
      <Stepper activeStep={0} alternativeLabel sx={{ mb: 0, mt: 8 }}>
        <Step>
          <StepLabel>Elige el Mentor</StepLabel>
        </Step>
        <Step>
          <StepLabel>Escoge la fecha y horario disponible</StepLabel>
        </Step>
        <Step>
          <StepLabel>Solicita la mentoria</StepLabel>
        </Step>
      </Stepper>

      <Grid container spacing={3} justifyContent="center" mt={5} mb={12}>
        {mentors.map((mentor) => (
          <Grid item key={mentor.id} xs={12} sm={6} md={4} lg={3}>
            <Card 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column' 
              }}>
              <CardMedia 
              component="img" 
              height="350" 
              image={mentor.foto} 
              alt="Mentor" 
              sx={{ objectFit: 'cover' }} 
              />
              <CardContent sx={{ flexGrow: 1 }}>
              <Typography 
              variant="h6" 
              sx={{ mb: 1.5 }}>
                  {mentor.nombre}
                </Typography>
                <Divider />
                <Typography sx={{ mt: 1.5 }}>{mentor.especialidad}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color='secondary'
                  fullWidth
                  onClick={() => handleLearnMore(mentor.id)}
                  disabled={mentor.disponibilidad.trim() === ''}
                >
                  {mentor.disponibilidad.trim() === '' ? 'Agotado' : 'Agendar'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
