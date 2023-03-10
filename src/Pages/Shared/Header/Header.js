import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then(() => {})
    .then(err => console.error(err))
  }


    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/foodsall'>Service All</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>
  return (
    <div className="navbar sticky top-0 z-40 bg-white bg-opacity-60 max-w-screen-xl mx-auto drop-shadow-xl h-20">
      <div className="navbar-start z-10">
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
        {
          user?.uid ?
          <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt=""/>
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between">
          {user?.email && user.email}
          </Link>
        </li>
        <li><Link to='/myreview'>My reviews</Link></li>
        <li><Link to='/addservice'>Add Service</Link></li>
        <li onClick={handleSignOut}><Link>Logout</Link></li>
      </ul>
        </div>
          :
          <button className="btn btn-active btn-secondary"><Link to='/login'>Login</Link></button>
        }

      </div>
    </div>
  );
};

export default Header;
