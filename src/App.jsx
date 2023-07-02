import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Banner from "./component/Banner/Banner";
import NavBer from "./component/NavBer";
import About from "./component/About_me/About";
import Work from "./component/Works/Work";
import Skills from "./component/Skills/Skills";
import Experience from "./component/experience/Experience";
import Card from "./component/Price_card/Card";
import Contact from "./component/Contact_form/Contact";
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [handleSocial, setHandleSocial] = useState(true);
  return (
    <>
      <div>
        <div className="absolute h-full top-[50%] right-0 font-serif">
          <div className="sticky text-white top-[50%] ">
            <div
              onClick={() => setHandleSocial(!handleSocial)}
              className="h-[100px] w-[40px] border  flex flex-col items-center justify-center gap-4  cursor-pointer border-blue-600  transition-colors duration-300 ease-in-out hover:bg-[#071cf9] hover:border-none  shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]"
            >
              <p className="rotate-90 transition-all ps-2  ">Social</p>
              <p className="mt-1">
                {handleSocial ? (
                  <FaAngleLeft className="text-2xl" />
                ) : (
                  <FaAngleRight className="text-2xl" />
                )}
              </p>
            </div>
            <div
              className={`${
                !handleSocial ? "block " : "hidden"
              } absolute top-[30px] right-[60px] `}
            >
              {!handleSocial ? (
                <div className="text-white transition-all z-50">
                  <p className=" hover:text-blue-600 my-4 transition-colors duration-300 ease-in-out hover:border-black border-[#071cf9] border-4 rounded-full shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]">
                    <a
                      href="https://web.facebook.com/ayaniqbalbd"
                      target="blank"
                    >
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
                    <a
                      href="https://www.instagram.com/ayana.iqbal/"
                      target="blank"
                    >
                      <FaInstagram className="text-2xl rounded-full" />
                    </a>
                  </p>
                  <p className=" hover:text-blue-600 my-4 transition-colors duration-300 ease-in-out shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)] hover:border-black border-[#071cf9] border-4 rounded-full">
                    <a href="https://github.com/IqbalHossain4" target="blank">
                      <FaGithub className="text-2xl rounded-full" />
                    </a>
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <NavBer />
        <Banner />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Card />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
