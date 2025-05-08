import axios from 'axios';

// https://agro-sphere-server-ten.vercel.app

const axiosPublic = axios.create({
    // baseURL: "https://agro-sphere-server-ten.vercel.app",
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic;