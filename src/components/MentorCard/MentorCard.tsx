import React from 'react';
import { Card, CardContent, CardMedia, Divider, Typography, Grid, Box } from '@mui/material';

interface Mentor {
  nombre: string;
  foto: string;
  descripcion: string;
  especialidad: string;
}

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <Box maxWidth="600px" mx="auto">
      <Card>
        <Grid container >
          <Grid item xs={12} sm={6} >
            <CardMedia
              component="img"
              height="200"
              image={mentor.foto}
              alt="Mentor"
              sx={{ objectFit: 'cover', height: '100%', width: '100%',borderRadius: 4 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent sx={{borderRadius: 4}}>
              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                {mentor.nombre}
              </Typography>
              <Divider />
              <Typography sx={{  color: 'black', textAlign: 'center'}} mb={2}>
                {mentor.especialidad}
              </Typography>
              <Divider />
              <Typography color={'textSecondary'} sx={{ letterSpacing: 1.2, textAlign: 'center' }}>
                {mentor.descripcion}
              </Typography>  
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default MentorCard;
