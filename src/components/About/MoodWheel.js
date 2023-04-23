import React from "react";
import moodWheel from "../../images/moodWheel.png";
import { Box, Typography, Paper } from "@mui/material";

export const MoodWheel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to bottom right, #f1f1f1, #e0e0e0)",
        gap: "1rem",
        padding: "2rem",
      }}
      className="moodWheel-image-container"
    >
      <Box
        component="img"
        src={moodWheel}
        alt="Mood Wheel"
        className="moodWheel-image"
        sx={{
          maxHeight: "80%",
          maxWidth: "70%",
        }}
      />

      <Paper
        sx={{
          padding: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          color: "#480075",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography sx={{ fontSize: 40 }}>
          "The limits of my language mean the limits of my world."
          <br />
          <Typography sx={{ fontSize: 30 }}>- Ludwig Wittgenstein</Typography>
        </Typography>
      </Paper>
    </Box>
  );
};
