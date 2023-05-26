import React, { useEffect } from "react";
import { API_URL, NEWS_API_KEY } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopNews } from "../store/reducers/topNewsSlice";
import NewsContainer from "./NewsContainer/NewsContainer";
import Banner from "./Banner";

const MainContainer = () => {
  const dispatch = useDispatch();
  const news = useSelector((store) => store.topNews.news);
  const fetchNews = async () => {
    const res = await fetch(
      API_URL +
        "/top-headlines?country=us&apiKey=" +
        NEWS_API_KEY
    );
    const json = await res.json();
    console.log("ssss", json);
    dispatch(addTopNews(json));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (!news.length) {
    return null;
  }
  return (
    <div className="m-auto w-[90%]">
      <Banner data={news[news.length-1]} />
      <NewsContainer news={news} />
    </div>
  );
};

export default MainContainer;
