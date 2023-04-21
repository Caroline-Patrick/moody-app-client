import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import mLogo from '../images/mLogoLongWhiteText.svg'
import mBlackLogo from '../images/moodyLogoOG.svg'

import {
  Container,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export const SignUpComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  

  const handleClick = (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages
    axios
      .post("http://localhost:5000/signup", { firstName, lastName, email, password })
      .then((response) => {
        console.log(response.data);
        navigate("/signin");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong. Please try again.");
        }
      });
  };
  

  return (
    <div className="signup-form-container">
      <Container>
        <Card>
        <div className="card-wrapper">
          <CardContent className="card-content">
          {error && (
              <Typography color="error" align="center">
                {error}
              </Typography>
            )}
            <br></br>
           
            <form onSubmit={handleClick}>
              <TextField
                required
                id="outlined-basic"
                label="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <br></br> <br></br>
              <TextField
                required
                id="outlined-basic"
                label="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <br></br> <br></br>
              <TextField
                required
                id="outlined-basic"
                label="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br></br> <br></br>
              <TextField
                required
                id="outlined-basic"
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br></br>
              <br></br>
              <div>
                <Button
                  variant="contained"
                  type="submit"
                >
                  Create Account
                </Button>
              </div>
            </form>
            
          </CardContent>
          <div className="image-container">
          <img className="card-image" src={mBlackLogo} />
          </div>
        </div>

        </Card>
       
      </Container>
    </div>
  );
};
