import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const Submit = async (e) => {
    e.preventDefault();



    try {
      const response = await axios.post('/api/login', { email, password });
      const { token } = response.data;

      
      localStorage.setItem('token', token);

      navigate('/home')
    } catch (error) {
      setError('Invalid ');
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="login-container">
    <h2>LOGIN</h2>
    <form onSubmit={Submit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    {error && <p>{error}</p>}
  </div>
  );
}

export default Login;
