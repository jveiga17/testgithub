import axios from 'axios';

const newRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8800/api", // Add fallback for local development
  withCredentials: true,
});

export default newRequest;
