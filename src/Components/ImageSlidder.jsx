import React, { useState } from "react";
import { imageData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ImageSlidder = (slides) => {
  const [current, setCurrent] = useState(0);

  const lenth = slides.length;

  const nextSlide = () => {
    setCurrent(current === lenth - 1 ? 0 : current + 1);
  };

  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? lenth - 1 : current - 1);
  };

  if (Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {imageData.map((slide, index) => {
        return (
          <div className={index===current ? 'slide active' : 'slide'} key={index}>

            {index === current && ( <img
              src={slide.image}
              key={index}
              alt="travel image"
              className="image"
            />)}

          </div>
        );
      })}
    </section>
  );
};

export default ImageSlidder;
