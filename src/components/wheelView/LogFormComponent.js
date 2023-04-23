import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../AuthContext";
import {
  Container,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export const LogFormComponent = ({
  visible,
  data,
  onHide,
  log,
  onCancel,
  editIsClicked,
  onUpdate,
  setSuccessMessage,
  setLogSubmitted,
}) => {
  const { token, userId } = useContext(AuthContext);

  const [description, setDescription] = useState("");
  const [userNotes, setUserNotes] = useState("");
  const [formData, setFormData] = useState({
    subsubMoodName: log?.subsubMoodName || "",
    userNotes: log?.userNotes || "",
    logId: log?.logId || "",
  });

  const moodName = log ? log.subsubMoodName : data ? data.name : "";

  useEffect(() => {
    if (visible && moodName) {
      axios
        .get(`http://localhost:5000/log/moods/tier3/${moodName}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setDescription(response.data[0].subSubMoodDesc);
        });
    }
  }, [visible, moodName]);

  const handleClick = (e) => {
    e.preventDefault();

    if (editIsClicked === true) {
      handleEditClick(e);
    } else {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      axios
        .post(
          `http://localhost:5000/userLogs/create/${userId}/${moodName}`,
          {
            userNotes,
            color: data.color,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setLogSubmitted(true);
          setSuccessMessage("Your mood has been logged successfully!");
        })
        .catch((error) => {
          return error;
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
        onUpdate();
        setSuccessMessage("Log updated successfully!");
        setLogSubmitted(true);
      })
      .catch((error) => {
        return error;
      });
    onHide();
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`log-form-container ${
        editIsClicked ? "log-form-edit" : "log-form-initial"
      }`}
    >
      <Container>
        <Card>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
            >
              {moodName}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <br></br>

            <form onSubmit={handleClick}>
              <TextField
                id="outlined-multiline-static"
                label="What's happening?"
                fullWidth
                multiline
                rows={4}
                defaultValue={formData.userNotes}
                onChange={(e) => {
                  setUserNotes(e.target.value);
                }}
              />

              <br></br>
              <br></br>
              <div>
                <Button
                  variant="contained"
                  type="submit"
                >
                  Save
                </Button>

                {onCancel && <Button onClick={onCancel}>Cancel</Button>}
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
