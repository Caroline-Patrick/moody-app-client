import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Button, TextField, Box, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

export const LogFormComponent = ({ visible, data, onHide, token, userId }) => {
  const [description, setDescription] = useState('');
  const [userNotes, setUserNotes] = useState('');

  const moodName = data ? data.name : '';

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
    axios.post(`http://localhost:5000/userLogs/create/${userId}/${moodName}`,{
        userNotes
    }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response)=>{
        console.log(response.data)
      }).catch((error)=> {
        console.log(error)
      });
      setUserNotes("")
    onHide();
  };

  if (!visible) {
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
            Submit
          </Button>
        
        <Button variant="contained" onClick={onHide}>
          Close
        </Button>
        </div>
        </form>
        </CardContent>
        </Card>
      </Container>
    </div>
  );
};
