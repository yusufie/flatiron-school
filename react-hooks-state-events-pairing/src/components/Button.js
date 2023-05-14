import React,{useState} from 'react'

const Button = ({buttonText,upVotes, downVotes, handleHideComment}) => {

  const [like, setLike] = useState(upVotes)
  const [dislike, setDislike] = useState(downVotes)
  


  
  
  const handleLikeButton = ()=>{
    setLike((like)=>like+1)
  }

  const handledisLikeButton = ()=>{
    setDislike((dislike)=>dislike+1)
  }

  return (
    <>
    <div className='buttons'>
      <button onClick={handleLikeButton} >{like} 👍</button>
      <button onClick={handledisLikeButton} >{dislike} 👎</button>
    </div>
    <button onClick={handleHideComment}>
      {buttonText}
    </button>
    </>
  )
}

export default Button