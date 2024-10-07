// auth.js
import axios from 'axios';

const apiUrl = ' http://localhost:3001'; // Assuming your JSON file is in the public folder

const authenticateUser = async (username, password) => {
  try {
    // Check if the user exists by reading from the JSON file
    const response = await axios.get(`${apiUrl}/db.json`);

    const users = response.data.users;
    const user = users.find(user => user.username === username);

    if (user && user.signedUp) {
      // User exists and has signed up, now check the password
      const isPasswordCorrect = user.password === password;

      return isPasswordCorrect;
    } else {
      return false; // User does not exist or hasn't signed up
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    return false;
  }
};

export default authenticateUser;
