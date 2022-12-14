import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

const baseURL = 'https://contact-manager-api.fly.dev';
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
