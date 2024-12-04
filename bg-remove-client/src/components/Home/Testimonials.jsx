import React from "react";
import { testimonialsData } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div>
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5">
        Our amazing users <br />
        are saying about us
      </h1>
      <div>
        {testimonialsData.map((testimonial, index) => (
          <div key={index}>
            <p>{'"'}</p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
