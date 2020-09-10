import React from 'react';
import './Header.css';
import Chat from './Chat/Chat';
import Logo from './Logo/Logo';
import Profile from './Profile/Profile';


function Header() {
    return (
        <div className="header">
            <Chat />
            <Logo />
            <Profile />   
        </div>
    )
}

export default Header;