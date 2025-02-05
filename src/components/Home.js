import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Seam Green Technologies
      </Typography>
      <Typography variant="h5" paragraph>
        We provide innovative technology solutions for sustainable business growth.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Learn More
      </Button>
    </Box>
  );
};

export default Home;
