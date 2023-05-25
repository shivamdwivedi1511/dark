import React from 'react'
import WeatherWidget from '../WeatherComponent/WeatherWidget'
import { NewsCard } from './NewsCard'
import { useSelector } from 'react-redux'

const NewsContainer = () => {
    const news = useSelector(store=>store.topNews.news);

    const newsHandler =()=>{
        return news.map(item=><NewsCard data={item}/>)
    }
  return (
    <div className='flex'>
        <div>
           {newsHandler()}
        </div>
        <WeatherWidget />
    </div>
  )
}

export default NewsContainer