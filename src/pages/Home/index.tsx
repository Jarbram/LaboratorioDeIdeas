import React, {useRef} from 'react';
import { Box, Button, Card, CardHeader, Container,  Grid, Icon, Typography } from '@mui/material';
import { MentorList } from '../../components/MentorList';
import { EmojiObjectsOutlined, GroupWork, HelpOutlined } from '@mui/icons-material';

export const HomePage: React.FC = () => {
  const mentorListRef = useRef<HTMLDivElement>(null);
  const scrollToMentorList = () => {
    if (mentorListRef.current) {
      mentorListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container sx={{ mt: 8 }} maxWidth="xl">
      <Box
        sx={{ width: '100%',display: 'flex', flexDirection: 'column', justifyContent: 'space-between', py: 8, px: 5, backgroundColor: '#ffffff'}}
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
            variant="h4"
            sx={{ textAlign: 'center', color: '#000000' }}
            maxWidth={"md"}
          >
            Asesorías personalizadas para emprendedores
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', color: '#000000', mt: 2, mb: 3, fontSize: '1rem' }}
            maxWidth={"sm"}
          >
            ¿Tienes una idea de negocio y no sabes cómo lanzarla?
          </Typography>
          <Button onClick={scrollToMentorList} variant="contained" color="primary" sx={{ width: '180px', height: '40px' }}>
            Agenda Aquí
          </Button>
        </Grid>
      </Box>
      <Box
        sx={{ width: '100%' }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ textAlign: 'center', color: 'gray', mt: 8, mb:5, fontSize: '1.5rem' }}
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
            <Card sx={{ height: '80px'}}>
              <CardHeader
                title="Mentorías personalizadas con expertos en diversas áreas."
                avatar={<Icon><EmojiObjectsOutlined /></Icon>}
                fontSize="large"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '80px'}}>
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
        <MentorList  />
      </Box>
    </Container>
  );
};

export default HomePage;
