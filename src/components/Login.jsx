import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

 const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2 style={{color:'red'}}>Login</h2>
      <input
        type="text"
        onChange={(e) => setusername(e.target.value)}
        placeholder="username"
        value={username}
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
