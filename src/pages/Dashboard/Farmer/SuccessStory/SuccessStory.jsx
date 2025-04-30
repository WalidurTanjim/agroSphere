import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import DashboardRoutes from '../../../../router/DashboardRoutes';
import useAxiosPublic from './../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const SuccessStory = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()
  // console.log(user)

  const onSubmit = (data) => {
    console.log(data);
    const { title, description } = data;
    const saveInfo = {
      title,
      description,
      name: user.displayName,
      email: user.email,
      image: user.photoURL
    }
    // Handle form submission
    console.log(saveInfo)
    axiosPublic.post('/success-stories', saveInfo)
      .then(res => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success story added successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        reset()
      })
  };
  return (
    <div className=" mt-20 w-full md:w-[600px] mx-auto bg-white p-8 rounded-lg shadow-lg">
      <DashboardRoutes />
      <h2 className="text-2xl font-bold text-center mb-6">Share Your Success Story</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter the title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter the description"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SuccessStory;