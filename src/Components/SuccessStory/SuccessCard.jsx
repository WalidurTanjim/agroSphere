import React from "react";
import useAuth from "../../hooks/useAuth";

const SuccessCard = () => {
  const { user } = useAuth();
  const title = "Success Story Title";
  const description =
    "This is a brief description of the success story. It highlights the key achievements and milestones.";

  return (
    <div className="max-w-sm rounded-lg overflow-hidden z-0 bg-white p-6 m-10 shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out">
      <div className="flex justify-center mb-4">
        <div className="tooltip tooltip-left" data-tip={user?.displayName}>
          <img
            className="w-24 h-24 rounded-full object-cover"
            src="https://i.ibb.co.com/ymwp0HbY/image.jpg"
            alt="Success Story"
          />
          
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-xl mb-2 text-green-700">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default SuccessCard;