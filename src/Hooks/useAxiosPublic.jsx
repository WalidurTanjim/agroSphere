import axios from 'axios';

const axiosPublic= axios.create({
    baseURL: "https://agro-sphere-server.vercel.app",
    withCredentials: true
})

const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic;