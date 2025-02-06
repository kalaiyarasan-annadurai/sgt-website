import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const Services = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{
        padding: 4,
        backgroundColor: '#f4f6f8',  // Mild background color
        minHeight: '100vh',  // Full viewport height
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            boxShadow: 3,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',  // Slight zoom effect on hover
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              SEO Services
            </Typography>
            <Typography variant="body2" paragraph>
              We optimize websites for search engines to help small businesses improve their online visibility, increase sales, and grow strategically.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ '&:hover': { backgroundColor: '#1976d2' } }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            boxShadow: 3,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Website Development
            </Typography>
            <Typography variant="body2" paragraph>
              From simple websites to complete e-commerce platforms, we create scalable web solutions tailored to your business needs.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ '&:hover': { backgroundColor: '#1976d2' } }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            boxShadow: 3,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Custom Software Development
            </Typography>
            <Typography variant="body2" paragraph>
              We design and develop custom software solutions using the latest technologies to meet your unique requirements.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ '&:hover': { backgroundColor: '#1976d2' } }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Services;
