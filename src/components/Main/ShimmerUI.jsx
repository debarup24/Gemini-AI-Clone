import React from "react";

const ShimmerUI = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-2">
        <hr className="rounded-md bg-gradient-to-r from-rose-100 via-purple-200 to-blue-300 h-4 animate-pulse" />
        <hr className="rounded-md bg-gradient-to-r from-rose-100 via-purple-200 to-blue-300 h-4 animate-pulse" />
        <hr className="rounded-md bg-gradient-to-r from-rose-100 via-purple-200 to-blue-300 h-4 animate-pulse" />{" "}
      </div>
    </div>
  );
};

export default ShimmerUI;
