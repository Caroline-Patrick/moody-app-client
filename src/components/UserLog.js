import React from 'react'

export const UserLog = ({userId, token, selectedLog}) => {
  return (

<>
    <div className="userLog-container">
      <ul className="list">
          <li className="log">
              {selectedLog}
          </li>
      </ul>
  </div>
  </>
)}

