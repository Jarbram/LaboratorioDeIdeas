import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Availability {
  date: string;
  time: string;
}

interface AvailabilityTableProps {
  availabilities: Availability[];
  selectedAvailability: Availability | null;
  onSelectAvailability: (availability: Availability) => void;
}

const AvailabilityTable: React.FC<AvailabilityTableProps> = ({
  availabilities,
  selectedAvailability,
  onSelectAvailability,
}) => {
  return (
    <TableContainer component={Paper} sx={{ margin: 'auto', maxWidth: '800px',  borderRadius: 4,marginTop:'10px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Fecha
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Hora
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Seleccionar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {availabilities.map((availability, index) => {
            const { date, time } = availability;
            const isSelected = selectedAvailability?.date === date && selectedAvailability?.time === time;

            return (
              <TableRow key={index}>
                <TableCell align="center">{date}</TableCell>
                <TableCell align="center">{time}</TableCell>
                <TableCell align="center">
                  <Button
                    variant={isSelected ? 'contained' : 'outlined'}
                    color='secondary'
                    onClick={() => onSelectAvailability(availability)}
                    sx={{ minWidth: '120px' }}
                  >
                    Seleccionar
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AvailabilityTable;
