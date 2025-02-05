import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: 2, textAlign: 'center',mt:56 }}>
      <Typography variant="body2">&copy; 2025 Seam Green Technologies</Typography>
      <Box sx={{ marginTop: 1 }}>
        <Link href="https://www.linkedin.com" color="inherit" sx={{ margin: 1 }}>LinkedIn</Link>
        <Link href="https://twitter.com" color="inherit" sx={{ margin: 1 }}>Twitter</Link>
        <Link href="https://www.facebook.com" color="inherit" sx={{ margin: 1 }}>Facebook</Link>
      </Box>
    </Box>
  );
};

export default Footer;
