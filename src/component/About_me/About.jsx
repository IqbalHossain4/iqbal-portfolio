import React, { useState } from "react";
import logo from "../../assets/image.png";
const About = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="text-white grad py-4 ">
      <div className="container">
        <p className="text-zinc-400">about/&gt;</p>
        <div className="md:flex   items-center justify-evenly w-full">
          <div className="w-3/4 mx-auto">
            <h1 className="text-[#071cf9] font-bold">Iqbal Hossain</h1>
            <p>Web Developer...</p>
            <div className="text-md">
              <p>
                Hi, I'am Iqbal Hossain, I am a Front-end Web developer. I have
                experience in real-time work I have done so many projects in the
                past. I developed so many websites using my short knowledge. I
                love learning new technologies.
              </p>
              {showMore ? (
                <div>
                  <p>
                    I know every person never knows everything but I am trying
                    to learn every day new something. Learning is part of my
                    life. I believe that if I want to do something new then I
                    have to need to make myself different from any other.
                  </p>
                  <button className="text-[#071cf9]" onClick={toggleShowMore}>
                    See Less...
                  </button>
                </div>
              ) : (
                <button className="text-[#071cf9]" onClick={toggleShowMore}>
                  See More...
                </button>
              )}
            </div>
          </div>

          <div className="md:w-1/2  ml-16">
            <div className="relative w-[240px]  h-[240px]">
              <div className="w-[40px]  h-[40px]  rotater    rounded-full  mx-auto shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]"></div>
              <img
                src={logo}
                className="w-[180px] changeColor bg-black h-[180px] absolute left-[13%] top-[4%]  rounded-full"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
