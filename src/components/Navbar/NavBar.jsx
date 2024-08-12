import React from 'react';
import { Box, Button } from '@mui/material';
import logo from "../../../library/DecorIT Black_Transparent.png"

const NavBar = () => {
  return (
    <Box sx={
      {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        bgcolor: "white",
        color:"white"
      }
    }>
     <img src={logo} className='h-14'/>
     

      <Box>
        <Button variant="contained" color="primary"> dsd </Button>
        <Button variant="contained" color="primary"> dsd </Button>
        <Button variant="contained" color="primary"> dsd </Button>
        <Button variant="contained" color="primary"> dsd </Button>
        <Button variant="contained" color="primary"> dsd </Button>
      </Box>
    </Box>
  );
}

export default NavBar;
