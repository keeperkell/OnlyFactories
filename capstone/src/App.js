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
import Particles, { ISourceOptions, Main} from "react-tsparticles";
import { loadSeaAnemonePreset } from 'tsparticles-preset-sea-anemone';
import { GpsFixed } from '@material-ui/icons';
import { withTheme } from 'styled-components';


function App() {

  const options: ISourceOptions = {
    background: {
      color: "#ffffff",
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#f1b300", "#808080"],
      },
      links: {
        color: ["#f1b300", "#808080"],
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 3,
      },
    },
  };


  return (

    <Router>
      <Particles options={options}/>
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
