import React from 'react';
import { useHistory } from 'react-router-dom';
import './css/Welcome.css';

function Welcome() {
  const histor = useHistory();

  const handleLogin = () => {
    history.push('/dashboard');
  };

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to M87 - Generative AI Innovations</h1>
        <button onClick={handleLogin} className="welcome-button">Login</button>
      </div>
    </div>
  );
}

export default Welcome;