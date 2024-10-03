import React from "react";

const SkeletonProCard = () => {
  return (
    <div className="p-2.5  rounded-lg shadow ">
      <div className="rounded size-[150px] sm:size-[220px] bg-slate-200 animate-pulse " />
      <h2 className="h-[20px] max-w-[150px] bg-slate-200 rounded animate-pulse my-2"></h2>
      <p className="h-[40px] max-w-[200px] bg-slate-200 rounded animate-pulse my-[6px]"></p>
      <div className="h-[30px] max-w-[200px] bg-slate-200 rounded animate-pulse"></div>
    </div>
  );
};

export default SkeletonProCard;
