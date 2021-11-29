import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './webpages'
import About from './webpages/about';
import Ordering from './webpages/ordering'
import Tracking from './webpages/tracking'
import TrackingStatus from './components/TrackingStatus';

function App() {

  return (
    <div className='App'>

      <Router>
        <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/ordering' component={Ordering} />
            <Route path='/tracking' component={Tracking} />
            <Route path='/about' component={About} />
            <Route path='/TrackingStatus' component={TrackingStatus}/>

          </Switch>
      </Router>

    </div>
  );
}

export default App;
