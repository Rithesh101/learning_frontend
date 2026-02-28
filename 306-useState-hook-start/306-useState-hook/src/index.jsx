import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
/*
var count = 0;

function Increase() {
  count++
} 
this wont work, to make this work
 on screen put the whole reactdom 
 inside this function, but it makes code
  look bad and inefficient
---> to make this work use hooks like useState, but only inside a component. */

ReactDOM.render(<App></App>,
  document.getElementById("root")
);

