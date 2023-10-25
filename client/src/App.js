import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdviceForm from './components/AdviceForm';
import AdviceDisplay from './components/AdviceDisplay';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <>
          <h1>Login</h1>
          <LoginForm setUser={setUser} />
          <h1>Register</h1>
          <RegisterForm />
        </>
      ) : (
        <>
          <h1>Ask for Advice</h1>
          <AdviceForm />
          <h1>Your Advice</h1>
          <AdviceDisplay />
        </>
      )}
    </div>
  );
};

export default App;
