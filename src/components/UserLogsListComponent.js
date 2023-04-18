import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserLogCardComponent } from "./UserLogCardComponent";
import {UserLog} from "./UserLog";

export const UserLogsListComponent = ({ token, userId }) => {
  const [userLogs, setUserLogs] = useState([]);
  const [selectedLog, setSelectedLog] =useState(null)


const handleClick =(selectedLog)=> {
  setSelectedLog(selectedLog)
};

const handleBackClick =()=> {
  setSelectedLog(null)
};

  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userLogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId: userId,
        },
      })
      .then((response) => {
        console.log("made it");
        console.log(response);
        setUserLogs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if(selectedLog) {
    return <UserLog selectedLog={selectedLog} onBackClick={handleBackClick} />
  } else {
  return (
    <>
    <div className="userLog-container">
      {userLogs.length > 0 ? (
        <ul className="list">
          { userLogs.map((log, index) => {
            console.log(log); // Debug the log object
            return (
              <li className="log" key={`userlog-${index}`}>
                <UserLogCardComponent userId={userId} log={log} token={token}/>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No user logs found.</p>
      )}
    </div>
  </>
  );
}}
