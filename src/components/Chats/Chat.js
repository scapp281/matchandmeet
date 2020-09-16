import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Chat.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    }
  }));

function Chat({name , message, profilePic, timestamp }) {
    const classes = useStyles();

    return (
        <Link to={`/chat/${name}`}>
          <div className="chat">
            {/**  <div className={`avatar ${props.profilePic}`}></div> */}
            <Avatar className={`chat__image ${classes.large}`} alt={name} src={profilePic} />
            <div className="chat__details">
              <h2>{name}</h2>
              <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
          </div>
        </Link>
    )
}
 
export default Chat;