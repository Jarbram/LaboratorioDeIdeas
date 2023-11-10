import React from 'react';
import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';

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
    <Card>
      <CardMedia component="img" height="450" image={mentor.foto} alt="Mentor" />
      <CardContent>
      <Typography variant="h6" sx={{ mb: 1.5 }}>
          {mentor.nombre}
        </Typography>
        <Divider />
        <CardContent sx={{alignItems:'center'}}>
        <Typography  
        sx={{ 
          mt: 1.5, 
          color: 'black',
          }}>
          {mentor.especialidad}
        </Typography>
        </CardContent>
        <Divider sx={{ mt: 1.5 }} />
        <Typography sx={{ mt: 1.5, letterSpacing:1.2 }}>{mentor.descripcion}</Typography>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
