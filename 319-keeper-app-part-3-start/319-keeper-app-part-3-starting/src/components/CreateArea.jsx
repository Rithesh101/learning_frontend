import React, { useState } from "react";

function CreateArea(props) {


  const [newNote, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {

    const { value, name } = event.target;

    setNote(prev => { // you can use spread operator here return {...prev, [name] : value}

      if (name === "title") {
        return {
          title: value,
          content: prev.content
        }
      }
      else if (name === "content") {
        return {
          title: prev.title,
          content: value
        }
      }
    })

  }

  function submitNote(event) {

    props.forClick(newNote);

    setNote({
      title: "",
      content: ""
    })

    event.preventDefault();

  }




  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={newNote.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
