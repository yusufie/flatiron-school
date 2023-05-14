import React from "react";

function BlogContent(props) {
  if (!props.isPublished) return null;

  return (
    <div>
      <h1>{props.articleText}</h1>
      <p>{props.minutesToRead} minutes to read</p>
    </div>
  );
}

export default BlogContent;
