import { Box, useTheme } from "@mui/material"
import React from "react"
import UDEP from "../assets/UDEP.png"
import WISE from "../assets/WISE.png"
import HUB from "../assets/HUB.png"

export const Logo: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        mt: '-20px',

        [theme.breakpoints.up('sm')]: {
          flexDirection: 'row',
          gap: '20px',
        },

        [theme.breakpoints.up('md')]: {
          gap: '40px',
        },

        [theme.breakpoints.up('lg')]: {
          gap: '60px',
        },
      }}
    >
      <img src={WISE} alt="logo" width="auto" height="200px" />

      <img src={UDEP} alt="logo" width="auto" height="100px" />

      <img src={HUB} alt="logo" width="auto" height="300px" />
    </Box>
  );
};
