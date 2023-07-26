import React from 'react';
import { Button, DialogActions, DialogContent, TextField, Typography } from '@mui/material';

interface RequestFormProps {
  name: string;
  email: string;
  message: string;
  onChangeName: (name: string) => void;
  onChangeEmail: (email: string) => void;
  onChangeMessage: (message: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  disabled: boolean;
}

const RequestForm: React.FC<RequestFormProps> = ({
  name,
  email,
  message,
  onChangeName,
  onChangeEmail,
  onChangeMessage,
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
        En el mensaje describe tu idea de negocio y la duda o problema específico que deseas solucionar con la mentoría.
        </Typography>
        <TextField
          margin="dense"
          id="message"
          label="Mensaje"
          multiline
          rows={4}
          fullWidth
          value={message}
          onChange={(e) => onChangeMessage(e.target.value)}
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
