import React from "react"

const Post = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.content }} />  
)
export default Post