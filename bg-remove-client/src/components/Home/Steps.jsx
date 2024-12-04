import React from "react";
import { assets } from "../../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br />
        image in seconds
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div className="flex items-center gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img src={assets.upload_icon} alt="upload icon" className="max-w-9" />
          <div>
            <p className="text-xl font-medium">Upload your image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Upload the image you want to remove the background from.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img src={assets.upload_icon} alt="upload icon" className="max-w-9" />
          <div>
            <p className="text-xl font-medium">Upload your image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Upload the image you want to remove the background from.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img src={assets.upload_icon} alt="upload icon" className="max-w-9" />
          <div>
            <p className="text-xl font-medium">Upload your image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Upload the image you want to remove the background from.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
