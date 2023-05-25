import React from "react";
import { formatDate } from "../../utils/helper";

export const NewsCard = ({ data }) => {
  return (
    <div className="flex w-[900px] shadow-xl shadow-slate-900 m-3 hover:shadow-slate-800">
      <img
        className="max-h-[200px] min-w-[350px] p-2 m-2"
        alt="news tile"
        src={
          data.urlToImage ||
          "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/E70A/production/_129864195_bbc-sport-index-imagery-3-split-images-gradient-d55de091-89cf-4f8a-a1cb-6ed6ab1ff7db.png"
        }
      />
      <div>
        <p className="text-lg py-2"> {data.title}</p>
        <div className="flex text-xs my-2">
          <p className="bg-yellow-400 text-black p-1">{data.source.name}</p>{" "}
          <p className="p-1 ml-2 text-[#74726b] capitalize">
            {formatDate(data.publishedAt)}
          </p>
        </div>
        <p className="text-xs text-[#74726b]">{data.description}</p>
      </div>
    </div>
  );
};
