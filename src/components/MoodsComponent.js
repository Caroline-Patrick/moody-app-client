import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const MoodsComponent = ({token}) => {

    const [moodNames, setMoodNames] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/log/moods/tier1`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((response)=>{
          console.log(response.data)
            setMoodNames(response.data)
            
        })
      }, [token]);
  return (
    <>
    <div className="userLog-container">
    {moodNames.length > 0 ? (
<ul className="list">
  {moodNames.map((mood, index)=>{
    return(
      <li className="item" key={`userlog-${index}`}>
        {<button>{mood.moodName}</button> }
      </li>
    )
  })}
</ul>
) : (
<p>No user logs found.</p>
)}

    </div>
  </>  )
}

