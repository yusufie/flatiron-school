import React, {useState} from 'react'
import Button from './Button'
import Comments from './CommentsList'

const VideoDetails = ({video}) => {

  const [hideComment, setHideComment] = useState(false);
  const [buttonText, setButtonText] = useState('Hide Comment')



  function handleHideComment(){
    setHideComment(!hideComment)
    hideComment ? setButtonText('Hide Comment'):setButtonText('Show Comment')
  }


  return (
      <div className='video-details-container'>
          <h1>{video.title}</h1>
          <div className='video-details-container__view'>
            <h3> {video.views} Views </h3>
            <p>|</p>
            <h3> Uploaded {video.createdAt} </h3>
          </div>
          <Button buttonText={buttonText} handleHideComment={handleHideComment} upVotes={video.upvotes} downVotes={video.downvotes} />
          <Comments hideComment={hideComment} comments={video.comments}/>
      </div>
 
  )
}

export default VideoDetails