import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import React, { Component } from "react";
import './App.css';
import Home from './pages/Home';
import Save from './pages/Save';
import NoResults from './pages/NoResults';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/save" component = {Save}/>
          <Route component = {NoResults}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
