import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';



function Layout(){
  
  return(
   
    <div>
    
    <App />
  </div>
   
  )
}

ReactDOM.render(<Layout/>,document.getElementById("root"));