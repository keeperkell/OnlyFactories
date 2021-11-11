import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './webpages'
import About from './webpages/about';
import Ordering from './webpages/ordering'
import Tracking from './webpages/tracking'
import  Amplify, {API, graphqlOperation }  from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { listOrders } from './graphql/queries';
import { Paper } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import PlayArrowIcon  from '@material-ui/icons/PlayArrow';
import FavoriteIcon  from '@material-ui/icons/Favorite';

import {ThemeProvider, createTheme} from '@mui/material/styles'

Amplify.configure(awsconfig);

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
    
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try{
        const orderData = await API.graphql(graphqlOperation(listOrders));
        const orderList = orderData.data.listOrders.items;
        console.log('order list', orderList);
    }catch(error) {
      console.log('error on fetching orders', error);

    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>

        <AmplifySignOut />

        <Router>
          <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/ordering' component={Ordering} />
              <Route path='/tracking' component={Tracking} />
              <Route path='/about' component={About} />

            </Switch>
        </Router>

        <div className="orderList">
          { orders.map(order => {
            return (
              <Paper variant="outlined" elevation={2}>
                <div className="orderCard">
                  <IconButton aria-label="play">
                    <PlayArrowIcon />
                  </IconButton>
                  <div>
                    <div className="OrderID"> {order.OrderID}</div>
                    <div className="Email">{order.Email}</div>
                    <div className="Name">{order.Name}</div>
                  </div>
                </div>
              </Paper>
            )
          })}
        </div>

      </div>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
