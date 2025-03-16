import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGoogle, FaFacebookF, FaLeaf } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../../assets/SignIn/SignUp_Json/SignUp.json";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import SocialLogin from "../../../Components/SocialLogin";
import { AuthContext } from "../../../context/AuthProvider";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {updateUserProfile, createUser} = useContext(AuthContext)

  const onSubmit = async (data) => {
    console.log(data);
     const {
      email,
      Name,
      password,
    } = data;
    setLoading(true);

    try {
      const passwordValidation =
        password.length >= 6 &&
        /[A-Z]/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!passwordValidation) {
        return toast.error(
          "Password must be 6 characters, include a capital letter, and a special character."
        );
      }
      // Upload photo to imgbb
      if (data.image[0]) {
        const photoData = new FormData();
        photoData.append("image", data.image[0]);

        // console.log("Uploading photo to ImgBB...");

        const imgbbResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMGBB_API_KEY
          }`,
          photoData
        );

        const photo = imgbbResponse.data.data.display_url;
        // console.log("Photo uploaded to ImgBB:", photo);

        if (!imgbbResponse.data.success) {
          throw new Error("Failed to upload image to ImgBB");
        }

        // Rest of the authentication code...
        const userCredential = await createUser(email, password);
        const user = userCredential.user;

        updateUserProfile(Name, photo)
        .then((res) => {
          const userInfo = {
            email: email,
            Name: Name,
            password: password,
            photo: photo,
            role: "user",
          };
          console.log(userInfo)
        //   post user data backend
        axios.post("http://localhost:5000/users", userInfo)
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registered successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          reset()
        });
        });
      } else {
        toast.error("Please select a photo");
        return;
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.message || "Failed to register",
        showConfirmButton: false,
        timer: 2000,
      });
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center min-h-screen overflow-x-hidden bg-green-100 p-4 py-10 ">
      <div className="flex-1">
        <Lottie animationData={animationData} loop={true} className="px-4" />
      </div>
      <div className="flex justify-center items-center flex-1">
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="backdrop-blur-3xl  rounded-lg p-6 w-full max-w-lg shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
          <p className="text-base md:text-xl font-bold tracking-wide flex items-center justify-center py-2 md:py-4 ">
            Welcome to <FaLeaf className="text-green-600 mx-2" size={28} /> AgroSphere
          </p>
          {/* Name */}
          <div>
            <label className="block text-sm">Full Name</label>
            <input 
              {...register("name", { required: "Name is required" })} 
              className="w-full p-2 border rounded-lg mb-2" 
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
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
            {/* Profile Photo */}
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700">Profile Photo</label>
                <input type="file" name="image" class="w-full p-3 rounded-lg bg-green-100 border text-gray-900 file:bg-green-200 file:text-gray-700 file:border-0 file:p-2 file:rounded-md file:mr-4 file:cursor-pointer" {...register("image", { required: "Image is required" })}
                  accept="image/*" />
                
              </div>
              {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-green-700 text-white py-2 rounded-lg mt-3 flex justify-center items-center cursor-pointer"
              disabled={loading}
            >
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Sign Up"}
            </button>
            <p className="text-sm pt-4">If Already Have An Account? <Link to={"/signin"} className="text-blue-600 font-medium">Please Login</Link></p>
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

export default SignUp;