// Loader.js
import React from "react";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen z-50">
      <div className="rounded-full border-t-4 border-black border-b- h-12 w-12">
        <h1 className="text-white">Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
