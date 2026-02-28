import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";


function newEmoji(props){
  return (
    <Entry 
    key = {props.id}
    emoji = {props.emoji} 
    name = {props.name}
    meaning = {props.meaning} />
   )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(props =>
  
    <Entry 
    key = {props.id}
    emoji = {props.emoji} 
    name = {props.name}
    meaning = {props.meaning} />
   
)}

      </dl>
    </div>
  );
}

export default App;
