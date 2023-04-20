import React, {useContext} from "react";
import AuthContext from "../AuthContext";
import {Card, CardHeader, Container, CardContent, Typography }from "@mui/material";
import { blueGrey } from "@mui/material/colors";

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
  const { token, userId} = useContext(AuthContext);
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
         <CardContent>
          <Typography paragraph>See more</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
