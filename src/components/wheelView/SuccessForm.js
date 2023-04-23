import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

export const SuccessForm = ({ message, setLogSubmitted, setSuccessMessage}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/userlogs");
  };


  const handleCreateClick =()=> {
    setLogSubmitted(false)
    setSuccessMessage("")
  }

  return (
    <Card sx={{margin: '1rem'}}>
      <CardContent>
        <Typography
          variant="h6"
          color="success"
        >
          {message}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClick}
        >
          View Log History
        </Button>

        <Button
          variant="contained"
          onClick={handleCreateClick}
        >
          Create New Log
        </Button>
      </CardContent>
    </Card>
  );
};
