import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import SuccessCard from "./SuccessCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const {
    data: success = [],
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["success"],
    queryFn: async () => {
      const res = await axiosPublic.get("/success-stories");
      const data = await res.data;
      return data;
    },
    refetchInterval: 60000, // Auto refetch every 60 seconds
  });

  const onSubmit = (data) => {
    const { title, description } = data;
    const saveInfo = {
      title,
      description,
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    axiosPublic.post("/success-stories", saveInfo).then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success story added successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
      setShowModal(false);
    });
  };
  return (
    <div className="mb-10 mt-4">
      <h2 className="text-4xl md:text-5xl text-center font-bold py-8 text-green-800 dark:text-green-300">
      Farmer’s Real Success Stories 🌾
      </h2>
      {/* Overlay */}
      {user && (
        <div className="flex justify-center">
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700  transition duration-300"
            onClick={() => setShowModal(true)}
          >
            Share Your Success Story
          </button>
        </div>
      )}

      <div className="z-0">
        <Marquee pauseOnHover direction="left" speed={20}>
          {success.map((story, index) => (
            <SuccessCard key={index} story={story}></SuccessCard>
          ))}
        </Marquee>
      </div>
      <div className="z-0">
        <Marquee pauseOnHover direction="right" speed={20}>
          {success.map((story, index) => (
            <SuccessCard key={index} story={story}></SuccessCard>
          ))}
        </Marquee>
      </div>

      {/* here modal */}
      <div className="mt-20">
        <div
          className="absolute inset-0 opacity-50"
          onClick={() => setShowModal(false)}
        ></div>

        {showModal && (
          <>
            <div
              className="fixed inset-0 z-40 bg-transparent backdrop-blur-xs transition duration-300"
              onClick={() => setShowModal(false)}
            ></div>

            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-8 transform transition-all duration-300 ease-in-out animate-zoomIn">
                <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-300 ">
                  Share Your Success Story
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="my-4">
                    <label
                      className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      {...register("title", { required: "Title is required" })}
                      className="w-full px-3 py-2 border dark:border-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="Enter the title"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      {...register("description", {
                        required: "Description is required",
                      })}
                      className="w-full px-3 py-2 border dark:border-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="Enter the description"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SuccessStory;
