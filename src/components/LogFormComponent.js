import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Button, TextField } from '@mui/material';
import axios from 'axios';

export const LogFormComponent = ({ visible, data, onHide }) => {
  const [description, setDescription] = useState('');
  const moodName = data ? data.name : '';

  useEffect(() => {
    if (visible && moodName) {
      axios
        .get(`http://localhost:5000/log/moods/tier3/${moodName}`)
        .then((response) => {
          setDescription(response.data[0].subSubMoodDesc)
        });
    }
  }, [visible, moodName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onHide();
  };

  if (!visible) {
    return null;
  }

  return (
    <div>
      <Container>
        {moodName}: {description}
        <form onSubmit={handleSubmit}>
          <TextField
            id="filled-basic"
            label="What are you feeling?"
            variant="filled"
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
        <Button variant="contained" onClick={onHide}>
          Close
        </Button>
      </Container>
    </div>
  );
};
