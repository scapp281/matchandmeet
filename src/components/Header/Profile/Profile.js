import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import IconButton from '@material-ui/core/IconButton';

function Profile() {
    return (
        <div>
            <IconButton>
                <FaceIcon className="header__icon" style={{ fill: "rgb(5,19,90)" }} fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Profile;