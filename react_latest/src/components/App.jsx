import React from "react";
import Heading from "./Header";
import List from "./List";
import Greeting from "./Greeting";
import Card from "./Card";


function App() {
    return <div>
        <h1>My Contacts</h1>
        <Card name = "Rithesh" img="https://picsum.photos/id/0/367/267" tel = "8965049666" email="rithesh@rithesh.com" />
        <Card name = "bobby" img="https://picsum.photos/id/4/367/267" tel = "2212254444" email = "bobby@bobby.com" />
        <Card name = "mahesh" img = "https://picsum.photos/id/7/367/267" tel = "235877777" email = "mahesh@mahesh.com" />
    </div>
}

export default App;


