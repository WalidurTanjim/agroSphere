import React, { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useSuccessStories from "../../hooks/useSuccessStories";
import StoryCard from "../StoryCard/StoryCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const SuccessStory = () => {
  const [showModal, setShowModal] = useState(false);
  const [stories, isPending, isError, error] = useSuccessStories();
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const sliderRef = useRef(null);

  // Initialize Glide Carousel
  useEffect(() => {
    if (!isPending && stories?.length > 0 && sliderRef.current) {
      setTimeout(() => {
        const slider = new Glide(sliderRef.current, {
          type: "carousel",
          focusAt: "center",
          perView: 3,
          autoplay: 2500,
          animationDuration: 700,
          gap: 24,
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

  const onSubmit = (data) => {
    const { title, description } = data;
    const saveInfo = {
      title,
      description,
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL
    };

    axiosPublic.post("/success-stories", saveInfo).then(() => {
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
    <section className="success-story w-full mt-5">
      <div className="container mx-auto px-6 lg:px-40 py-12">
        <SectionTitle
          title={"Inspiring Agricultural Journeys"}
          sub_title={"True experiences shared by farmers shaping the future of agriculture"}
        />

        <div ref={sliderRef} className="glide-04 relative w-full mt-7">
          <div className="grid items-center grid-cols-6 mb-8">
            <h1 className="col-span-4 text-[1.6rem] md:text-[2rem] text-green-800 dark:text-green-300">
              Hear it from others, not just us!
            </h1>

            <div className="col-span-2 flex items-center justify-center gap-2 p-4" data-glide-el="controls">
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 lg:h-12 lg:w-12"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 15.75L3 12l3.75-3.75M3 12h18" />
                </svg>
              </button>

              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 lg:h-12 lg:w-12"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden" data-glide-el="track">
            {isPending ? (
              <div className="flex justify-center">
                <h1 className="text-2xl font-medium text-slate-600">Loading...</h1>
              </div>
            ) : isError ? (
              <div className="flex justify-center">
                <h1 className="text-2xl font-medium text-red-600">{error?.message}</h1>
              </div>
            ) : (
              <ul className="flex flex-nowrap relative w-full overflow-hidden">
                {stories?.map((story) => (
                  <StoryCard key={story?._id} story={story} />
                ))}
              </ul>
            )}
          </div>

          {user && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-green-600 hover:to-lime-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
              >
                Share Your Success Story
              </button>
            </div>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <>
            <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>

            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-300">Share Your Success Story</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Title</label>
                    <input
                      {...register("title", { required: "Title is required" })}
                      className="w-full px-3 py-2 border dark:border-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="Enter the title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Description</label>
                    <textarea
                      {...register("description", { required: "Description is required" })}
                      className="w-full px-3 py-2 border dark:border-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="Enter the description"
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
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
    </section>
  );
};

export default SuccessStory;
