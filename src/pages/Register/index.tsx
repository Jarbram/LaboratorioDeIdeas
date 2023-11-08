import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const paperStyle = {
  padding: '20px',
  margin: '20px 0',
};

const buttonStyle = {
  marginTop: '20px',
};

export const MentorRegistrationPage: React.FC = () => {
  const [mentorData, setMentorData] = useState({
    correo: '',
    descripcion: '',
    disponibilidad: [],
    especialidad: '',
    foto: '',
    nombre: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [disponibilidades, setDisponibilidades] = useState<string[]>([]);

  const handleAddAvailability = () => {
    if (selectedDate && selectedTime) {
      const availability = `${selectedDate.toLocaleDateString()} ${selectedTime.toLocaleTimeString()}`;
      setDisponibilidades([...disponibilidades, availability]);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const handleRegistrationSubmit = () => {
    const mentorInfo = {
      ...mentorData,
      disponibilidad: disponibilidades,
    };
    // Aquí puedes enviar los datos del mentor a Firebase para el registro.
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h4" gutterBottom>
          Registro de Mentor
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              fullWidth
              value={mentorData.nombre}
              onChange={(e) => setMentorData({ ...mentorData, nombre: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Correo"
              fullWidth
              value={mentorData.correo}
              onChange={(e) => setMentorData({ ...mentorData, correo: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Especialidad"
              fullWidth
              value={mentorData.especialidad}
              onChange={(e) => setMentorData({ ...mentorData, especialidad: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descripción"
              fullWidth
              multiline
              rows={4}
              value={mentorData.descripcion}
              onChange={(e) => setMentorData({ ...mentorData, descripcion: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="URL de la Foto de Perfil"
              fullWidth
              value={mentorData.foto}
              onChange={(e) => setMentorData({ ...mentorData, foto: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha de Disponibilidad"
                value={selectedDate}
                onChange={(date: Date | null) => setSelectedDate(date)}
              />
              <TimePicker
                label="Hora de Disponibilidad"
                value={selectedTime}
                onChange={(time: Date | null) => setSelectedTime(time)}
              />
            </LocalizationProvider>
            <Button variant="contained" onClick={handleAddAvailability} style={buttonStyle}>
              Agregar Disponibilidad
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {disponibilidades.length > 0 && (
        <Paper elevation={3} style={paperStyle}>
          <Typography variant="h5" gutterBottom>
            Disponibilidades Agregadas
          </Typography>
          <ul>
            {disponibilidades.map((disponibilidad, index) => (
              <li key={index}>{disponibilidad}</li>
            ))}
          </ul>
        </Paper>
      )}
      <Button variant="contained" onClick={handleRegistrationSubmit} style={buttonStyle}>
        Registrarse como Mentor
      </Button>
    </Container>
  );
};
