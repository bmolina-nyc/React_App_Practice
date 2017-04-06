import React from 'react'; // A library that allows us to build React Components
import ReactDOM from 'react-dom'; // A library that allows us to place Components into the DOM
import App from './App';  // import the component in jsx format below
import HelloWorld from './HelloWorld'
import StateComponent from './StateComponent'
import StateComponentChild from './StateComponentChild'
import PropsChildren from './PropsChildren'

ReactDOM.render(
  <div>
 
    <App />
    <HelloWorld />

    <StateComponent />
    <StateComponentChild />

    <PropsChildren />
  </div>,
  document.getElementById('root')
);
