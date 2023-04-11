import {useEffect, useState} from "react";
import axios from 'axios';
import './App.css';

import { SigninComponent } from "./components/SigninComponent";

function App() {
  const [token, setToken] =useState("");

  useEffect(()=>{
    axios.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response)=> console.log(response))
  },[])


  return (
    <div className="App">
     <SigninComponent setToken={setToken}/>
    </div>
  );
}

export default App;
