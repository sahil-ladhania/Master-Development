import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
  // disptach and selector
  const dispatch = useDispatch();

  // useSearchParams
  const [searchParams] = useSearchParams();

  // useEffect
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-4">
      <iframe 
        className='rounded-lg'
        width="1000" 
        height="600" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchPage