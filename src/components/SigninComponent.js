import React, {useState, useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from "../AuthContext";
import {
    Button,
    TextField,
    Typography,
  } from "@mui/material";


export const SigninComponent = () => {
    const { setToken, setUserId, setSignedIn, setUserName } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

  return (
    <>
        <form 
            className="form"
            onSubmit={(e)=>{
                e.preventDefault()

                axios.post("http://localhost:5000/signin", 
                {email,
                password}
                ).then((response)=>{
                    console.log( response)
                    setToken(response.data.token)
                    setUserId(response.data.user.userId)
                    setUserName(response.data.user.firstName)
                })
                    setSignedIn(true)
                    navigate("/log")

            }}
        >
            <TextField
                required
                className="signin-textfield"
                id="outlined-basic"
                label="Email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
              
              <TextField
                required
                className="signin-textfield"
                id="outlined-basic"
                label="Password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                type="password"
              />
             
                <Button
                  variant="contained"
                  type="submit"
            
                >
                  Sign In
                </Button>
            
        </form>
        <Typography >New around here? <Link className= "link" to="/signup">Create an account!</Link></Typography>
    </>
  )
}

