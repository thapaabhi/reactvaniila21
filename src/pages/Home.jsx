import backgroundImage from "../assets/backgroundImage.jpg";
import React from "react";

const Home = () => {
  const gradientOverlayStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.2)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="h-screen flex items-center" style={gradientOverlayStyle}>
      <div className="container mx-auto flex justify-between items-center text-white z-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">BEAR loves pear</h1>
          <p className="text-lg mb-8">learn more about bears with us</p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full mr-4">
            Explore
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
