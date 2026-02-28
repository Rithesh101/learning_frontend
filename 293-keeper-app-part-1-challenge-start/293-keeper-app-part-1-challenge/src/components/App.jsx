import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function createNote(note){
//     return <Note title = {note.title} content = {note.content}/>
// }


function App() {
    return <div>
        <Header></Header>
        {notes.map(note => (<Note key = {note.key} title = {note.title} content = {note.content}/>))}
        <Footer></Footer>
    </div>
}

export default App;