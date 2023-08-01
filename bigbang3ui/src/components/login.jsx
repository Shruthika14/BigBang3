import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../assets/images/logo.jpg';
// import './../assets/scss/style.scss';
import Aux from "../components/_Aux";
import TextField from '@mui/material/TextField';
import axios from 'axios';
class EmailStrengthIndicator extends React.Component {
    getColor = () => {
      const { userEmail } = this.props;
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!userEmail) {
        return "orange"; 
      } else if (emailRegex.test(userEmail)) {
        return "green"; 
      } else {
        return "red"; 
      }
    };
  
    render() {
      const color = this.getColor();
      const indicatorStyle = {
        height: "100%",
        width: "5px",
        backgroundColor: color,
        position: "absolute",
        top: 0,
        right: 0,
      };
      return <div style={indicatorStyle} />;
    }
  }

class PasswordStrengthIndicator extends React.Component {
    getColor = () => {
        const { password } = this.props;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
        if (!password) {
            return "orange"; 
          } else if (
            password.length >= 8 &&
            uppercaseRegex.test(password) &&
            numberRegex.test(password) &&
            specialCharRegex.test(password)
          ) {
            return "green"; 
          } else if (
            password.length >= 8 &&
            (uppercaseRegex.test(password) || numberRegex.test(password) || specialCharRegex.test(password))
          ) {
            return "orange"; 
          } else {
            return "red"; 
          }
    };

    render() {
        const color = this.getColor();
        const indicatorStyle = {
            height: "100%",
            width: "5px",
            backgroundColor: color,
            position: "absolute",
            top: 0,
            right: 0,
        };
        return <div style={indicatorStyle} />;
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userEmail: "",
          password: "",
          
        };
    }
    handleEmailChange = (event) => {
      this.setState({ userEmail: event.target.value });
  };
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };
    handleLogin = async(e) => {
      e.preventDefault();
      console.log("Login button clicked!");
      const { userEmail, password } = this.state;

      try {
        // Make a POST request to the login endpoint with only emailId and password
        const response = await axios.post('https://localhost:7261/api/User/login', { userEmail, password });
  
        const token = response.data;
  
        // Do something with the token, e.g., store it in local storage
        localStorage.setItem('token', token);
  
        // Show the token in the console
        console.log('Token:', token);
      } catch (error) {
        console.error('Error during login:', error.response.data);
      }
  };


    render() {
        const { password,userEmail } = this.state;

        return (
            <Aux>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    {/* <img src={Logo} alt="Logo" style={{ width: '100px', height: '100px' }} /> */}
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <TextField
                                        id="outlined-email-input"
                                        label="Email"
                                        type="text"
                                        autoComplete="current-email"
                                        style={{ width: '100%' }}
                                        value={userEmail}
                                        onChange={this.handleEmailChange}               
                                    />
                                     <EmailStrengthIndicator userEmail={userEmail} />
                                </div>
                                <div className="input-group mb-4" style={{ position: "relative" }}>
                   
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        style={{ width: '100%' }}
                                        value={password}
                    onChange={this.handlePasswordChange}
                                    />
                                    <PasswordStrengthIndicator password={password} />
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4" onClick={this.handleLogin}>Login</button>
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/signup">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Login;