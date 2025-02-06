import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import bgImage from '../images/sgt_home_bg.webp'; // Import the background image

const Home = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: 4,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${bgImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff', // Ensure text is readable on the background
      }}
    >
      <Typography variant="h2" gutterBottom sx ={{color:'black'}}> 
        Welcome to Seam Green Technologies
      </Typography>
      <Typography variant="h5" paragraph sx ={{color:'black'}}>
        We provide innovative technology solutions for sustainable business growth.
      </Typography>
      {/* <Button variant="contained" color="primary" size="large">
        Learn More
      </Button> */}
    </Box>
  );
};

export default Home;
