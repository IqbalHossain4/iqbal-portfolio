import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBer = () => {
  const navOptions = (
    <>
      <li>
        <span>
          <NavLink to="/">Home/&gt;</NavLink>
        </span>
      </li>
      <li>
        <span>
          <NavLink to="/service">Services/&gt;</NavLink>
        </span>
      </li>
      <li>
        <span>
          <NavLink to="/instructor">About/&gt;</NavLink>
        </span>
      </li>
      <li>
        <span>
          <NavLink to="/classes">Contact/&gt;</NavLink>
        </span>
      </li>
    </>
  );

  return (
    <nav
      className="sticky top-0 z-50 font-serif"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div
        className={` flex items-cente justify-between grad text-white px-8 `}
      >
        <div className="navbar-start">
          <div className="flex ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>

            <a href="/" className="btn btn-ghost normal-case   text-4xl">
              <span
                className="text-blue-500"
                style={{
                  textShadow: "3px 3px 3px blue, 0 0 25px blue, 0 0 5px blue",
                }}
              >
                &lt;
              </span>
              Iqbal
              <span
                className="text-blue-500 "
                style={{
                  textShadow: "3px 3px 3px blue, 0 0 25px blue, 0 0 5px blue",
                }}
              >
                /&gt;
              </span>
            </a>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navOptions}</ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBer;
