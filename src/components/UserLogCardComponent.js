import React from "react";
import {Button, Card, CardHeader, Container, CardContent, Typography }from "@mui/material";

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
      <Card sx={{ maxWidth: 345, bgcolor: log.color, color: "white" }}>
        <CardHeader
          subheader={formatDate(log.createDate, log.createTime)}
          title={`Mood: ${log.subsubMoodName}`}
          titleTypographyProps={{  color: "inherit", fontSize: 30 }} // Set title's color to inherit from Card color
          subheaderTypographyProps={{ color: "inherit", fontSize:20}} // Set subheader's color to inherit from Card color
        ></CardHeader>
        <CardContent>
          <Button className="log-history-button" onClick={handleClick} sx={{backgroundColor: 'white', color: "#210036"}}>
            See more
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};
