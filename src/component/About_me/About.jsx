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
                  <button className="text-black" onClick={toggleShowMore}>
                    See Less...
                  </button>
                </div>
              ) : (
                <button className="text-black" onClick={toggleShowMore}>
                  See More...
                </button>
              )}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="w-[200px] h-[200px] bg-black  rounded-full border mx-auto">
              <img
                src={logo}
                className="w-full h-full rounded-full"
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
