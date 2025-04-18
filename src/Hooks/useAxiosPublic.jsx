import axios from 'axios';

// https://agro-sphere-server-ten.vercel.app

const axiosPublic = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic;