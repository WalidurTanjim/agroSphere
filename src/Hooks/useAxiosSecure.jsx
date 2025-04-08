import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
})
const useAxiosSecure = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const { logOut } = useAuth();
=======
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
>>>>>>> 46e63489a8bc6d34371b0b4ef9f3c8ac8a1d3206

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