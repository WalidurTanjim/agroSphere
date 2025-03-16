import React, { useContext } from 'react';
import { FaFacebook, FaGoogle, } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';


const SocialLogin = () => {

    const { signInWithGoogle} = useContext(AuthContext);

    const handleGoogleSignin =async () => {
       signInWithGoogle()
       .then((result) => {
      
        const userInfo = {
            email: result.user.email,
            name: result.user.displayName,
        }})
       
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