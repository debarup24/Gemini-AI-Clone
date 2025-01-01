import React from "react";

const Greetings = () => {
  return (
    <div>
      <div className=" mt-7 my-1 md:my-8 text-4xl md:text-6xl font-semibold text-slate-500 p-5">
        <p className="mb-4">
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-red-400 bg-clip-text text-transparent">
            Hello, Developer
          </span>
        </p>
        <p>How can I help you today? </p>
      </div>
    </div>
  );
};

export default Greetings;
