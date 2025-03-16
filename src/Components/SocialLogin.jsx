import React, { useContext } from 'react';
import { FaFacebook, FaGoogle, } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';


const SocialLogin = () => {

    const { signInWithGoogle} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate =useNavigate()

    const handleGoogleSignin =async () => {
       signInWithGoogle()
       .then((res) => {

        if(res.user.email){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Successfully Signed",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
        }
      
        const userInfo = {
            name: res.user?.displayName,
            email: res.user?.email,
            photoURL: res.user?.photoURL,
            role: "user",
        }
        axiosPublic.post('/users', userInfo)
         .then(res=>{
            console.log(res.data)
            navigate('/')
         })
    })
       
    }
    
   
    
  
    return (
        <div>
             <div  className="space-y-4">
                 <button onClick={handleGoogleSignin} type="button" className="w-full bg-red-600 text-white py-2 rounded-lg flex justify-center items-center gap-2">
                     <FaGoogle /> Sign up with Google
                  </button>
                
             </div>
        </div>
    );
};

export default SocialLogin;