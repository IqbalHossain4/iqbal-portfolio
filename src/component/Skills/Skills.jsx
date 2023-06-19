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
const Skills = () => {
  return (
    <div className=" overflow-hidden mt-96 bg-blue-600 mx-auto p-8">
      <div className="container w-full">
        <p className="my-8 text-zinc-400">skill/&gt;</p>
        <div className="flex flex-wrap justify-center  items-center gap-6  mx-auto">
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={html} className="w-full h-full" alt="" />
          </div>
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={css} className="w-full h-full" alt="" />
          </div>
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={js} className="w-full h-full" alt="" />
          </div>
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={react} className="w-full h-full" alt="" />
          </div>
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={tailwind} className="w-full h-full" alt="" />
          </div>
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={bootstrap} className="w-full h-full" alt="" />
          </div>
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={nodejs} className="w-full h-full" alt="" />
          </div>
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={mongodb} className="w-full h-full" alt="" />
          </div>
          <div className="w-[80px] h-[80px] changeColor ">
            <img src={firebase} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
