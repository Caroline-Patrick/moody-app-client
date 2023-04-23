import React from 'react';
import { Button, Box, Paper, Typography, Card, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const StyledPaper = styled(Paper)({
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
});

export const IntroSection = () => {
  
const navigate = useNavigate()  

  return (
    <div className="intro-section">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
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
       <Button onClick={()=>{navigate("/signup")}}sx={{fontSize:20}}>Get Started!</Button>
      </Box>
    </div>
  );
};
