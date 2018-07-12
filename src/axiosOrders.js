import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-83d6f.firebaseio.com/'
});

export default instance;