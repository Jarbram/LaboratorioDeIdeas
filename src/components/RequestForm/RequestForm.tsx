import React from 'react';
import { Button, DialogActions, DialogContent, TextField, Typography } from '@mui/material';

interface RequestFormProps {
  name: string;
  email: string;
  message1: string;
  message2: string;
  onChangeName: (name: string) => void;
  onChangeEmail: (email: string) => void;
  onChangeMessage1: (message: string) => void;
  onChangeMessage2: (message: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  disabled: boolean;
}

const RequestForm: React.FC<RequestFormProps> = ({
  name,
  email,
  message1,
  message2,
  onChangeName,
  onChangeEmail,
  onChangeMessage1,
  onChangeMessage2,
  onSubmit,
  onCancel,
  disabled,
}) => {
  return (
    <>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nombre Completo"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="email"
          label="Correo Electrónico"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => onChangeEmail(e.target.value)}
        />
        <Typography variant="body2" sx={{ mt: 2 }}>
        Describe tu idea de negocio.
        </Typography>
        <TextField
          margin="dense"
          id="message"
          label="Idea de negocio"
          multiline
          rows={4}
          fullWidth
          value={message1}
          onChange={(e) => onChangeMessage1(e.target.value)}
        />
         <Typography variant="body2" sx={{ mt: 2 }}>
        Describe las dudas o problemas que te gustaria resolver.
        </Typography>
        <TextField
          margin="dense"
          id="message"
          label="Duda"
          multiline
          rows={4}
          fullWidth
          value={message2}
          onChange={(e) => onChangeMessage2(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button onClick={onSubmit} disabled={disabled}>
          Enviar
        </Button>
      </DialogActions>
    </>
  );
};

export default RequestForm;
