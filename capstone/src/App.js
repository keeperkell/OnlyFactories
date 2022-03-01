import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './webpages'
import About from './webpages/about';
import Ordering from './webpages/ordering'
import Tracking from './webpages/tracking'
import Management from './webpages/management';
import Profit from './webpages/profit';
import TrackingStatusPage from './webpages/trackingStatus';
import GlobalStyle from './globalStyles';
import Login from './webpages/login';


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
        <Route path='/management' component={Management} />
        <Route path='/profit' component={Profit} />
        <Route path='/trackingStatus' component={TrackingStatusPage} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
