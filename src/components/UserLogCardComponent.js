import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { blueGrey } from "@mui/material/colors";
import Container from "@mui/material/Container";

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

export const UserLogCardComponent = ({ userId, log, token, onClick }) => {
  const handleClick = (selectedLog) => {
    onClick(log);
  };

  return (
    <Container>
      <Card
        onClick={handleClick}
        sx={{ maxWidth: 345, bgcolor: blueGrey[200] }}
      >
        <CardHeader
          subheader={formatDate(log.createDate, log.createTime)} // Use formatDate to format the date and time
          title={`Mood: ${log.subsubMoodName}`}
        />
      </Card>
    </Container>
  );
};
