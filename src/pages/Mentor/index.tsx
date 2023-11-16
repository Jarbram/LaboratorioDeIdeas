import React, { useEffect, useState } from 'react';
import { Link, useParams, } from 'react-router-dom';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import emailjs from 'emailjs-com';
import { Button, Container, Dialog, DialogTitle, Grid, IconButton, Typography } from '@mui/material';
import MentorCard from '../../components/MentorCard/MentorCard';
import AvailabilityTable from '../../components/AvailabilityTable/AvailabilityTable';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import RequestForm from '../../components/RequestForm/RequestForm';
import { UseNotification } from '../../context/notification.context';

interface Mentor {
  id: string | number;
  foto: string;
  nombre: string;
  correo: string;
  especialidad: string;
  descripcion: string;
  disponibilidad: string;
}

interface Availability {
  date: string;
  time: string;
}

export const MentorPage: React.FC = () => {
  const { id } = useParams();
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [selectedAvailability, setSelectedAvailability] = useState<Availability | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const { getSuccess, getError } = UseNotification();

  const getMentorId = async (id: string | undefined) => {
    try {
      const querySnapshot = await getDocs(collection(db, "mentores"));
      const mentors: Mentor[] = [];
      querySnapshot.forEach((doc) => {
        mentors.push({
          id: doc.id,
          foto: doc.data().foto,
          nombre: doc.data().nombre,
          correo: doc.data().correo,
          especialidad: doc.data().especialidad,
          descripcion: doc.data().descripcion,
          disponibilidad: doc.data().disponibilidad,
        });
      });
      const mentor = mentors.find((mentor) => mentor.id === id);
      setMentor(mentor || null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMentorId(id)
  }, [id]);

  const handleAvailabilitySelect = (availability: Availability) => {
    setSelectedAvailability(availability);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handleMessage1Change = (message1: string) => {
    setMessage1(message1);
  };

  const handleMessage2Change = (message2: string) => {
    setMessage2(message2);
  };

  const handleFormSubmit = async () => {
    if (!selectedAvailability || !name || !email || !message1 || !message2) {
      getError('Por favor, complete todos los campos antes de enviar la solicitud.');
      return;
    }
  
    const formattedMessage = `Hola me gustaria tener una mentoria con ${mentor?.nombre} , para el dia ${selectedAvailability.date} a las ${selectedAvailability.time}. Mi idea de negocio es ${message1} y tengo las siguientes dudas : ${message2} muchas gracias espero su confirmacion.`;
  
    const templateParams = {
      user_name: name,
      user_email: email,
      user_message: formattedMessage
    };
  
    try {
      await emailjs.send('service_qznwcat', 'template_gtnbu0m', templateParams, 'XjJE52L18M25XKyKM');
      getSuccess('Solicitud enviada con éxito, en breve recibirás un correo de confirmación.');
    } catch (error) {
      getError('Error al enviar el correo');
      return;
    }
  
    // Actualizamos el estado local del mentor con la disponibilidad actualizada
    if (mentor) {
      const newDisponibilidad = mentor.disponibilidad
        .split(';')
        .filter((availability) => {
          const [date, time] = availability.trim().split(' ');
          return !(date === selectedAvailability.date && time === selectedAvailability.time);
        })
        .join(';');
  
      setMentor({
        ...mentor,
        disponibilidad: newDisponibilidad
      });
    }

    UpdateDisponibilidad(id, selectedAvailability);
  
    handleDialogClose();
  };

  const UpdateDisponibilidad = async (mentorId: string | undefined, selectedAvailability: Availability) => {
    try {
      if (mentorId) {
        const mentorRef = doc(db, "mentores", mentorId);
        const mentorSnapshot = await getDocs(collection(db, "mentores"));
        const mentors: Mentor[] = [];
        mentorSnapshot.forEach((doc) => {
          mentors.push({
            id: doc.id,
            foto: doc.data().foto,
            nombre: doc.data().nombre,
            correo: doc.data().correo,
            especialidad: doc.data().especialidad,
            descripcion: doc.data().descripcion,
            disponibilidad: doc.data().disponibilidad,
          });
        });
        const mentorToUpdate = mentors.find((mentor) => mentor.id === mentorId);

        if (mentorToUpdate) {
          const newDisponibilidad = mentorToUpdate.disponibilidad
            .split(';')
            .filter((availability) => {
              const [date, time] = availability.trim().split(' ');
              return !(date === selectedAvailability.date && time === selectedAvailability.time);
            })
            .join(';');

          await updateDoc(mentorRef, { disponibilidad: newDisponibilidad });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="xl">
    <div>
    <IconButton
  color="secondary"
  component={Link}
  to="/"
  sx={{
    left: 0,
    top: 10,
    padding: 1, // Ajusta el tamaño del botón
  }}
>
  <ArrowBackIosNewOutlined />
  <span style={{ marginLeft: 4 }}>Volver</span>
</IconButton>
      {mentor ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          flexDirection={'column'}
        >
         <Grid item xs={12} sx={{ mb: 10, mt: 10, alignItems: 'center', textAlign: 'center' }}>
  <MentorCard mentor={mentor} />
  {mentor.disponibilidad ? (
    <AvailabilityTable
      availabilities={mentor.disponibilidad.split(';').map((availability) => {
        const [date, time] = availability.trim().split(' ');
        return { date, time };
      })}
      selectedAvailability={selectedAvailability}
      onSelectAvailability={handleAvailabilitySelect}
    />
  ) : (
    <Typography variant="h4" sx={{ mt: 2, color: 'primary' }}>
      Mentorías agotadas
    </Typography>
  )}
  <Button
    variant="contained"
    color='secondary'
    onClick={handleDialogOpen}
    disabled={!selectedAvailability || !mentor.disponibilidad}
    sx={{ mt: 4 }}
  >
    Solicitar Asesoría
  </Button>
</Grid>
          </Grid>
        ) : (
          <Typography>Cargando mentor...</Typography>
        )}
      </div>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Solicitud de Asesoría</DialogTitle>
        <RequestForm
          name={name}
          email={email}
          message1={message1}
          message2={message2}
          onChangeName={handleNameChange}
          onChangeEmail={handleEmailChange}
          onChangeMessage1={handleMessage1Change}
          onChangeMessage2={handleMessage2Change}
          onSubmit={handleFormSubmit}
          onCancel={handleDialogClose}
          disabled={!selectedAvailability || !name || !email || !message1 || !message2}
        />
      </Dialog>
    </Container>
  );
};
