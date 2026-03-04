import React, {useState} from "react"



function InputArea(props) {

    const [newNote, setNote] = useState("");



    function handleChange(event) {

        const { value } = event.target;
        setNote(value)

    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={newNote} />
            <button onClick={() => {
                props.forClick(newNote)
                setNote("")
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}


export default InputArea;