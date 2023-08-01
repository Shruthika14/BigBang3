import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../assets/images/logo.jpg';
// import './../assets/scss/style.scss';
import Aux from "../components/_Aux";
import TextField from '@mui/material/TextField';
import axios from 'axios';

class UsernameStrengthIndicator extends React.Component {
  getColor = () => {
    const { username } = this.props;
    const uppercaseRegex = /[A-Z]/;
    if (!username) {
        return "orange"; 
      } else if (username.length >= 3 && uppercaseRegex.test(username)) {
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

class EmailStrengthIndicator extends React.Component {
  getColor = () => {
    const { email } = this.props;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email) {
      return "orange";
    } else if (emailRegex.test(email)) {
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

class RoleStrengthIndicator extends React.Component {
  getColor = () => {
    const { role } = this.props;
    const uppercaseRegex = /[A-Z]/;
    if (!role) {
        return "orange"; 
      } else if (role.length >= 3 && uppercaseRegex.test(role)) {
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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      password: "",
      role:""
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ userEmail: event.target.value });
  };

  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    const { userName, userEmail, password , role} = this.state;
    const userData = { userName, userEmail, password,role };

    // Make a POST request to the backend API to save user data
    axios.post('https://localhost:7261/api/User/register', userData)
      .then((response) => {
        console.log(response.data); // Handle success response
        // Do something after successful sign-up, e.g., redirect to login page
      })
      .catch((error) => {
        console.error(error); // Handle error
        // Handle error, show error message to the user, etc.
      });
  };

  render() {
    const { userName, userEmail, password,role } = this.state;

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
                {/* <div className="mb-4">
                  <img src={Logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
                </div> */}
                <h3 className="mb-4">Sign up</h3>
                <div className="input-group mb-3">
                  <TextField
                    id="outlined-username-input"
                    label="Username"
                    type="text"
                    autoComplete="current-username"
                    style={{ width: '100%' }}
                    value={userName}
                    onChange={this.handleUsernameChange}
                  />
                  <UsernameStrengthIndicator username={userName} />
                </div>
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
                  <EmailStrengthIndicator email={userEmail} />
                </div>
                <div className="input-group mb-3">
                  <TextField
                    id="outlined-role-input"
                    label="Role"
                    type="text"
                    autoComplete="current-role"
                    style={{ width: '100%' }}
                    value={role}
                    onChange={this.handleRoleChange}
                  />
                  <RoleStrengthIndicator role={role} />
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
                <button className="btn btn-primary shadow-2 mb-4" type="submit" onClick={this.handleSignUp}>Sign up</button>
                <p className="mb-0 text-muted">Already have an account? <NavLink to="/login">Login</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SignUp;