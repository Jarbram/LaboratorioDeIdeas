import React, { useRef } from 'react';
import { Box, Button, Card, CardHeader, Container, Grid, Icon, Typography} from '@mui/material';
import { MentorList } from '../../components/MentorList';
import { EmojiObjectsOutlined, GroupWork, HelpOutlined } from '@mui/icons-material';
import { Logo } from '../../common/logo';
import {Testimonials} from '../../components/Testimonial'
import { BecomeMentor } from '../../components/BecomeMentor';

export const HomePage: React.FC = () => {
  const mentorListRef = useRef<HTMLDivElement>(null);
  const scrollToMentorList = () => {
    if (mentorListRef.current) {
      mentorListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container sx={{ mt:5}} maxWidth="xl">
      <Logo />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          py: 8,
          px: 5,
          backgroundColor: '#ffffff',
        }}
        borderRadius={6}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ height: '100%'}}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', color: '#000000', fontSize:'2.1rem', fontWeight:'500' }}
            maxWidth="md"
          >
            Asesorías personalizadas para alumnas
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: '#000000',
              mt: 2,
              mb: 3,
              fontSize: '1rem',
            }}
            maxWidth="sm"
          >
            ¿Tienes una idea de negocio y no sabes cómo lanzarla?
          </Typography>
          <Button onClick={scrollToMentorList} variant="contained" color="secondary" sx={{ width: '180px', height: '40px' }}>
            Agenda Aquí
          </Button>
        </Grid>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: 'gray',
                mt: 8,
                mb: 5,
                fontSize: '1.5rem',
              }}
            >
              Beneficios del Laboratorio de Ideas
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ flexGrow: 1 }}
          height="auto"
        >
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '80px' }}>
              <CardHeader
                title="Mentorías personalizadas con expertos en diversas áreas."
                avatar={<Icon><EmojiObjectsOutlined /></Icon>}
                fontSize="large"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '80px' }}>
              <CardHeader
                title="Aclaración de dudas y asesoramiento estratégico"
                avatar={<Icon><HelpOutlined /></Icon>}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '80px' }}>
              <CardHeader
                title="Conexión con una comunidad emprendedora sólida"
                avatar={<Icon><GroupWork /></Icon>}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box ref={mentorListRef}>
        <MentorList />
      </Box>
      <Box >
        <Testimonials />
      </Box>
      <Box >
        <BecomeMentor />
      </Box>
    </Container>
  );
};

export default HomePage;
