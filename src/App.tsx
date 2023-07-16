import * as React from 'react';
import './style.css';

import MyComponent from "./MyComponent"
import InputWithAutoFocus from "./InputWithAutoFocus";

const App = () => {
  return (
    <div>
      <MyComponent/>
      <InputWithAutoFocus/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    
    </div>
  );
};

export default App;
