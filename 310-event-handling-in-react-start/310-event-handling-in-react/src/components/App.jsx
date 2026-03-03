import React, { useState } from "react"



function App() {


  const [fname, setName] = useState("");
  const [lname, setLname] = useState("")
  const [value, setValue] = useState("");

  function handleFChange(event) {
    setName(event.target.value)
  }

  function handleLChange(event) {
    setLname(event.target.value)
  }


  function handleClick(event){
   setValue(fname,lname)

   event.preventDefault(); //default behaviour is to refresh page, so use event to prevent it.
    
  }

  return (
    <div className="container">
      <form onSubmit = {handleClick} >
      <h1>Hello {fname} {lname}</h1>
      <input onChange={handleFChange} type="text" placeholder="first name" value = {fname}/>
      <input onChange={handleLChange} type = "text" placeholder = "last name" value = {lname}/>
      <button >Submit</button>
      </form>
    </div>
  );



}


export default App;