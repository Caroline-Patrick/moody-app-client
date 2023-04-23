import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../AuthContext";
import { UserLogCardComponent } from "./UserLogCardComponent";
import { UserLog } from "./UserLog";

export const UserLogsListComponent = ({ setSuccessMessage }) => {
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
      .get(`https://moody-app-server.vercel.app/userLogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId: userId,
        },
      })
      .then((response) => {
        setUserLogs(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, [refreshData]);

  //function to sort user logs in descending order
  const sortUserLogs = (logs) => {
    return logs.sort((a, b) => {
      const dateTimeA = `${a.createDate}T${a.createTime}`;
      const dateTimeB = `${b.createDate}T${b.createTime}`;
      return dateTimeB.localeCompare(dateTimeA);
    });
  };

  const sortedUserLogs = sortUserLogs(userLogs);

  if (selectedLog) {
    return (
      <UserLog
        selectedLog={selectedLog}
        onBackClick={handleBackClick}
      />
    );
  } else {
    return (
      <>
        <div className="userLog-container">
          {sortedUserLogs.length > 0 ? (
            <ul className="list">
              {sortedUserLogs.map((log, index) => {
                return (
                  <li
                    className="log"
                    key={`userlog-${index}`}
                  >
                    <UserLogCardComponent
                      log={log}
                      onClick={handleClick}
                      setSuccessMessage={setSuccessMessage}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <h1>No user logs found.</h1>
          )}
        </div>
      </>
    );
  }
};
