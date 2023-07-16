import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});



root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
