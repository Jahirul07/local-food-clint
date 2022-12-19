import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to=''>Service All</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>
  return (
    <div className="navbar max-w-screen-xl mx-auto drop-shadow-xl h-20">
      <div className="navbar-start">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="font-bold lg:text-3xl sm:text-2xl">
          Local Food
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
            {menuItem}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt=""/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
      </div>
    </div>
  );
};

export default Header;