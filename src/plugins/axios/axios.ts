import axios from "axios";

const options = {
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 180000,
};

const instance = axios.create(options);

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {   
        return Promise.reject(error);
    },
);

export const CancelToken = axios.CancelToken.source();

export default instance;
