
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGoogle, FaFacebookF, FaLeaf } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../../../public/Animation - 1741840482951.json";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center min-h-screen overflow-x-hidden bg-green-100 p-4 pb-16 ">
      <div className="flex-1">
        <Lottie animationData={animationData} loop={true} className="px-4" />
      </div>
      <div className="flex justify-center items-center flex-1">
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="backdrop-blur-3xl  rounded-lg p-6 w-full max-w-lg shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
          <p className="text-base md:text-xl font-bold tracking-wide flex items-center justify-center py-2 md:py-4 ">
            Welcome to <FaLeaf className="text-green-600 mx-2" size={28} /> AgroSphere
          </p>

          <div>
            <label className="block text-sm">Full Name</label>
            <input 
              {...register("name", { required: "Name is required" })} 
              className="w-full p-2 border rounded-lg mb-2" 
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <label className="block text-sm">Email</label>
            <input 
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })} 
              className="w-full p-2 border rounded-lg mb-2" 
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

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

            <button 
              type="submit" 
              className="w-full bg-green-700 text-white py-2 rounded-lg mt-3 flex justify-center items-center cursor-pointer"
              disabled={loading}
            >
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Register"}
            </button>
            <p className="text-sm pt-4">If Already Have Account? <Link to={"/signin"} className="text-blue-600 font-medium">Please Login</Link></p>
                <div className="divider">or</div>
            <div className="flex flex-col gap-2 mt-4">
              <button 
                type="button" 
                className="w-full bg-red-600 text-white py-2 rounded-lg flex justify-center items-center gap-2"
              >
                <FaGoogle /> Sign up with Google
              </button>
              <button 
                type="button" 
                className="w-full bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center gap-2"
              >
                <FaFacebookF /> Sign up with Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;