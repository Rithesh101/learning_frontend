import React from "react";
import Input from "./Input";


const Login = () => {

    return (
        <form className="form">
            <Input type =  "text" placeholder = "Username"></Input>
            <Input type = "password" placeholder = "Password"></Input>
            <button type="submit">Login</button>
        </form>
    )

}

export default Login;