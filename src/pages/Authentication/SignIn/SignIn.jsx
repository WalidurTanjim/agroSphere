
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import {
  AiOutlineLoading3Quarters,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FaGoogle, FaLeaf } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../../assets/SignIn/SignUp_Json/Login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SocialLogin from "../../../Components/SocialLogin";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { ThemeContext } from "../../../context/ThemeProvider";
import LoadingSpinner from "../../../secure/LoadingSpinner";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // New state for lockout
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, setEmail, setPage, email, setOTP } = useAuth();
  const axiosPublic = useAxiosPublic();
  const from = location?.state || "/";
  const { theme } = useContext(ThemeContext);
  const [countdown, setCountdown] = useState(0);

  const maxAttempts = 3;
  const lockDuration = 30000; // lockout period in milliseconds (30 seconds)

  const isLocked = lockoutUntil && new Date() < lockoutUntil;

  const onSubmit = async (data) => {
    // Check if account is locked
    if (lockoutUntil && new Date() < lockoutUntil) {
      toast.error("Account is temporarily locked. Please try again later.");
      return;
    }

    setLoading(true);
    let currentFailedAttempts = failedAttempts;

    try {
      const { email, password } = data;
      await signIn(email, password); // Firebase auth

      const res = await axiosPublic.post(
        `/jwt`,
        { email },
        { withCredentials: true }
      );

      if (res.data) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          timer: 1500,
          showConfirmButton: false,
        });
        // Reset failed attempts on success.
        setFailedAttempts(0);
        navigate(from);
      } else {
        toast.error("Invalid credentials");
        currentFailedAttempts++;
        setFailedAttempts(currentFailedAttempts);
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed, please try again");
      currentFailedAttempts++;
      setFailedAttempts(currentFailedAttempts);
    } finally {
      setLoading(false);
    }

    // If the updated count exceeds the threshold, lock the account
    if (currentFailedAttempts >= maxAttempts) {
      setLockoutUntil(new Date(new Date().getTime() + lockDuration));
      setFailedAttempts(0); // Reset counter
      toast.error("Too many failed attempts. Account locked for 30 seconds.");
    }
  };

  useEffect(() => {
    if (lockoutUntil && new Date() < lockoutUntil) {
      const timer = setInterval(() => {
        const diff = Math.ceil((lockoutUntil - new Date()) / 1000);
        if (diff > 0) {
          setCountdown(diff);
        } else {
          setCountdown(0);
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [lockoutUntil]);

  const nagigateToOtp = () => {
    // Use getValues to retrieve the current email value from the form
    const emailInput = getValues("email");
    if (emailInput && emailInput.trim() !== "") {
      // Optionally update context – this depends on your requirements
      setEmail(emailInput);
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      setOTP(OTP);

      axiosPublic
        .post("/send_recovery_email", {
          OTP,
          recipient_email: emailInput,
        })
        navigate("/otp")
        .then(() => toast.success("A new OTP has been sent to your email."))
        .then(() => setPage("otp"))
        .catch(console.log);
      return;
    }
    return toast.error("Please enter your email");
  };

  console.log(email);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className={`flex flex-col md:flex-row-reverse gap-8 justify-center items-center min-h-[calc(100vh-200px)] overflow-x-hidden ${
        theme == "light" ? "from-blue-50 to-indigo-50" : "bg-gray-800"
      } p-4 py-10 `}
    >
      <div className="flex-1">
        <Lottie
          animationData={animationData}
          loop={true}
          className="px-4"
        />
      </div>
      <div className="flex justify-center items-center flex-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`backdrop-blur-3xl ${
            theme === "light" ? "bg-white" : "bg-blue-100"
          } rounded-lg p-6 w-full max-w-lg shadow-2xl bg-white  dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8`}
        >
          <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Sign In</h2>
          <p className="text-base md:text-xl font-bold tracking-wide flex items-center justify-center py-2 md:py-4 dark:text-white text-gray-800">
            Welcome to <FaLeaf className="text-green-600 mx-2" size={28} />{" "}
            AgroSphere
          </p>

          <div>
            {/* Email */}
            <label className="block text-sm dark:text-white">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
              })}
              className="w-full p-2 border rounded-lg mb-2 dark:text-white"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            {/* Password */}
            <label className="block text-sm dark:text-white">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="w-full p-2 border rounded-lg mb-2 dark:text-white"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-2 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="text-xl" />
                ) : (
                  <AiOutlineEye className="text-xl" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className={`w-full bg-slate-600 hover:bg-slate-800 hover:transition text-white py-2 rounded-lg mt-3 flex justify-center items-center ${
                isLocked ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
              disabled={loading || isLocked}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
            <p className="text-center pt-4 cursor-pointer">
              <a
                onClick={() => nagigateToOtp()}
                className=" text-gray-500 text-sm mt-4 text-center"
              >
                Forgot Password?
                
              </a>
            </p>

            {/* Display lockout time if locked */}
            {isLocked && (
              <p className="text-center pt-4 text-red-500">
                Account locked for {countdown} seconds
              </p>
            )}
            <p className="text-sm pt-4 text-center dark:text-white">
              New Here?{" "}
              <Link to={"/signup"} className="text-blue-600 font-medium">
                Create An Account
              </Link>
            </p>
            <div className="divider dark:text-white dark:divide-emerald-50">or</div>
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