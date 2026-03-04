import React, { useState } from "react";
import Note from "./TodoList";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);

  function handleClick(newNote) {

    setItems((prevItems) => {
      return [...prevItems, newNote]
    })


  }

  function handleCheck(id) {

    setItems(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      })
    })

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      forClick = {handleClick} />
      <div>
        <ul>
          {items.map((item, index) => <Note

            key={index}
            id={index}
            text={item}
            onChecked={handleCheck} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
