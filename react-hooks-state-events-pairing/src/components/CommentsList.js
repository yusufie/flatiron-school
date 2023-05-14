import React from 'react'
import Comment from './Comment'

const Comments = ({comments,hideComment}) => {
  return (
    <div className={hideComment? 'comment-list--invisible':'comment-list'} >
      <h1>{comments.length} Comments</h1>
      {comments.map(({id, user, comment})=>(
        <Comment  key={id} user={user} comment={comment} />
      ))}
    </div>
  )
}

export default Comments