import React from 'react'

const Comment = ({ user, comment}) => {
  return (
    <div className='comment' >
      <h2>{user}</h2>
      <h3>{comment}</h3>
    </div>
  )
}

export default Comment