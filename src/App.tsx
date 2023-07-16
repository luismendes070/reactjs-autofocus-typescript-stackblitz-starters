import './style.css';

const MyComponent = require("./MyComponent");
const InputWithAutoFocus = require("./InputWithAutoFocus");

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
