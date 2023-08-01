import React, { useState,Switch } from 'react';
// import axios from 'axios';
// import Login from './components/login';
import Signup from './components/signup';
// import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  // State for storing user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleLoginSuccess = (token) => {
    setIsLoggedIn(true);
    setToken(token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken('');
    // Clear the token from local storage or state
  };

  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Homepage isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          </Route> */}
          {/* <Route path="/login">
            <Login onLoginSuccess={handleLoginSuccess} />
          </Route> */}
          <Route path="/signup">
            <Signup />
          </Route>
          {/* Add other routes for different pages */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
