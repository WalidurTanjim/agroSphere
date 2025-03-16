
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGoogle, FaLeaf } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../../assets/SignIn/SignUp_Json/Login.json";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import SocialLogin from "../../../Components/SocileLogin";

const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
     const {
      email,
      password,
    } = data;
    setLoading(true);

    console.log("submit form")
  
  };

  return (
    <div className="flex flex-col md:flex-row-reverse gap-8 justify-center items-center min-h-[calc(100vh-200px)] overflow-x-hidden bg-green-100 p-4 py-10 ">
      <div className="flex-1">
        <Lottie animationData={animationData} loop={true} className="px-4" />
      </div>
      <div className="flex justify-center items-center flex-1">
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="backdrop-blur-3xl  rounded-lg p-6 w-full max-w-lg shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
          <p className="text-base md:text-xl font-bold tracking-wide flex items-center justify-center py-2 md:py-4 ">
            Welcome to <FaLeaf className="text-green-600 mx-2" size={28} /> AgroSphere
          </p>

          <div>
            {/* Email */}
            <label className="block text-sm">Email</label>
            <input 
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })} 
              className="w-full p-2 border rounded-lg mb-2" 
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            {/* Password */}
            <label className="block text-sm">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })} 
                className="w-full p-2 border rounded-lg mb-2" 
                placeholder="••••••••"
              />
             
              <button 
                type="button" 
                className="absolute right-2 top-3 text-gray-600" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible className="text-xl"/> : <AiOutlineEye className="text-xl"/>}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
           
              {/* Submit  */}

            <button 
              type="submit" 
              className="w-full bg-green-700 text-white py-2 rounded-lg mt-3 flex justify-center items-center cursor-pointer"
              disabled={loading}
            >
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Sign In"}
            </button>
            <p className="text-sm pt-4">New Here? <Link to={"/signup"} className="text-blue-600 font-medium">Create An Account</Link></p>
                <div className="divider">or</div>
            <div className="flex flex-col gap-2 mt-4">
              <SocialLogin />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;