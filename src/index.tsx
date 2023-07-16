const StrictMode = require('react');
const createRoot = require('react-dom/client');
const App = require('./App');
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
