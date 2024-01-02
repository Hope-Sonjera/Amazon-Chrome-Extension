import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    // Clear previous errors
    setError('');

    // Make a request to the backend for login
    axios.post('http://localhost:3000/api/auth/login', { username, password })
      .then(response => {
        // Handle successful login (e.g., store token, redirect)
        console.log('Login successful', response.data);

        // Optionally, you can redirect the user to another page after successful login
        // window.location.href = '/dashboard';
      })
      .catch(error => {
        // Handle login error
        setError('Invalid credentials. Please try again.');
        console.error('Login error:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
