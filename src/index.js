import React from 'react'; // A library that allows us to build React Components
import ReactDOM from 'react-dom'; // A library that allows us to place Components into the DOM
import App from './App';  // import the component in jsx format below
import HelloWorld from './HelloWorld'

ReactDOM.render(
  <div>
 
    <App />
    <HelloWorld />
  </div>,
  document.getElementById('root')
);
