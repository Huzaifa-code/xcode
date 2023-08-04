import React from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1 className="text-2xl font-semibold "><span className='text-indigo-600 text-4xl'>.</span>xcode</h1>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex md:justify-center md:items-center gap-x-11 text-lg font-medium ">
              <li>
                <Link href="/">
                  <p className="hover:text-indigo-600">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <p className="hover:text-indigo-600">Courses</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:text-indigo-600">About us</p>
                </Link>
              </li>
              
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;