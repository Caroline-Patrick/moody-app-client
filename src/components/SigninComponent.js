import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from "../AuthContext";

export const SigninComponent = () => {
    const { token, userId, setToken, setUserId } = useContext(AuthContext);
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
                   setUserId(response.data.user.userId)})
                    navigate("/log")

            }}
        >

        <label className='label'>
            Email:
            <input className='input' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <label className='label'>
            Password:
            <input className='input' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </label>
            <input type="submit" value="Sign in"/>

        </form>
    </>
  )
}

