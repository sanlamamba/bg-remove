import React from "react";
import { assets } from "../../assets/assets";

const MainHero = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* Left */}
      <div className="flex-1">
        <h1 className=" text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-transparent bg-clip-text">
            Background
          </span>{" "}
          from <br className="max-md:hidden" /> any Image for Free
        </h1>
        <p className="my-6 text-[15px] text-neutral-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <input type="file" name="image" id="image" hidden />
        <label
          htmlFor="image"
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white"
        >
          <img src={assets.upload_btn_icon} alt="upload" width={20} />
          <p className="text-white text-sm">Upload your image</p>
        </label>
      </div>
      <div className="flex-1">
        <img src={assets.header_img} alt="hero" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default MainHero;
