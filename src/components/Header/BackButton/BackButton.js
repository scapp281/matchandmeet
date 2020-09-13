import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from 'react-router-dom';

function Backbutton( {backButton}) {
    const history = useHistory();
    return (
        <div>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                  <ArrowBackIosIcon fontSize="large" />
                </IconButton>
              ) : null}
        </div>
    )
}

export default Backbutton;