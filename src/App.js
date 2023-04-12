import {useEffect, useState} from "react";
import axios from 'axios';

import {Routes, Route} from 'react-router-dom';
import { SigninComponent } from "./components/SigninComponent";
import './App.css';
import { UserLogsComponent } from "./components/UserLogsComponent";



function App() {
  const [token, setToken] =useState("");

  useEffect(()=>{
    axios.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response)=> console.log(response))
  },[token])


  return (
    <div className="App">
       <Routes>
            <Route exact path="/" element={<SigninComponent setToken={setToken}/>} />
            <Route path="/userlogs" element={<UserLogsComponent/>} />
  
            
        </Routes>
     
    </div>
  );
}

export default App;
