import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Button, TextField, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

export const LogFormComponent = ({ visible, data, onHide, token, userId, log, onCancel}) => {
  const [description, setDescription] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const [formData, setFormData] = useState({
    subsubMoodName: log?.subsubMoodName || "",
    userNotes: log?.userNotes || ""
  
  });

  const moodName = log ? log.subsubMoodName : data ? data.name : "";

   console.log(`Token: ${token}, userId: ${userId}, ${moodName}`)


  
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
       
        <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-multiline-static"
          label="What's happening?"
          multiline
          rows={4}
          defaultValue=""
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
        
        <Button variant="contained" onClick={onHide}>
          Close
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
