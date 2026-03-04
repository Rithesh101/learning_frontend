import React, {useState} from "react";


function Note(props) {
    return (
    <div onClick = { () => {props.onChecked(props.id)}}>
         <li>{props.text}</li> 
    </div> )

}


export default Note;