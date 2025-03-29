import axios from 'axios';

const axiosPublic= axios.create({
    // baseURL: "https://agro-sphere-server.vercel.app",
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic;