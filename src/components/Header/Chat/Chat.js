import React from 'react';
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';
import IconButton from '@material-ui/core/IconButton';

function Chat () {
    return (
        <div>
            <IconButton>
                <TextsmsRoundedIcon className="header__icon" style={{ fill: "#A45196" }} fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Chat;