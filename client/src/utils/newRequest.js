const baseURL = process.env.NODE_ENV === 'production' 
    ? 'https://testgithub-7p32.onrender.com/api' 
    : 'http://localhost:8800/api';

const newRequest = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});
