import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import firebaseConfig from "../../config";

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
          <Route path="/chat">{/* <Chat /> */}</Route>
          <Route path="/profile">{/* <Profile /> */}</Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
