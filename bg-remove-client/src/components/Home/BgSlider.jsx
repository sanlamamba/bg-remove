import React from "react";
import { assets } from "../../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = React.useState(50);

  const handleSliderChange = (e) => {
    if (e.target.value > 100) return setSliderPosition(100);
    if (e.target.value < 0) return setSliderPosition(0);
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background With
        <br /> High Quality and Assurance
      </h1>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        <img
          src={assets.image_w_bg}
          alt="background image"
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />
        <img
          src={assets.image_wo_bg}
          alt="foreground image"
          className="absolute top-0 left-0 w-full h-full"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full z-10 slider"
        />
      </div>
    </div>
  );
};

export default BgSlider;
