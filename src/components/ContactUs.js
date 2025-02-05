import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form>
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: 'auto' }}>
          <TextField label="Your Name" variant="outlined" margin="normal" />
          <TextField label="Your Email" variant="outlined" margin="normal" />
          <TextField label="Message" variant="outlined" margin="normal" multiline rows={4} />
          <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
            Send Message
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactUs;
