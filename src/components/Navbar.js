import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/icons/dumbbell.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ gap: { sm: '40px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'center', alignItems: 'center', backgroundColor: '#002984' }} px='20px' >
      <Link to="/">
        <FontAwesomeIcon icon={faAngleLeft} alt='logo' style={{fontSize: '1.8rem', color: "#FFF" }} />
      </Link>
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack direction='row' gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: 'none', color: '#FFF' }}>Home</Link>
        <a href='#exercises' style={{ textDecoration: 'none', color: "#FFF" }}>
          Exercises
        </a>
      </Stack>
      <FontAwesomeIcon icon={faMicrophone} alt='microphone' style={{ fontSize: '1.3rem', color: "#FFF" }} />
      <FontAwesomeIcon icon={faGear} style={{ color: "#FFF" }} />
    </Stack>

  )
}

export default Navbar
