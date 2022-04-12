import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App />
,
  
  document.getElementById('root')
);

//Choosing your browser 
//When working in a browser environment Reaact Router provides two Routers for our consumption
//1. BroswserRouter 
//2.HashRouter we decide which one we love to use but most importantly depending on the server architecture
//BrowserRouter is recommended by default and may require additiaonal server configuration to handle dynamics requests.
//HashRouter is not suitable for all situatons but its good for static websites