import axios from 'axios';
import  Constants  from 'expo-constants';

const api = axios.create({
    baseURL: Constants.expoConfig.extra.TMDB_URL,
})

api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${Constants.expoConfig.extra.TMDB_KEY}`
    return config;
})

export default api