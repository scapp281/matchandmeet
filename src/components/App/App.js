import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import TinderCards from "../TinderCards/TinderCards";
import SwipeButtons from "../SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Router>
        {/* HEADER */}
        <Header />

        {/* TINDER CARD */}

        {/* BUTTONS GROUP */}

        {/* CHAT SCREEN */}
        {/* SINGLE CHAT */}
        <Switch>
          <Route path="/chats"><h1>chat game</h1></Route>
          <Route path="/profile">{/* <Profile /> */}</Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
