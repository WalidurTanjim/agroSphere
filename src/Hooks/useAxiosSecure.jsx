import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./useAuth"

const axiosSecure = axios.create({
    baseURL: 'https://agro-sphere-server-phi.vercel.app',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
              if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                
                logOut();
                navigate('/login');
              }
              return Promise.reject(error);
            }
        )
      }, [signOutUser, navigate])
      return axiosSecure
};

export default useAxiosSecure;