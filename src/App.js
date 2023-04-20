import { useState} from "react";
import {Routes, Route} from 'react-router-dom';
import AuthContext from "./AuthContext";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
import { SigninComponent } from "./components/SigninComponent";
import { UserLogsListComponent } from "./components/UserLogsListComponent";
import {EmotionWheel} from "./components/EmotionWheel";
import { UserLog } from "./components/UserLog";

import './App.css';


function App() {
  const [token, setToken] =useState("");
  const [userId, setUserId] = useState(null);


  return (
    <div className="App">
     <AuthContext.Provider value={{ token, userId, setToken, setUserId }}>
      <ResponsiveAppBar/>
       <Routes>
            <Route exact path="/" element={<SigninComponent />} />
            <Route path="/userlogs" element={<UserLogsListComponent />} />
            <Route path="/log" element={<EmotionWheel />} />
            <Route path="/userlog" element={<UserLog />} />
            
        </Routes>
        </AuthContext.Provider>
    </div>
  );
}


export default App;
