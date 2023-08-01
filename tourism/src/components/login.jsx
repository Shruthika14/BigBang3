import React, { useState } from 'react';
import axios from 'axios';
// import onChange from React;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userData = { username, password };
    axios.post('https://localhost:7261/api/User/login', userData)
      .then((response) => {
        // Handle successful login
        console.log('Login successful:', response.data.token);
        // Save the token in local storage or state for future requests
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error.response.data);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
