import { useState} from "react";
import {Routes, Route} from 'react-router-dom';
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
import { SigninComponent } from "./components/SigninComponent";
import { UserLogsListComponent } from "./components/UserLogsListComponent";
import {MoodsComponent} from "./components/MoodsComponent"
import {EmotionWheel} from "./components/EmotionWheel";

import './App.css';


function App() {
  const [token, setToken] =useState("");
  const [userId, setUserId] = useState(null);


  return (
    <div className="App">
      <ResponsiveAppBar/>
       <Routes>
            <Route exact path="/" element={<SigninComponent setToken={setToken} setUserId={setUserId}/>} />
            <Route path="/userlogs" element={<UserLogsListComponent token={token} userId={userId} setUserId={setUserId}/>} />
            <Route path="/log" element={<EmotionWheel token={token} userId={userId}/>} />

            
        </Routes>
    
    </div>
  );
}


export default App;
