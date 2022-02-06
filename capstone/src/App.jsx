import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './webpages'
import About from './webpages/about';
import Ordering from './webpages/ordering'
import Tracking from './webpages/tracking'
import TrackingStatus from './components/TrackingStatus';
import Management from './webpages/management';
import Profit from './webpages/profit';
import {ThemeProvider, createTheme} from '@mui/material/styles'

// color override for MUI theme, unable to use css vars here
const theme = createTheme({
  palette: {
    primary: {
      main: '#f1b300', //primaryPrideGold in globalStyle.css
    },
    secondary: {
      main: '#808080', //primarySilver in globalStyle.css
    }, 
    error: {
      main: '#d22630', //accentGarnet in globalStyle.css
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>

      <Router>
        <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/ordering' component={Ordering} />
            <Route path='/tracking' component={Tracking} />
            <Route path='/about' component={About} />
            <Route path='/TrackingStatus' component={TrackingStatus}/>
            <Route path='/Management' component={Management}/>
            <Route path='/Profit' component={Profit}/>

          </Switch>
      </Router>

      </div>
    </ThemeProvider>
  );
}

export default App;
