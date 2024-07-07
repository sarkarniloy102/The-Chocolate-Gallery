import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxiosSecure = () => {
    //request interceptor for every secure call to api
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('access-token');
        console.log('req stopped by interupt')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // intercept 401 & 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {

        const status = error.response.status;
        // Do something with response error
        return Promise.reject(status);
    });
    return axiosSecure;



};

export default useAxiosSecure;