import React, { useEffect } from 'react'
import { API_URL, NEWS_API_KEY } from '../constants';
import { useDispatch } from 'react-redux';
import { addTopNews } from '../store/reducers/topNewsSlice';
import NewsContainer from './NewsContainer/NewsContainer';

const MainContainer = () => {
    const dispatch=useDispatch();

    const fetchNews=async()=>{
        const res =await fetch(API_URL+'/top-headlines?country=us&apiKey=' +NEWS_API_KEY);
        const json = await res.json();
        console.log('ssss',json)
        dispatch(addTopNews(json));

    }

    useEffect(() => {
        fetchNews();
    }, [])
    
  return (
    <div className='m-auto w-[90%]'>
        MainContainer
        <NewsContainer />
    </div>
  )
}

export default MainContainer