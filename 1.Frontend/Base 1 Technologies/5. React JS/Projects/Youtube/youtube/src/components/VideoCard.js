import React from 'react'

const VideoCard = ({info}) => {
    // Extracting Data -> info = ek video ka data hai
    const {snippet , statistics} = info;
    const {channelTitle , title , thumbnails} = snippet;
    const {url} = thumbnails.medium;
    const {viewCount} = statistics;
    
  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img className="rounded-lg" alt="thumbnail" src={url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li className="font-medium">{viewCount} views</li>
      </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
  return(
    <div className="border rounded-lg border-red-900 flex flex-col items-center cursor-pointer">
      <VideoCard info={info}/>
      <p className="p-2 font-bold">Youtube AD</p>
    </div>
  )
}

export default VideoCard