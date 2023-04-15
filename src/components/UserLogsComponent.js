import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const UserLogsComponent = ({token, userId}) => {
  
  const [userLogs, setUserLogs]=useState([]);

  
  useEffect(()=>{
    axios.get(`http://localhost:5000/userLogs/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response)=>{
      console.log(response)
        setUserLogs(response.data);
        
    })
  }, [token]);
  return (
    <>
      <div className="userLog-container">
      {userLogs.length > 0 ? (
  <ul className="list">
    {userLogs.map((item, index)=>{
      return(
        <li className="item" key={`userlog-${index}`}>
          {item.logId}
        </li>
      )
    })}
  </ul>
) : (
  <p>No user logs found.</p>
)}

      </div>
    </>
  )
}

