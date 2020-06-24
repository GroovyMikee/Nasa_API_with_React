import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav'
import Welcome from './components/Welcome'

import './App.css';


function App() {

  return (
    <Router>
      <div className="App">
        <h3 className="header">Nasa APP</h3>
        <Nav />
        <Switch>
          <Route path="/" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
