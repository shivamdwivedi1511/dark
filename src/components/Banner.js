import React from "react";
import { formatDate } from "../utils/helper";

const Banner = ({ data }) => {
  return (
    <div
      className={`h-[85vh]`}
      style={{
        background: `url(${data.urlToImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full flex items-end opacity-60 bg-gradient-to-b from-transparent via-transparent to-black">
        <div className="m-5 p-5">
          <p className="text-4xl py-2">{data.title}</p>
          <div className="flex text-md my-2">
            <p className="bg-yellow-400 text-black p-1">{data.source.name}</p>{" "}
            <p className="p-1 ml-2 text-[#aeaca4] capitalize">
              {formatDate(data.publishedAt)}
            </p>
          </div>
          <p className="text-xs text-[#949491]">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
