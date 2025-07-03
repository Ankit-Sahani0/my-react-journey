import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    // setUser is coming from UserContextProvider
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser(username,password)
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value);
            }} placeholder="useername" /><br/>
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            type="text" 
            placeholder="password" /><br/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
export default Login;