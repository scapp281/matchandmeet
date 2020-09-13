import React from 'react';
import './Header.css';
import ChatIcon from './ChatIcon/ChatIcon';
import Logo from './Logo/Logo';
import ProfileIcon from './ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';
import BackButton from './BackButton/BackButton';


function Header( {backButton}) {
    return (
        <div className="header">
            {backButton ? (
                <BackButton backButton={backButton}/>
              ) : (
                <Link to="/chats">
                  <ChatIcon />
                  </Link>
                
              )}
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