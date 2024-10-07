// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { TextField, Button, Card, Typography } from '@mui/material';
// // import axios from 'axios';
import video from './video.mp4';

// // const SignUpPage = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [dob, setDob] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [phone, setPhone] = useState('');

// //   const handleSignUp = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:3001/api/signup', {
// //         username,
// //         email,
// //         dob,
// //         password,
// //         phone,
// //       });

// //       if (response.data.message === 'User registered successfully.') {
// //         console.log('User registered successfully!');
// //         // Redirect to login page or do any other necessary action
// //       }
// //     } catch (error) {
// //       console.error('Signup failed:', error.response.data.error);
// //     }
// //   };

// //   return (
// //     <div className="custom-container">

// //         <form>
// //           <Typography variant="h4" gutterBottom className="custom-heading">
// //             Sign Up
// //           </Typography>
// //           <div className="custom-form-group">
// //             <TextField
// //               label="Username"
// //               type="text"
// //               variant="outlined"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               fullWidth
// //             />
// //           </div>
// //           <div className="custom-form-group">
// //             <TextField
// //               label="Email"
// //               type="email"
// //               variant="outlined"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               fullWidth
// //             />
// //           </div>
// //           <div className="custom-form-group">
// //             <label style={{ color: '#666666' }}>Date of birth :</label>
// //             <br />
// //             <TextField
// //               type="date"
// //               variant="outlined"
// //               value={dob}
// //               onChange={(e) => setDob(e.target.value)}
// //               fullWidth
// //             />
// //           </div>
// //           <div className="custom-form-group">
// //             <TextField
// //               label="Password"
// //               type="password"
// //               variant="outlined"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               fullWidth
// //             />
// //           </div>
// //           <div className="custom-form-group">
// //             <TextField
// //               label="Phone Number"
// //               type="tel"
// //               variant="outlined"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               fullWidth
// //             />
// //           </div>
// //           <Button
// //             type="button"
// //             className="custom-button"
// //             onClick={handleSignUp}
// //             variant="contained"
// //             color="primary"
// //           >
// //             Sign Up
// //           </Button>
// //         </form>
// //     </div>
// //   );
// // };

// // export default SignUpPage;
// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     gender: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/users', formData);
//       console.log('Registration successful!', response.data);
//       // Redirect or handle success as needed
//     } catch (error) {
//       console.error('Registration failed!', error);
//       // Handle error scenarios
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>

        
//         <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
//         <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
//         <input type="text" name="username" placeholder="Username" onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//         <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
//         <select name="gender" onChange={handleChange}>
//           <option value="" disabled selected>
//             Gender
//           </option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { TextField, Button, Card, Typography } from '@mui/material';
import axios from 'axios';
import './LoginPage.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('Registration successful!', response.data);
      window.location.href="/login"
      // Redirect or handle success as needed
    } catch (error) {
      console.error('Registration failed!', error);
      // Handle error scenarios
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="custom-container">
      <video src={video} autoPlay loop muted className="custom-video" width="750px" height="800px" />

       <Card className="custom-card">
      <Typography variant="h4" gutterBottom className="custom-heading">
       Sign Up
       </Typography>

      <form>        
        <div className="custom-form-group">
        <TextField label="Username" name="username" variant="outlined" onChange={handleChange} fullWidth />
        </div>
        <div className="custom-form-group">
        <TextField label="Email" name="email" type="email" variant="outlined" onChange={handleChange} fullWidth />
        </div>
        <label style={{color:"#666666"}}>Date of Birth</label>
        <div className="custom-form-group">
        <TextField  name="date" type="date"variant="outlined" onChange={handleChange} fullWidth />
        </div>
        <div className="custom-form-group">
        <TextField label="Password" name="password" type="password" variant="outlined" onChange={handleChange} fullWidth />
        </div>
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <div className="custom-form-group">
        </div>

        <Button type="button" onClick={handleSignUp} variant="contained" color="primary">
          Register
        </Button>
      </form>
      </Card>
    </div>
  );
};

export default SignUp;

