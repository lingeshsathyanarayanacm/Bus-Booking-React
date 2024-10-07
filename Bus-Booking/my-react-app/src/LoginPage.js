import React, { useState } from 'react';
import { TextField, Button, Typography, Card } from '@mui/material';
import axios from 'axios';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import video from './online.mp4';
import { Link as RouterLink } from 'react-router-dom';
import './LoginPage.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: credentials,
      });
      if (response.data.length > 0) {
        console.log('Login successful!');
        window.location.href="payy";
        // Redirect or handle successful login
      } else {
        console.log('Login failed! Invalid credentials.');
        // Handle invalid login
      }
    } catch (error) {
      console.error('Login failed!', error);
      // Handle error scenarios
    }
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot Password clicked!');
  };

  return (
    <div className="custom-container">
      <video src={video} autoPlay loop muted className="custom-video" />
      <Card className="custom-card">
        <Typography variant="h5" className="custom-heading">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="custom-form-group">
            <TextField label="Username" name="username" variant="outlined" onChange={handleChange} fullWidth />
          </div>
          <div className="custom-form-group">
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <div className="custom-forgot-password-link" onClick={handleForgotPassword}>
            <RouterLink to="/forgot-password">Forgot Password?</RouterLink>
          </div>
          <div className="custom-social-login">
            <Button variant="outlined" color="primary" startIcon={<FaGoogle />}>
              Login with Google
            </Button>
            <Button variant="outlined" color="primary" startIcon={<FaFacebook />}>
              Login with Facebook
            </Button>
          </div>
          <div className="custom-no-account">
            <Typography>
              Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink>
            </Typography>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
