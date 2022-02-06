import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import * as AWS from 'aws-sdk'
//import { ConfigurationOptions } from 'aws-sdk'

/*
const configuration: ConfigurationOptions = {
  region: 'us-east-2',
  secretAccessKey: 'mvIlVqTOsIDpt1KqDvzyy8uLIhg8z1GIb0UJdzvL',
  accessKeyId: 'AKIAXYC6DLPLLCLBE7XI'
}

AWS.config.update(AWS.configuration)
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
