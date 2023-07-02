import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../public/icon.png";
const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
    >
      <div className="w-[80%] mt-[80px] mx-auto">
        <p className="my-8 text-zinc-400">footer/&gt;</p>

        <footer className="flex items-center justify-evenly p-10 font-serif text-white">
          <div>
            <img src={logo} alt="logo" width="120px" />
            <p>
              personal portfolio
              <br />
              copyright &copy; by iqbal
            </p>
          </div>
          <div>
            <span className="text-white">Social</span>
            <div className="grid grid-flow-col gap-4 text-white transition-all z-50">
              <p className=" hover:text-blue-600 my-4 transition-colors duration-300 ease-in-out hover:border-black border-[#071cf9] border-4 rounded-full shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                <a href="https://web.facebook.com/ayaniqbalbd" target="blank">
                  <FaFacebookSquare className="text-2xl rounded-full" />
                </a>
              </p>
              <p className=" hover:text-blue-600 my-4 transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)] hover:border-black border-[#071cf9] border-4 rounded-full">
                <a
                  href="https://www.linkedin.com/in/iqbal-hossain10/"
                  target="blank"
                >
                  <FaLinkedin className="text-2xl rounded-full" />
                </a>
              </p>
              <p className=" hover:text-blue-600 my-4 transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)] hover:border-black border-[#071cf9] border-4 rounded-full">
                <a href="https://www.instagram.com/ayana.iqbal/" target="blank">
                  <FaInstagram className="text-2xl rounded-full" />
                </a>
              </p>
              <p className=" hover:text-blue-600 my-4 transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)] hover:border-black border-[#071cf9] border-4 rounded-full">
                <a href="https://github.com/IqbalHossain4" target="blank">
                  <FaGithub className="text-2xl rounded-full" />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
