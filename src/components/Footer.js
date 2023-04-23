import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Box sx={{ padding: 2, borderTop: '1px solid #ccc' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        &copy; {new Date().getFullYear()} Moody. All rights reserved.
      </Typography>
    </Box>
  );
};


