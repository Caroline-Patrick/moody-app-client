import { useState} from "react";
import {Routes, Route} from 'react-router-dom';
import AuthContext from "./AuthContext";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
import { LandingComponent } from "./components/LandingComponent";
import { UserLogsListComponent } from "./components/UserLogsListComponent";
import {EmotionWheel} from "./components/EmotionWheel";
import { UserLog } from "./components/UserLog";

import './App.css';
import { ThemeProvider } from "@mui/material";
import myTheme from "./theme/theme"


function App() {
  const [token, setToken] =useState("");
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] =useState("")
  const [signedIn, setSignedIn] =useState(false)


  return (
    <ThemeProvider theme={myTheme}>
    <div className="App">
     <AuthContext.Provider value={{ token, userId, setToken, setUserId, signedIn, setSignedIn, userName, setUserName }}>
      <ResponsiveAppBar/>
       <Routes>
            <Route exact path="/" element={<LandingComponent />} />
            <Route path="/userlogs" element={<UserLogsListComponent />} />
            <Route path="/log" element={<EmotionWheel />} />
            <Route path="/userlog" element={<UserLog />} />
            
        </Routes>
        </AuthContext.Provider>
    </div>
    </ThemeProvider>
  );
}


export default App;
