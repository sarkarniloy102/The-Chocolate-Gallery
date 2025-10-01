import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'the-chocolate-gallery-server.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;