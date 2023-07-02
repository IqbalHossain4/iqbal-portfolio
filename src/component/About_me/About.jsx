import React, { useState } from "react";
import logo from "../../assets/image.png";
import "./circle.css";
const About = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      id="about"
      className="text-white grad py-4 font-serif"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
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
            {/* <div className="relative w-[240px]  h-[240px]">
              <div className="w-[40px]  h-[40px]  rotater    rounded-full  mx-auto shadow-[0_10px_20px_rgba(13,_53,_240,_0.9)]"></div>
              <img
                src={logo}
                className="w-[180px] changeColor bg-black h-[180px] absolute left-[13%] top-[4%]  rounded-full"
                alt="logo"
              />
            </div> */}

            <section className="main-container">
              <div className="main">
                <div className="big-circle">
                  <div className="icon-block">
                    <img
                      src="https://ucarecdn.com/614bf107-8b04-45d2-9be6-1123d09b72ba/webdevicon.png"
                      alt="web design icon"
                    />
                  </div>
                  <div className="icon-block">
                    <img
                      src="https://ucarecdn.com/ffcb2c5d-1bfb-4a28-b52d-94ad412b1ced/gamedesignicon.png"
                      alt="game design icon"
                    />
                  </div>
                  <div className="icon-block">
                    <img
                      src="https://ucarecdn.com/37f45061-b881-47a3-985a-ebc6e6a8e81b/gamedevicon.png"
                      alt="game dev icon"
                    />
                  </div>
                  <div className="icon-block">
                    <img
                      src="https://ucarecdn.com/9a14f2fc-d7e7-46bf-aa1a-ee2e2210d425/uiuxicon.png"
                      alt="ui-ux icon"
                    />
                  </div>
                </div>
                <div className="circles">
                  <div className="icon-block">
                    <img
                      src="https://ucarecdn.com/ae76ecf5-1d3f-4edc-884c-dc2984976a7e/appicon.png"
                      alt="app icon"
                    />
                  </div>
                  <div className="icon-block">
                    <img
                      src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png"
                      alt="blockchain icon"
                    />
                  </div>
                  <div className="icon-block">
                    <img
                      src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png"
                      alt="ar-vr icon"
                    />
                  </div>
                  <div className="icon-block">
                    <img
                      src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png"
                      alt="artificial intelligence icon"
                    />
                  </div>
                </div>
                <div className="center-logo">
                  <img
                    src={logo}
                    className="md:w-[250px] md:h-[250px] changeColor bg-black rounded-[100%]"
                    alt="logo"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
