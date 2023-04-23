import { useState} from "react";
import {Routes, Route} from 'react-router-dom';
import AuthContext from "./AuthContext";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
import { LandingComponent } from "./components/About/LandingComponent";
import { UserLogsListComponent } from "./components/userlogs/UserLogsListComponent";
import {EmotionWheel} from "./components/EmotionWheel";
import { UserLog } from "./components/userlogs/UserLog";

import './App.css';
import { ThemeProvider } from "@mui/material";
import myTheme from "./theme/theme"
import { SigninComponent } from "./components/SigninComponent";
import { SignUpComponent } from "./components/SignUpComponent";
import { AboutSection } from "./components/About/AboutSection";



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
            <Route path="/signin" element={<SigninComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/about" element={<LandingComponent />} />
            
        </Routes>
        
        </AuthContext.Provider>
    </div>
    
    </ThemeProvider>
    
  );
}


export default App;
