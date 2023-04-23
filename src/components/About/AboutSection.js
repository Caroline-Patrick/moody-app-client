import { Typography, Box, Paper, styled } from '@mui/material';
import React from 'react';

const StyledPaper = styled(Paper)({
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  });

export const AboutSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to bottom right, #f1f1f1, #e0e0e0)',
        gap: '1rem',
      }}
    >
      <Paper
        sx={{
          padding: '2rem',
          borderRadius: '1rem',
          backgroundColor: 'rgba(72, 0, 117, 0.9)',
          color: 'white',
          width: '80%',
          minHeight: '80vh',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: 36, marginBottom: '1rem' }}>
          Inspired by Brené Brown's Atlas of the Heart
        </Typography>
        <Typography
          paragraph
          sx={{ fontSize: 18, lineHeight: 1.6, textAlign: 'justify' }}
        >
          Welcome to Moody, a mood tracking app designed to help you better
          understand your emotions and cultivate meaningful connections.
          <br />
          <br />
          Dr. Brown, a research professor at the University of Houston and
          visiting professor at the University of Texas at Austin, has spent
          over two decades exploring courage, vulnerability, shame, and
          empathy. Her work has culminated in multiple best-selling books
          and talks, including her renowned TED talk on the Power of
          Vulnerability.
          <br />
          <br />
          Atlas of the Heart guides us through a new framework for fostering
          deeper connections by mapping 87 emotions and experiences that
          shape our humanity. In a world where many people can only
          recognize a handful of emotions such as "mad, sad, and glad,"
          Moody aims to expand our emotional vocabulary, helping us navigate
          the vast landscape of human emotions and better relate to
          ourselves and others.
          <br />
          <br />
          At Moody, we believe that embracing our feelings and understanding
          the nuances between emotions are essential for meaningful
          conversations and self-awareness. Our app is designed to
          facilitate the ongoing journey of reflection, curiosity, empathy,
          and growth.
          <br />
          <br />
          Join us at Moody to embark on your own emotional exploration and
          foster more meaningful connections with yourself and others.
          Together, we can harness the power of emotional awareness and
          transform our lives one emotion at a time.
        </Typography>
        <StyledPaper elevation={3}>
          <Typography sx={{ fontSize: 20, color: '#480075' }}>
            "Learning to label emotions with a more nuanced vocabulary can be absolutely transformative.
            <br />
            <br />
            People who can identify the full spectrum of emotion—who realize how, for example, sadness differs from boredom, or pity, or loneliness, or nervousness—do much, much better at managing the ups and downs of ordinary existence than those who see everything in black and white."
            <br />
            <br />- Susan David, Ph.D.
          </Typography>
        </StyledPaper>
      </Paper>
    </Box>
  );
};

