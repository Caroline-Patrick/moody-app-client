import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../AuthContext';
import { Container, Button, TextField, Card, CardContent, Typography } from '@mui/material';


export const LogFormComponent = ({ visible, data, onHide, log, onCancel, editIsClicked, onUpdate}) => {
  const { token, userId} = useContext(AuthContext);

  const [description, setDescription] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const [formData, setFormData] = useState({
    subsubMoodName: log?.subsubMoodName || "",
    userNotes: log?.userNotes || "",
    logId: log?.logId || ""
  
  });

  const moodName = log ? log.subsubMoodName : data ? data.name : "";

   console.log(`Token: ${token}, userId: ${userId}, ${moodName}`)
   console.log(`log: ${formData.subsubMoodName}, userId: ${userId}, ${moodName}`)


  
  useEffect(() => {
    if (visible && moodName) {
      axios
        .get(`http://localhost:5000/log/moods/tier3/${moodName}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        .then((response) => {
          setDescription(response.data[0].subSubMoodDesc)
        });
    }
  }, [visible, moodName]);

const handleClick =(e) => {
  e.preventDefault();
  console.log("Edit is clicked?: " + editIsClicked)
  if(editIsClicked === true) {
    handleEditClick(e);
  } else {
    handleSubmit(e)
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      axios
        .post(
          `http://localhost:5000/userLogs/create/${userId}/${moodName}`,
          {
            userNotes,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setUserNotes("");
      onHide();
    }
  };

  const handleEditClick = (e) => {
    e.preventDefault();
   
      axios
        .put(
          `http://localhost:5000/userLogs/${userId}/${formData.logId}`,
          {
            userNotes,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          onUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
      onHide();
    
  };

  if (!visible) { 
    {console.log("it's not visible")}
    return null;
  }

  return (
    <div className="log-form-container">
      <Container >
        <Card>
        <CardContent>
        <Typography variant="h5" component="div">
        {moodName}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
        <br></br>
       
        <form onSubmit={handleClick}>
        <TextField
          id="outlined-multiline-static"
          label="What's happening?"
          multiline
          rows={4}
         defaultValue={formData.userNotes}
          onChange={((e)=>{
            setUserNotes(e.target.value)
          })}
          
        />
        <br></br>
        <br></br>
        <div>
          <Button variant="contained" type="submit">
            Save
          </Button>
        
          {onCancel && <button onClick={onCancel}>Cancel</button>}

      
        </div>
        </form>
        </CardContent>
        </Card>
      </Container>
    </div>
  );
};
