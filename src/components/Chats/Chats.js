import React from "react";
import './Chats.css';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Chat from "./Chat";


function Chats() {
    return (  
        <div className="chats">
            <Chat 
                name = "Jesscia"
                message = "Hi there!"
                timestamp = "3 minutes ago"
                // profilePic="avatarA"
                profilePic = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <Chat 
                name = "Judy"
                message = "Hey, how are you?"
                timestamp = "13 minutes ago"
                // profilePic="avatarB"
                profilePic = "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <Chat 
                name = "Maple"
                message = "Nice to meet you!"
                timestamp = "30 minutes ago"
                // profilePic="avatarC"
                profilePic = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <Chat 
                name = "Karen"
                message = "Hola!"
                timestamp = "3 days ago"
                // profilePic="avatarD"
                profilePic = "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
        </div>
    )
}
 
export default Chats;
