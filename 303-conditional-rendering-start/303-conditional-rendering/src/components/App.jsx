import React from "react";
import Login from "./Login";

var isLoggedIn = false;


// var toLog = isLoggedIn ? <h1>Hello</h1> : <Login/>;
const time = new Date().getHours();

function App() {
  return (
    <div className="container">
      {

        // time > 6 ? <h1>what are you doing here!</h1> : null    
        time>22 && <h1>its working</h1>

      }
    </div>
  );
}

export default App;
// function checkLogged() {
//   if(isLoggedIn){
//     return <h1>Hello</h1>
//   }
//   else{
//     return (
//     <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//       ); 
//   }
// }