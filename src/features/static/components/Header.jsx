"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex [box-shadow:rgba(0,0,0,0.1)_-4px_9px_25px_-6px] py-4 px-4 sm:px-10 bg-white min-h-[75px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 w-full">
        <h1 className="text-2xl font-mono font-bold ">INVOICE APP</h1>
        <div
          id="collapseMenu"
          className={`lg:ml-12 ${
            isClient && isMenuOpen ? "block" : "max-lg:hidden"
          }  lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          {isMenuOpen && (
            <button
              id="toggleClose"
              onClick={toggleMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                />
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                />
              </svg>
            </button>
          )}
          <ul
            className={`lg:flex lg:gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${
              isMenuOpen ? "block" : "max-lg:hidden"
            }`}
          >
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:pb-4 px-3 lg:hidden">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/"
                className="hover:text-blue-700 text-blue-700 block font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/company"
                className="hover:text-blue-700 text-slate-900 block font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Company
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/feature"
                className="hover:text-blue-700 text-slate-900 block font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Feature
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-blue-700 text-slate-900 block font-medium text-base"
              >
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-blue-700 text-slate-900 block font-medium text-base"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-blue-700 text-slate-900 block font-medium text-base"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex ml-auto gap-3">
          <Link
            href="/login"
            className="px-4 py-2 border border-gray-400 active:opacity-80 duration-200 text-[15px] rounded-md font-medium text-neutral-700 cursor-pointer"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 active:opacity-80 duration-200 text-[15px] rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
          >
            Register
          </Link>
          <div id="toggleOpen" className="flex ml-auto lg:hidden">
            <button onClick={toggleMenu} className="ml-4 cursor-pointer">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
