import React, {useState, useContext} from "react";
import axios from 'axios';
import AuthContext from "../AuthContext";
import {Card, CardHeader, CardContent, Typography, Container, Button, Box }from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { LogFormComponent } from "./LogFormComponent";

//change date + time into more readable format
const formatDate = (createDate, createTime) => {
  const date = new Date(createDate);
  date.setHours(...createTime.split(":").map(Number));

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const UserLog = ({selectedLog, onBackClick }) => {
  const [editIsClicked, setEditIsClicked] = useState(false);
  const { token, userId} = useContext(AuthContext);

  const handleEditClick = () => {
    setEditIsClicked(true);
  };

  const handleDeleteClick =()=>{
    axios
      .delete(`http://localhost:5000/userLogs/${userId}/${selectedLog.logId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => {
        console.log("made it to delete");
        console.log(response);
        onBackClick()
      })
      .catch((error) => {
        console.error(error);
      });
  };


  if (editIsClicked) {
    return (
      <LogFormComponent
        visible={editIsClicked}
        log={selectedLog}
        onCancel={() => setEditIsClicked(false)}
        editIsClicked={editIsClicked}
        onHide={() => setEditIsClicked(false)}
        onUpdate={()=> onBackClick()}
      />
    );
  } else {
  return (
    <Container>
      <Card sx={{ maxWidth: 900, bgcolor: selectedLog.color, position: "relative" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <EditIcon onClick={handleEditClick}/>
        </Box>
        <CardHeader
          subheader={formatDate(
            selectedLog.createDate,
            selectedLog.createTime
          )}
          title={`Mood: ${selectedLog.subsubMoodName}`}
        />
        <CardContent>
          <Typography paragraph>Notes: {selectedLog.userNotes}</Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <DeleteIcon onClick={handleDeleteClick}/>
        </Box>
      </Card>
      <Button onClick={onBackClick}>Back to all logs</Button>
    </Container>
  );
};
}
