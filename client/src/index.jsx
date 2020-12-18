import ReviewApp from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
<Router>
  <Route exact path='/:id' component={ReviewApp}/>
  <Route exact path='/' component={ReviewApp}/>
</Router>, document.getElementById('ReviewApp'));