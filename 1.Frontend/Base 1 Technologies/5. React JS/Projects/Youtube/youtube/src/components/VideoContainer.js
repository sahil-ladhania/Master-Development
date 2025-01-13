import React, { useState , useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  // useState
  const [videos , setVideos] = useState([]);

  // Get Data From API
  const getVideos = async() => {
    try{
        const response = await fetch(YOUTUBE_API);
        const data = await response.json();
        const items = data.items;
        setVideos(items);
    }
    catch(error){ 
      console.log(error);
    }
  }

  // useEffect
  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="flex flex-wrap"> 
      {
        videos[0] 
        &&
        <AdVideoCard info={videos[0]}/>
      }
      {
        videos.map((video , index) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video}/>
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer;
