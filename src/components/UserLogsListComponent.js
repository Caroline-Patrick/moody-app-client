import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../AuthContext";
import { UserLogCardComponent } from "./UserLogCardComponent";
import { UserLog } from "./UserLog";

export const UserLogsListComponent = () => {
  const { token, userId } = useContext(AuthContext);
  const [userLogs, setUserLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [refreshData, setRefreshData] = useState(false);

  const handleClick = (selectedLog) => {
    setSelectedLog(selectedLog);
  };

  const handleBackClick = () => {
    setSelectedLog(null);
    setRefreshData((prevState) => !prevState);
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
  }, [refreshData]);

  if (selectedLog) {
    return <UserLog selectedLog={selectedLog} onBackClick={handleBackClick} />;
  } else {
    return (
      <>
        <div className="userLog-container">
          {userLogs.length > 0 ? (
            <ul className="list">
              {userLogs.map((log, index) => {
                return (
                  <li className="log" key={`userlog-${index}`}>
                    <UserLogCardComponent
                      log={log}
                      onClick={handleClick}
                    />
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
  }
};
