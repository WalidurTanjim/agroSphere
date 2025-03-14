import React from 'react';
import { FaFacebook, FaGoogle, } from 'react-icons/fa';
const SocialLogin = () => {

    const handleGoogleSignin =async () => {
       console.log('google sign')
    }
    
    const handleFacebookSignin = () => {
        console.log("Facebook sign")
    }
    
  
    return (
        <div>
             <div  className="space-y-4">
                 <button onClick={handleGoogleSignin} type="button" className="w-full bg-red-600 text-white py-2 rounded-lg flex justify-center items-center gap-2">
                     <FaGoogle /> Sign up with Google
                  </button>
                  <button onClick={handleFacebookSignin} type="button" className="w-full bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center gap-2"                                        >
                      <FaFacebook /> Sign up with Facebook
                  </button>
             </div>
        </div>
    );
};

export default SocialLogin;