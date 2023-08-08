// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
  
//   const validateForm = () => {
//     const newErrors = {};
//     if (!loginData.email) newErrors.email = "Email is required";
//     if (!loginData.password) newErrors.password = "Password is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
  
//     try {
//       console.log(loginData);
//       const response = await fetch("https://localhost:7222/api/User/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });
  
//       localStorage.setItem("token", token); 
//       if (response.ok) {
//        alert("Login successful");
//         // Store token in local storage
//         navigate("/"); // Redirect to dashboard or home page
//       } else {
//         const errorData = await response.json();
//         alert(errorData.title); // Show error message
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={loginData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <div className="error">{errors.email}</div>}
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleChange}
//             required
//           />
//           {errors.password && <div className="error">{errors.password}</div>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Snackbar
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Alert  from '@mui/material/Alert';

const LoginForm = () => {

  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailId: '',
    password: '',
    
  });


  const validateEmail = (email) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;

    setFormData({
        ...formData,
        [fieldName]: value,
      });
  
      if (fieldName === 'emailId') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: !validateEmail(value) ? 'Please enter a valid email address.' : '',
          }));
        } 

        else {
        
            setErrors((prevErrors) => ({
              ...prevErrors,
              [fieldName]: value.trim() === '' ? 'This field is required.' : '',
            }));
          }
  
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting login data:', formData);

    try {
   
      const { emailId, password } = formData;
      const response = await axios.post('https://localhost:7038/api/Users/login', { emailId, password });
      setOpenSnackbar(true);
      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem('token', token);

        const decodedToken = jwt_decode(token);
      
        console.log('Token:', token);
        console.log('Name:', formData.emailId);
        console.log('Role:', decodedToken.role);
        console.log('nameid', decodedToken.nameid);
        localStorage.setItem('nameid', decodedToken.nameid);

        if (decodedToken.role === "Admin") {
       
          
          navigate("/approve");
        }
        else if(decodedToken.role === "Agent"){
        
          navigate("/details");
        }
        else if(decodedToken.role === "User"){
        
          navigate("/destinations");
        }
        else{
          console.log("invalid");
        }
       

      } else {
        console.error('Error during login:', response);
       
      }
    } catch (error) {
      console.error('Error during login:', error);
     
    }

    
  };

  return (
    <div class="logindiv">
    <Container component="main" maxWidth="xs" sx={{padding:5,height:'auto',}}>
      <div>
        <Typography variant="h5" sx={{marginLeft:10,marginBottom:5,fontWeight:800,}}>Login to Continue</Typography>
        <form onSubmit={handleSubmit} sx={{width: 500, }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                error={!!errors.emailId}
                helperText={errors.emailId}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" fullWidth class="logindetails" >
           Login
          </Button>

    
        </form>
      </div>
    </Container>

    <Snackbar
        open={openSnackbar}
        autoHideDuration={5000} // Adjust the duration as needed
        onClose={handleCloseSnackbar}
       
      >
         <Alert onClose={handleCloseSnackbar} variant="filled" severity='info' sx={{ width: '400px', fontSize:'20px', marginLeft:'730px',}}>
    Login Successful!
  </Alert>
  </Snackbar>

  

    </div>
  );
};

export default LoginForm;
