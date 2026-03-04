import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


  const [list, setList] = useState([]);

  function handleClick(newNote) { ///here you can name it anything, but in other file it should be same, and it should be passed

    setList(prev => {
      return [...prev, newNote]
    })

  }

  function handleDelete(id) {

    setList (prev => {
      return prev.filter((item, index) => {
        return index !== id;
      })
    })

  }

  return (
    <div>
      <Header />
      <CreateArea forClick = {handleClick} />
      {list.map((note, index) => {<Note key={index} id = {index} title= {note.title} content={note.content} fordel = {handleDelete}/>})}
      <Footer />
    </div>
  );
}

export default App;
