import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const Services = () => {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{ padding: 4 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Consulting
            </Typography>
            <Typography variant="body2" paragraph>
              We offer consulting services to help your company adopt sustainable technology solutions.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Custom Software Development
            </Typography>
            <Typography variant="body2" paragraph>
              Our team develops custom software designed with sustainability in mind.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Green Tech Solutions
            </Typography>
            <Typography variant="body2" paragraph>
              We help businesses implement eco-friendly tech solutions that reduce their carbon footprint.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Services;
