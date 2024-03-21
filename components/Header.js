"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imageAsset from "/image/logo.jpg";

const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDatasetDropdownOpen, setIsDatasetDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeDatasetDropdown = () => {
    setIsDatasetDropdownOpen(false);
  };

  const toggleDatasetDropdown = () => {
    setIsDatasetDropdownOpen(!isDatasetDropdownOpen);
  };

  const handleDropdownLinkClick = () => {
    closeMobileMenu();
    closeDatasetDropdown();
  };

  return (
    <header className="bg-white border-gray-200 dark:border-gray-700 relative z-10 sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={imageAsset}
            alt="Flowbite Logo"
            style={{
              margin: "-1rem",
              padding: "-20px",
              width: "28rem",
              height: "8rem",
            }}
          />
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transform ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark-bg-white md:dark-bg-white dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-1 pr-1 text-blue bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark-text-blue-500 dark:bg-blue-600 md:dark-bg-transparent"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <div className="relative group">
                <button
                  onClick={toggleDatasetDropdown}
                  className="flex items-center justify-between w-full py-2 pl-1 pr-1 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-gray-700 md:p-0 md:w-auto dark-text-white md:dark-hover-text-gray-500 dark-focus-text-white dark-border-gray-700 dark-hover-bg-gray-700 md:dark-hover-bg-transparent"
                >
                  Dataset{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="nonenes"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    isDatasetDropdownOpen ? "block" : "hidden"
                  } absolute  space-y-2 text-sm text-gray-700 dark:text-gray-400 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark-bg-gray-700 dark:divide-gray-600 z-20`}
                >
                  <Link
                    href="/Details"
                    className="block -pt-2 -mb-1 px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-gray-500"
                    onClick={handleDropdownLinkClick}
                  >
                    Details
                  </Link>
                  <Link
                    href="/Download"
                    className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-gray-500"
                    onClick={handleDropdownLinkClick}
                  >
                    Download
                  </Link>
                </div>
              </div>
            </li>
            {/* Rest of the menu items */}
            {/* ... */}

            <li>
              <Link
                href="/Expertise"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-gray-700 md:p-0 dark-text-white md:dark-hover-text-gray-500 dark-hover-bg-gray-700 dark-hover-text-white"
                onClick={closeMobileMenu}
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                href="/Benchmark"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-gray-700 md:p-0 dark-text-gray md:dark-hover-text-gray-500 dark-hover-bg-gray-700 dark-hover-text-white"
                onClick={closeMobileMenu}
              >
                Benchmark
              </Link>
            </li>

            <li>
              <Link
                href="/Events"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-gray-700 md:p-0 dark-text-gray md:dark-hover-text-gray-500 dark-hover-bg-gray-700 dark-hover-text-white"
                onClick={closeMobileMenu}
              >
                News and Events
              </Link>
            </li>

            <li>
              <Link
                href="/Contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-gray-700 md:p-0 dark-text-gray md:dark-hover-text-gray-500 dark-hover-bg-gray-700 dark-hover-text-white"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <Link
              href={loginUrl}
              className="block pl-3 pr-3 text-white bg-indigo-500 border-0 px-1 focus-outline-none hover-bg-indigo-600 rounded text-lg mt-0.1 md:mt-0"
              onClick={closeMobileMenu}
            >
              Log In
            </Link>

            {/* <Link
              href="/Login"
              className="block pl-3 pr-3 text-white bg-indigo-500 border-0 px-1 focus-outline-none hover-bg-indigo-600 rounded text-lg mt-0.1 md:mt-0"
              onClick={closeMobileMenu}
            >
              Log In
            </Link> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
