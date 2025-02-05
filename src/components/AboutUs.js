import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Seam Green Technologies is committed to providing cutting-edge tech solutions for a greener planet. We specialize in sustainable business practices, energy-efficient technology, and eco-friendly software solutions.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">John Doe - CEO</Typography>
          <Typography variant="body2" paragraph>
            John has over 15 years of experience in leading tech companies towards sustainability.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Jane Smith - CTO</Typography>
          <Typography variant="body2" paragraph>
            Jane is passionate about developing scalable, eco-friendly solutions to solve modern-day challenges.
          </Typography>ß
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
