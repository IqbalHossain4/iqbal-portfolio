import React from "react";
import { Tilt } from "react-tilt";
import sky from "../../assets/sky.png";
const Work = () => {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div>
      <div className="container">
        <p className="text-zinc-400 my-8">work/&gt;</p>
        <div className="relative">
          <Tilt
            options={defaultOptions}
            className="md:w-[400px]  md:h-[350px] changeColor"
          >
            <div className="relative cursor-pointer ">
              <a href="https://simple-firebase-5fde6.web.app/" target="blank">
                <img src={sky} className="" alt="" />
              </a>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-blend-overlay"></div>
            </div>
          </Tilt>
          <div className="md:absolute top-2 right-4">
            <Tilt
              options={defaultOptions}
              className="md:w-[400px] md:h-[350px] changeColor"
            >
              <div className="relative cursor-pointer">
                <a href="https://simple-firebase-5fde6.web.app/" target="blank">
                  <img src={sky} alt="" />
                </a>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-blend-overlay"></div>
              </div>
            </Tilt>
          </div>
          <div className="md:absolute left-[30%]">
            <Tilt
              options={defaultOptions}
              className="md:w-[400px] md:h-[350px] changeColor"
            >
              <div className="relative cursor-pointer">
                <a href="https://simple-firebase-5fde6.web.app/" target="blank">
                  <img src={sky} alt="" />
                </a>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-blend-overlay"></div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
