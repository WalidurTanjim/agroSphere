import React from "react";

const SuccessCard = ({story}) => {

  return (
    <div className="max-w-sm rounded-lg overflow-hidden z-0 backdrop-blur-3xl bg-slate-50 p-6 m-10 shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out">
      <div className="flex justify-center mb-4">
        <div className="tooltip tooltip-bottom" data-tip={story?.name}>
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={story?.image}
            referrerPolicy="no-referrer"
            alt="User"
          />
          
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-lg mb-2  text-justify">{story?.title.slice(0, 60)} ...</div>
        <p className="text-gray-900 text-base text-justify">{story?.description.slice(0, 189)}...</p>
      </div>
    </div>
  );
};

export default SuccessCard;