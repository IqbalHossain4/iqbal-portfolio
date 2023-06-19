import React from "react";
import CountUp, { useCountUp } from "react-countup";
const Experience = () => {
  useCountUp({
    ref: "counter",
    end: 20,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div>
      <div className="text-white container">
        <div className="content" />
        <p className="text-zinc-400 ml-8">detail/&gt;</p>
        <div className=" flex items-center justify-around">
          <div>
            <h4 className="text-2xl   font-semibold">
              Experience
              <span
                className="text-blue-500 "
                style={{
                  textShadow: "3px 3px 3px blue, 0 0 25px blue, 0 0 5px blue",
                }}
              >
                /&gt;
              </span>
            </h4>
            <CountUp
              end={2}
              enableScrollSpy
              className="font-extrabold text-[#071cf9]  text-5xl"
            />
            <span className="font-extrabold text-[#071cf9]  text-5xl">+</span>
          </div>
          <div>
            <h4 className="text-2xl   font-semibold">
              Projects
              <span
                className="text-blue-500 "
                style={{
                  textShadow: "3px 3px 3px blue, 0 0 25px blue, 0 0 5px blue",
                }}
              >
                /&gt;
              </span>
            </h4>
            <CountUp
              end={120}
              enableScrollSpy
              className="font-extrabold text-[#071cf9]  text-5xl"
            />
            <span className="font-extrabold text-[#071cf9]  text-5xl">+</span>
          </div>
          <div>
            <h4 className="text-2xl   font-semibold">
              Client
              <span
                className="text-blue-500 "
                style={{
                  textShadow: "3px 3px 3px blue, 0 0 25px blue, 0 0 5px blue",
                }}
              >
                /&gt;
              </span>
            </h4>
            <CountUp
              end={86}
              enableScrollSpy
              className="font-extrabold text-[#071cf9] text-5xl"
            />
            <span className="font-extrabold text-[#071cf9]  text-5xl">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
