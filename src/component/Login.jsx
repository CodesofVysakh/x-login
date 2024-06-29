import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if(username == "user" && password == "password"){
            setIsShow(true);
            setErrorMessage("");
        }else{
            setErrorMessage("Invalid username or password");
            setIsShow(false);
        }
    }
    return (
        <div>
            <h3>Login Page</h3>
            {
                isShow ?
                <div>Welcome {username}!</div>
                :
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p>{errorMessage}</p>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        // value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        // value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            }
        </div>
    );
}

export default Login;
