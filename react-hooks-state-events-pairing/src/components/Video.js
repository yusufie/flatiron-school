import React from 'react'
import VideoDetails from './VideoDetails'


const Video = ({video}) => {


  return (
    <div className='video-container'>
      <iframe
        width="800"
        height="400"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails video={video}/>
    </div>
  )
}

export default Video