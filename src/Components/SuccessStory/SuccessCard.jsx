import React from "react";

const SuccessCard = ({story}) => {

  return (
    <div className="max-w-sm rounded-lg overflow-hidden z-0 backdrop-blur-3xl bg-slate-50 p-6 m-10 shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out dark:border dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center mb-4">
        <div className="tooltip tooltip-bottom" data-tip={story?.name}>
          <img
            className="w-24 h-24 rounded-full object-cover dark:border-4 dark:border-gray-500"
            src={story?.image}
            referrerPolicy="no-referrer"
            alt="User"
          />
          
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-lg mb-2  text-justify dark:text-gray-300">{story?.title.slice(0, 60)} ...</div>
        <p className="text-gray-900 text-base text-justify  dark:text-gray-300">{story?.description.slice(0, 189)}...</p>
      </div>
    </div>
  );
};

export default SuccessCard;