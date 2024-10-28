import axios from 'axios';

// The Axios Instance
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// Custom method get
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
