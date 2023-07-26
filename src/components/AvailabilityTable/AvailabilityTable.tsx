import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

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
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Hora</TableCell>
            <TableCell>Seleccionar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {availabilities.map((availability, index) => {
            const { date, time } = availability;
            const isSelected = selectedAvailability?.date === date && selectedAvailability?.time === time;

            return (
              <TableRow key={index}>
                <TableCell>{date}</TableCell>
                <TableCell>{time}</TableCell>
                <TableCell>
                  <Button variant={isSelected ? "contained" : "outlined"} onClick={() => onSelectAvailability(availability)}>
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
