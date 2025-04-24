import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import SuccessCard from "./SuccessCard";
import Glide from "@glidejs/glide"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useSuccessStories from "../../hooks/useSuccessStories";
import StoryCard from "../StoryCard/StoryCard";

const SuccessStory = () => {
  const [showModal, setShowModal] = useState(false);
  const [stories, isPending, isError, error, refetch] = useSuccessStories();
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const sliderRef = useRef(null);

  // Don't touch this code anyout without "Walidur Tanjim's" permission
  // story card will scroll automatically after certain time (starting code)
  useEffect(() => {
    if (!isPending && stories?.length > 0 && sliderRef.current) {
      setTimeout(() => { // Ensure the DOM is ready before mounting Glide
        const slider = new Glide(sliderRef.current, {
          type: "carousel",
          focusAt: "center",
          perView: 3,
          autoplay: 2500,
          animationDuration: 700,
          gap: 24,
          classNames: {
            nav: {
              active: "[&>*]:bg-wuiSlate-700",
            },
          },
          breakpoints: {
            1024: { perView: 2 },
            640: { perView: 1 },
          },
        });

        slider.mount();

        return () => {
          slider.destroy();
        };
      }, 100);
    }
  }, [stories, isPending]);
  // story card will scroll automatically after certain time (ending code)

  const onSubmit = (data) => {
    const { title, description } = data;
    const saveInfo = {
      title,
      description,
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL
    };

    // post a success story into mongodb through axiosPublic
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
<<<<<<< HEAD
    <div className="mb-10 mt-4">
      <h2 className="text-4xl md:text-5xl text-center font-bold py-8 text-green-800 dark:text-green-300">
      Farmer’s Real Success Stories 🌾
      </h2>
      {/* Overlay */}
     

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
=======
    <section className="success-story w-full">
      <div className="success-story-inner container mx-auto px-6 lg:px-40 py-10">
        <h2 className="text-4xl md:text-5xl text-center font-bold py-8 text-green-800 dark:text-green-300">Farmer’s Real Success Stories 🌾</h2>

        {/* Overlay */}
        {user && (
          <div className="flex justify-center">
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700  transition duration-300" onClick={() => setShowModal(true)}>Share Your Success Story</button>
          </div>
>>>>>>> f845c22cbaea595c13ba685c3cf19da11820de8a
        )}

        {/* story card container div starts */}
        <div ref={sliderRef} className="glide-04 relative w-full">
          {/*    <!-- Controls --> */}
          <div className="grid grid-cols-6 mb-10">
            <h1 className="col-span-4 text-[1.6rem] md:text-[2rem] lg:text-[3rem]">Hear it from other not just us!</h1>

            {/* left & right buttons */}
            <div className="col-span-2 flex w-full items-center justify-center gap-2 p-4" data-glide-el="controls">
              {/* left button */}
              <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12" data-glide-dir="<" aria-label="prev slide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                  <title>prev slide</title>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </button>

              {/* right button */}
              <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12" data-glide-dir=">" aria-label="next slide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                  <title>next slide</title>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            {
              isPending ? (
                <div className="flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-slate-600">Loading...</h1>
                </div>
              ) : isError ? (
                <div className="flex items-center justify-center">
                  <h1 className="text-2xl font-medium text-red-600">{error?.message}</h1>
                </div>
              ) : (
                <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                  {
                    stories?.map(story => <StoryCard key={story?._id} story={story} />)
                  }
                </ul>
              )
            }
          </div>
        </div>

        {/* here modal */}
        <div className="mt-20">
          <div className="absolute inset-0 opacity-50" onClick={() => setShowModal(false)}></div>

          {showModal && (
            <>
              <div className="fixed inset-0 z-40 bg-transparent backdrop-blur-xs transition duration-300" onClick={() => setShowModal(false)}></div>

              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-8 transform transition-all duration-300 ease-in-out animate-zoomIn">
                  <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-300 ">Share Your Success Story</h2>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* title input field container div starts */}
                    <div className="my-4">
                      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">Title</label>

                      <input id="title" type="text" {...register("title", { required: "Title is required" })} className="w-full px-3 py-2 border dark:border-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Enter the title" />

                      {/* show error message dynamically */}
                      {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                    </div>

                    {/* description container div starts */}
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">Description</label>

                      <textarea id="description" {...register("description", { required: "Description is required" })} className="w-full px-3 py-2 border dark:border-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Enter the description" />

                      {/* show error message dynamically */}
                      {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                    </div>

                    {/* cancel & submit button container div of modal */}
                    <div className="flex justify-end gap-4">
                      <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300" onClick={() => setShowModal(false)}>Cancel</button>

                      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
