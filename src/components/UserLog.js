import React, {useState, useContext} from "react";
import axios from 'axios';
import AuthContext from "../AuthContext";
import {Card, CardHeader, CardContent, Typography, Container, Button, Box }from "@mui/material";
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
  const [successMessage, setSuccessMessage] = useState("");

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
        onHide={() => {
          setEditIsClicked(false)
          setSuccessMessage("");
        }}
        onUpdate={()=> onBackClick()}
      />
    );
  } else {
  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "25vh", // To make the container take up at least the full viewport height
    }}>
      <Card sx={{
       
       width: "80%",
        marginTop: 5,
        bgcolor: selectedLog.color,
        position: "relative",
        color: 'white'
      }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <EditIcon onClick={handleEditClick}/>
        </Box>
        <CardHeader
          subheader={formatDate(
            selectedLog.createDate,
            selectedLog.createTime
          )}
          title={`Mood: ${selectedLog.subsubMoodName}`}
          titleTypographyProps={{  color: "inherit", fontSize: 30 }} // Set title's color to inherit from Card color
          subheaderTypographyProps={{ color: "inherit", fontSize: 20 }} // Set subheader's color to inherit from Card color
        />
        <CardContent>
          <Typography paragraph sx={{fontSize: 20}}>Notes: {selectedLog.userNotes}</Typography>
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
      <Button sx={{backgroundColor: 'white', color: "#210036"}} onClick={onBackClick}>Back to all logs</Button>
    </Container>
  );
};
}
