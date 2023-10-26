import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdviceForm from './components/AdviceForm';
import AdviceDisplay from './components/AdviceDisplay';

const App = () => {
  const [user, setUser] = useState({ username: 'demoUser' });

  return (
    <div className="App">
      {!user ? (
        <div className="auth-section">
          <h1>LegiWise: Wisdom in Every Word of Law</h1>
          <div className="auth-forms">
            <div className="login-form">
              <h2>Login</h2>
              <LoginForm setUser={setUser} />
            </div>
            <div className="register-form">
              <h2>Register</h2>
              <RegisterForm />
            </div>
          </div>
        </div>
      ) : (
        <div className="advice-section">
          <h1>Welcome, {user.username}</h1>
          <h2>Ask for Advice</h2>
          <AdviceForm />
          <h2>Your Advice</h2>
          <AdviceDisplay />
        </div>
      )}
    </div>
  );
};

export default App;
