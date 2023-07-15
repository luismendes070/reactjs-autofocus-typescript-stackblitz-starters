import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import _ from 'lodash';
// import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

// if (module.hot) {
 // module.hot.accept('./print.js', function() {
   // console.log('Accepting the updated printMe module!');
   // printMe();
// })
// }

require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
