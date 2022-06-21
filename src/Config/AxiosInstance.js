import axios from "axios";
import {API_BASE_URL} from './Config'


axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Action'] = 'application/json';

export const AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
})
