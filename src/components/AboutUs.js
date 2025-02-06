import React from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Kalaiyarasan - CEO",
      description:
        "Kalaiyarasan has over 5 years of experience in leading tech companies towards sustainability.",
    },
    {
      name: "Ramakrishnan - CTO",
      description:
        "Ramakrishnan, the CTO of Seam Green Technologies, leads the development of cutting-edge technologies to create scalable and sustainable solutions.",
    },
    {
      name: "Chinnasamy - CFO",
      description:
        "Chinnasamy, the CFO of Seam Green Technologies, is committed to driving financial strategies that support scalable and eco-friendly solutions to address modern-day challenges.",
    },
    {
      name: "Adlin - CMO",
      description:
        "Adlin, the CMO of Seam Green Technologies, is dedicated to crafting innovative marketing strategies that amplify the company's mission of delivering scalable and eco-friendly solutions.",
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Seam Green Technologies is committed to providing cutting-edge tech
        solutions for a greener planet. We specialize in sustainable business
        practices, energy-efficient technology, and eco-friendly software
        solutions.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body2">{member.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
