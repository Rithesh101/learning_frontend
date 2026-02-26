import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");

const root = createRoot(container);

const name = "rithesh";

// const lname = "bobby";

// root.render(<h1>hellooooooooooooooooo {name} {lname}  </h1>);

// root.render(
//     <div>
//     <p>created by {name}</p>
//     <p>copyright {new Date().getFullYear()}</p>
//     </div>
// );

// root.render(<div>
//     <h1 className= "heading">some pictures</h1>

//     <div>
//         <img className = "food-img" alt = "dog" src =  "https://picsum.photos/id/19/367/267"></img>
//         <img className = "food-img" alt = "green" src = "https://picsum.photos/id/237/200/300"></img>
//         <img className = "food-img" alt = "tree" src = "https://picsum.photos/id/18/367/267"></img>
//     </div>
// </div>)

// const customStyle = {
//     color : "green",
//     fontSize : "20px",
//     border : "1px solid red"
// }

// root.render(<div>
//     <h1 style = {customStyle}>hello, siuuuuuuuuuuuuuuuuuu</h1>

//     {/* <h1 style = {   {color : "red"} }>hello, siuuuuuuuuuuuuuuuuuu</h1> */}
// </div>)

// const hour = new Date(2026, 2,26, 0, 0, 0).getHours();
// var greeting = "Good Morning"; // let = greeting;
// const custom = {
//     color : "red"
// }

// if (hour >= 12 && hour < 18){
//     greeting = "Good Afternoon";
//     custom.color = "green";
// }
// if (hour >=18 && hour <= 23){  ---------------> logic can be improved here...
//     greeting = "Good Evening";
//     custom.color = "blue";
// }
// root.render(
//     <h1 className = "heading" style = {custom}> {greeting} </h1>
// )