import { useState} from "react";
import {Routes, Route} from 'react-router-dom';

import { SigninComponent } from "./components/SigninComponent";
import { UserLogsComponent } from "./components/UserLogsComponent";
import {MoodsComponent} from "./components/MoodsComponent"
import './App.css';


function App() {
  const [token, setToken] =useState("");
  const [userId, setUserId] = useState(null);


  return (
    <div className="App">
       <Routes>
            <Route exact path="/" element={<SigninComponent setToken={setToken} setUserId={setUserId}/>} />
            <Route path="/userlogs" element={<UserLogsComponent token={token} userId={userId} setUserId={setUserId}/>} />
            <Route path="/log" element={<MoodsComponent token={token} />} />

            
        </Routes>
     
    </div>
  );
}

export default App;
