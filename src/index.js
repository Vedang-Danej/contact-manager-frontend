import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

const baseURL = 'http://localhost:5000';
axios.interceptors.request.use(
  (config) => {
    config.url = baseURL + config.url;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
