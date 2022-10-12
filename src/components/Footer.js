import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/icons/dumbbell.png';

const Footer = () => (
  <Box mt="0" bgcolor="#002984">
    <Stack gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="20px" pt="24px" >
    <img src={Logo} alt='logo' style={{width: '50px', height: '50px', margin: '0 20px'}} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Fitness Gym</Typography>
  </Box>
);

export default Footer;