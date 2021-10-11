import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './webpages'
import About from './webpages/about';
import Ordering from './webpages/ordering'
import Tracking from './webpages/tracking'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/ordering' component={Ordering} />
        <Route path='/tracking' component={Tracking} />
        <Route path='/about' component={About} />

      </Switch>
    </Router>
  );
}

export default App;
