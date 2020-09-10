import React from 'react';
import './Header.css';
import ChatLogo from './ChatLogo/ChatLogo';
import Logo from './Logo/Logo';
import ProfileIcon from './ProfileIcon/ProfileIcon';


function Header() {
    return (
        <div className="header">
            <ChatLogo />
            <Logo />
            <ProfileIcon />   
        </div>
    )
}

export default Header;