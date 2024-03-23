import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="  text-white">
        {/* Row 1: Logo and Lists */}
        <div className="flex flex-col md:flex-row items-center justify-around py-10  px-[150px]">
          {/* Column 1: Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-bold text-4xl">
              <Link to="/">BEAR</Link>
            </span>
          </div>

          {/* Columns 2, 3, 4: Lists */}
          <div className="space-x-[60px] flex text-lg">
            <ul className="pl-10">
              <li className="text-2xl mb-5 text-center text-gray-200 font-bold ">
                Company
              </li>
              <li className="text-gray-300 font-medium">About </li>
              <li className="text-gray-300 font-medium">Company </li>
              <li className="text-gray-300 font-medium">Blogs</li>
            </ul>
            <ul>
              <li className="text-2xl mb-5  text-gray-200 font-bold ">Legal</li>
              <li className="text-gray-300 font-medium">Private Polices</li>
              <li className="text-gray-300 font-medium">Copyrights</li>
            </ul>
            <ul>
              <li className="text-2xl mb-5 text-gray-200 font-bold ">
                Downloads
              </li>
              <li className="text-gray-300 font-medium">IOS</li>
              <li className="text-gray-300 font-medium">Andriods</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-300"></div>

        {/* Row 2: Social Media Icons */}
        <div className="flex space-x-10 items-center justify-center py-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-2 text-gray-300 hover:text-gray-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-2 text-gray-300 hover:text-gray-500"
          >
            <FaFacebookMessenger />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-2 text-gray-300 hover:text-gray-500"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
