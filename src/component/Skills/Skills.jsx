import React from "react";
import html from "../../assets/all_courses/html.png";
import css from "../../assets/all_courses/css.png";
import js from "../../assets/all_courses/js.png";
import react from "../../assets/all_courses/react.png";
import nodejs from "../../assets/all_courses/nodejs.png";
import tailwind from "../../assets/all_courses/tailwind.png";
import bootstrap from "../../assets/all_courses/bootstrap.png";
import mongodb from "../../assets/all_courses/mongodb.png";
import firebase from "../../assets/all_courses/firebase.png";
import { Tilt } from "react-tilt";

const Skills = () => {
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
    <div
      className=" overflow-hidden  grad mx-auto font-serif"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container w-full">
        <p className="my-8 text-zinc-400">skill/&gt;</p>
        <div className="flex flex-wrap justify-center  items-center gap-6 p-8  mx-auto">
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={html} className="w-full h-full" alt="" />
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={css} className="w-full h-full" alt="" />
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={js} className="w-full h-full" alt="" />
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={react} className="w-full h-full" alt="" />
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={tailwind} className="w-full h-full" alt="" />
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={bootstrap} className="w-full h-full" alt="" />
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={nodejs} className="w-full h-full" alt="" />
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={mongodb} className="w-full h-full" alt="" />
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="w-[80px] h-[80px] changeColor ">
              <img src={firebase} className="w-full h-full" alt="" />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Skills;
