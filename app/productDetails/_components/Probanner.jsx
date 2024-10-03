import React from "react";
import Image from "next/image";

const Probanner = ({ pro }) => {
  return (
    <div>
      {pro?.banner ? (
        <Image
          width={400}
          height={350}
          src={pro?.banner?.url}
          className=" rounded-lg"
          alt={pro?.Title}
        />
      ) : (
        <div className="size-[400px] rounded-lg bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default Probanner;
