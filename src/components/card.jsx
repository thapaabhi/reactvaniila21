import React from "react";

const SlothCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={props.img}
        alt="Sloth"
        className="w-full h-[400px] object-contain rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
        <p className="text-gray-600 mb-2">{props.place}</p>
        <p className="text-gray-700">{props.description}</p>
      </div>
    </div>
  );
};

export default SlothCard;
