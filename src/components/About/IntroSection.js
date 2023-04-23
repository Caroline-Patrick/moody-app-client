import React from 'react';
import { Box, Paper, Typography, Card, styled } from '@mui/material';

const StyledPaper = styled(Paper)({
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
});

export const IntroSection = () => {
  return (
    <div className="intro-section">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(to bottom right, #480075, #9a4a9f)',
          gap: '1rem',
        }}
      >
        <StyledPaper elevation={3}>
          <Box >
            <Typography variant="h1" sx={{ fontSize: 72, color: '#480075' }}>
              MOODY:
            </Typography>
            <Typography sx={{ fontSize: 60, color: '#480075' }}>
              Emotional Literacy for a Happier You
            </Typography>
          </Box>
        </StyledPaper>
       
      </Box>
    </div>
  );
};
