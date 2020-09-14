import React from 'react';
import './Chats.css'

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name = "Jessica"
                message = "Hello Jessica!"
                timestamp = "5 minutes ago"
                profilePic= ""
            />
        </div>
    )

}

export default Chats 