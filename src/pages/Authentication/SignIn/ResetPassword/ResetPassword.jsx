import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
    
    const {resetPassword} = useAuth();

  const onSubmit = async ({ email }) => {
    setLoading(true);
    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");
    } catch (error) {
      console.error(error);
      toast.error("Error sending reset email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <label className="block text-sm mb-1">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
          })}
          className="w-full p-2 border rounded-lg mb-2"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-2"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p className="text-sm text-center mt-4">
          Back to{" "}
          <Link to="/signin" className="text-blue-600 font-medium">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
