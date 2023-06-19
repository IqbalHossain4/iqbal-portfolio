import React from "react";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div className="my-40 ">
      <div className=" container">
        <div className="text-white ">
          <p className="text-zinc-400 my-8">start/&gt;</p>
          <h1 className="text-4xl">
            <span className="font-bold"> Hi, my name is</span>{" "}
            <span className="text-blue-500">Iqbal Hossain</span>
          </h1>
          <h2 className="text-4xl mt-4">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "i design and develop Web Application",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "i design and develop Manage Web Application",
                1000,
              ]}
              wrapper="span"
              speed={40}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
