import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch, Route } from 'react-router-dom';

import Home from './components/home';
import People from './components/people';
import PeopleDetail from './components/people_detail';


function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/people" component={ People } />
        <Route exact path="/people-detail/:name" component={ PeopleDetail } />
      </Switch>
    </Router>
    
  );
}

export default App;
