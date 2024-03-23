import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-black">
      <nav>
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-3xl font-bold text-white transition duration-300 transform hover:scale-105">
            BEAR
          </div>
          <div className="lg:hidden">
            <button className="text-white focus:outline-none focus:text-indigo-500">
              {/* You can add your hamburger menu icon here */}
              &#9776;
            </button>
          </div>
          <div className="hidden lg:flex gap-10 font-medium text-xl">
            <NavLink to="/" text="Home" />
            <NavLink to="/Categories" text="Categories" />
            <NavLink to="/contact" text="Contact Us" />
            <div></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="text-white transition duration-300 hover:text-indigo-500"
    >
      {text}
    </Link>
  );
};

export default Navigation;
