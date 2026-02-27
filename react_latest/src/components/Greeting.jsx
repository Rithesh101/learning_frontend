import React from "react";

function Greeting() {

    const hour = new Date(2026, 2,26, 9, 0, 0).getHours();
    let greeting = "Good Morning"; // let = greeting;
    const custom = {
        color : "red"
    }

if (hour >= 12 && hour < 18){
    greeting = "Good Afternoon";
    custom.color = "green";
}
if (hour >=18 && hour <= 23){
    greeting = "Good Evening";
    custom.color = "blue";
}

    return <h1 className = "heading" style = {custom}> {greeting} </h1>;

}

export default Greeting;