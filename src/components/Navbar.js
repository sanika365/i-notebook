
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ theme }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();

  return (
    <nav className={`bg-${theme.background} shadow-md`}>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <Link className={`text-2xl font-bold text-${theme.primary}`} to='/'>
          iNotebook
        </Link>
        <div className='flex items-center'>
          <button
            className={`block md:hidden text-${theme.text} focus:outline-none`}
            type='button'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
          <div className='hidden md:flex space-x-4'>
            <Link
              className={`text-${theme.text} hover:text-${theme.secondary} ${
                location.pathname === "/"
                  ? `border-b-2 border-${theme.secondary}`
                  : ""
              }`}
              to='/'
            >
              Home
            </Link>
            <Link
              className={`text-${theme.text} hover:text-${theme.secondary} ${
                location.pathname === "/about"
                  ? `border-b-2 border-${theme.secondary}`
                  : ""
              }`}
              to='/about'
            >
              About
            </Link>
          </div>
        </div>
        {!localStorage.getItem("token") ? (
          <div className='hidden md:flex space-x-4'>
            <Link
              className={`btn bg-${theme.primary} text-${theme.text}`}
              to='/login'
            >
              Login
            </Link>
            <Link
              className={`btn bg-${theme.primary} text-${theme.text}`}
              to='/signup'
            >
              Signup
            </Link>
          </div>
        ) : (
          <button
            onClick={handleLogout}
            className={`btn bg-${theme.primary} text-${theme.text}`}
          >
            Logout
          </button>
        )}
      </div>
      <div className='md:hidden'>
        <div className='flex flex-col space-y-2'>
          <Link
            className={`text-${theme.text} hover:text-${theme.secondary} ${
              location.pathname === "/"
                ? `border-b-2 border-${theme.secondary}`
                : ""
            }`}
            to='/'
          >
            Home
          </Link>
          <Link
            className={`text-${theme.text} hover:text-${theme.secondary} ${
              location.pathname === "/about"
                ? `border-b-2 border-${theme.secondary}`
                : ""
            }`}
            to='/about'
          >
            About
          </Link>
          {!localStorage.getItem("token") ? (
            <>
              <Link className={`text-${theme.primary}`} to='/login'>
                Login
              </Link>
              <Link className={`text-${theme.primary}`} to='/signup'>
                Signup
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className={`text-${theme.primary}`}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
