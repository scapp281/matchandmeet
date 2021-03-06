import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import TinderCards from "../TinderCards/TinderCards";
import SwipeButtons from "../SwipeButtons/SwipeButtons";
import Chats from "../Chats/Chats";
import ChatScreen from '../Chats/ChatScreen';
import Profile from "../Profile/Profile";
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    background-color: #333;
    color: #fff;
  }
`
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:user">
            <Header backButton="/chats" />  
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />  
            <Chats />
          </Route>
          <Route path="/profile"> 
            <Profile />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
