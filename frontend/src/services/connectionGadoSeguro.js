import axios from 'axios';
import { getToken } from './auth';

const gadoSeguro = axios.create({
    baseURL: 'http://localhost:3001'
});

gadoSeguro.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default gadoSeguro;


