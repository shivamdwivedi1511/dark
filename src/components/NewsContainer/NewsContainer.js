import React from "react";
import WeatherWidget from "../WeatherComponent/WeatherWidget";
import { NewsCard } from "./NewsCard";

const NewsContainer = ({ news }) => {
  const newsHandler = () => {
    return news.map((item, index) => <NewsCard key={index} data={item} />);
  };
  return (
    <div className="flex">
      <div>{newsHandler()}</div>
      {/* <WeatherWidget /> */}
    </div>
  );
};

export default NewsContainer;
