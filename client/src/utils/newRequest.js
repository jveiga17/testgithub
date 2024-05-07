import axios from "axios";

// Use the REACT_APP_ prefix for custom environment variables in a React app

/*const baseURL = process.env.REACT_APP_NODE_ENV === 'production'
    ? 'https://testgithub-7p32.onrender.com/api'
    : 'http://localhost:8800/api';*/
    
const baseURL = 'https://testgithub-7p32.onrender.com/api'
const newRequest = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default newRequest;
