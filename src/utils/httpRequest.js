import axios from 'axios';

// The Axios Instance
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// Custom method get
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
