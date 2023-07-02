import React from "react";
import { FaCheck } from "react-icons/fa";

const Card = () => {
  return (
    <div id="services">
      <div className="container font-serif">
        <p className="text-zinc-400 my-8">service/&gt;</p>
        <div className="w-full md:flex items-center justify-around gap-8 mx-auto">
          <div
            className="bg-[#071cf9] p-8 text-white rounded-lg hover:bg-transparent  hover:border border-[#071cf9] transition-colors duration-300 ease-in-out mb-8"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="mb-16 font-bold text-xl">Hourley Basis</p>
            <h1 className="text-2xl font-extrabold ">
              $10 <span className="text-sm">Hour</span>
            </h1>
            <p className="mt-4 text-justify">
              I will provide a single page Design with eye catchy deisgn. Also
              with provide 7/24 days free support. and fix any bugs.
            </p>
            <p className="flex items-center gap-2 mt-4 ">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Eye Catchy Design</span>
            </p>
            <p className="flex items-center gap-2 ">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Single Page Design</span>
            </p>
            <p className="flex items-center gap-2  line-through text-gray-500">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Full website Design</span>
            </p>
            <p className="flex items-center gap-2 mb-4 line-through text-gray-500">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Full time Manage </span>
            </p>
            <button className="border mt-4 w-full border-blue-600 bg-black hover:bg-[#071cf9]  w-[150px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
              Start Project
            </button>
          </div>
          <div
            className="bg-[#071cf9] p-8 text-white rounded-lg hover:bg-transparent  hover:border border-[#071cf9] transition-colors duration-300 ease-in-out mb-8"
            data-aos="fade-up-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="mb-16 font-bold text-xl">Weekly</p>
            <h1 className="text-2xl font-extrabold ">
              $550 <span className="text-sm">week</span>
            </h1>
            <p className="mt-4 text-justify">
              I will provide full website Design with eye catchy deisgn. Also
              with provide 15/24 days free support. and fix any bugs.
            </p>
            <p className="flex items-center gap-2 mt-4 ">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Eye Catchy Design</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Full website Design</span>
            </p>
            <p className="flex items-center gap-2 ">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Full time Manage</span>
            </p>
            <p className="flex items-center gap-2 mb-4 line-through text-gray-500">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> 7/24 support</span>
            </p>
            <button className="border mt-4 w-full border-blue-600 bg-black hover:bg-[#071cf9]  w-[150px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
              Start Project
            </button>
          </div>
          <div
            className="bg-[#071cf9] p-8 text-white rounded-lg hover:bg-transparent  hover:border border-[#071cf9] transition-colors duration-300 ease-in-out mb-8"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="mb-16 font-bold text-xl">Full Time</p>
            <h1 className="text-2xl font-extrabold ">
              $1000 <span className="text-sm">Month</span>
            </h1>
            <p className="mt-4 text-justify">
              I will provide full website Design with eye catchy deisgn. Also
              with provide 30/24 days free support. and fix any bugs.
            </p>
            <p className="flex items-center gap-2 mt-4 ">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Eye Catchy Design</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Full website Design</span>
            </p>
            <p className="flex items-center gap-2 ">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> Full time manage</span>
            </p>
            <p className="flex items-center gap-2 ">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <span> 30/24 support</span>
            </p>
            <button className="border mt-4 w-full border-blue-600 bg-black hover:bg-[#071cf9]  w-[150px] h-[40px] cursor-pointer text-white rounded-md tracking-wide transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
              Start Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
