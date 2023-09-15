import React from "react";

const GlassContainer = ({ children }) => {
  return (
    <div className="w-full h-full">
   
      <div className=" m-2 p-6 rounded-xl bg-yellow-100 w-full  border-b-gray-400 ">
        {children}
      </div>
    </div>
  );
};

export default GlassContainer;
