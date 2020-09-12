import React from 'react';
import './Header.css';
import ChatIcon from './ChatIcon/ChatIcon';
import Logo from './Logo/Logo';
import ProfileIcon from './ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to="/chats">
                <ChatIcon />
            </Link>
            <Link to="/">
                <Logo />
            </Link>
            <Link to="/profile">
                <ProfileIcon />
            </Link>
        </div>
    )
}

export default Header;