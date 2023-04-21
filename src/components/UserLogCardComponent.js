import React from "react";
import {Button, Card, CardHeader, Container, CardContent }from "@mui/material";

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

export const UserLogCardComponent = ({ log, onClick }) => {
  const handleClick = () => {
    onClick(log);
  };

  return (
    <Container>
      <Card
        
        sx={{ maxWidth: 345, bgcolor: log.color }}
      >
        <CardHeader
          subheader={formatDate(log.createDate, log.createTime)} // Use formatDate to format the date and time
          title={`Mood: ${log.subsubMoodName}`}
        />
         <CardContent>
          <Button className= "log-history-button" onClick={handleClick}>See more</Button>
        </CardContent>
      </Card>
    </Container>
  );
};
