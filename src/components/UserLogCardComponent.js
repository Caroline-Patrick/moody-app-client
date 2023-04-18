import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

//change date + time into more readable format
const formatDate = (createDate, createTime) => {
 
    const date = new Date(createDate);
    date.setHours(...createTime.split(':').map(Number));
  
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  
  

export const UserLogCardComponent =({userId, log, token })=> {

  const [expanded, setExpanded] = React.useState(false);

  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, bgcolor: blueGrey[200] }}>
               
       <CardHeader
        subheader={formatDate(log.createDate, log.createTime)}// Use formatDate to format the date and time
        title={`Mood: ${log.subsubMoodName}`}
      /><EditIcon></EditIcon>
        

      <CardActions disableSpacing>
        
       
        <DeleteIcon></DeleteIcon>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {log.userNotes}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}