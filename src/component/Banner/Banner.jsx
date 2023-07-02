import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div
      id="banner"
      className="my-40"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className=" container ">
        <div className="text-white ">
          <p className="text-zinc-400 my-8">start/&gt;</p>
          <h1 className="text-4xl">
            <span className="font-bold"> Hi, my name is</span>{" "}
            <span
              className="text-blue-500"
              style={{
                textShadow: "3px 3px 3px blue, 0 0 25px blue, 0 0 5px blue",
              }}
            >
              Iqbal Hossain
            </span>
          </h1>
          <h2 className="text-4xl mt-4">
            <TypeAnimation
              sequence={[
                "i will do design Web Application",
                1000,
                "i will do develop web Application",
                1000,
              ]}
              wrapper="span"
              speed={40}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
        </div>
        <div className="mt-8 rounded-md">
          <Link to="services">
            <button className="border border-blue-600 mr-4 hover:bg-[#071cf9]  w-[150px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
              Hire me
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1j75F6BGdsseb9szlphAQhfhU_7AmNOwu/view?usp=sharing"
            target="blank"
          >
            <button className="border border-blue-600 hover:bg-[#071cf9]  w-[180px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
              Download resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
