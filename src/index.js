const _ = require('lodash');
const printMe = require('./print.js');

try{

  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
   })
   }

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

}catch(e){

  e.printStackTrace()

}