import React from "react"
import JSONData from "../../content/vanning_family.json"
import Post from "./post";

const PostCollection = () => (
  <div>
    <div className="flex flex-wrap">
      {JSONData.content.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }).map((data, index) => {
        return <div className="flex-auto w-64 shadow-lg p-6 m-4" key={`content_title_${index}`}>
          <div className="text-sm">{data.date}</div>
          <div className="font-bold">{data.title}</div>
          <div dangerouslySetInnerHTML={{ __html: data.categories }} />
          <Post content={data.content}></Post>
        </div>
      })}
    </div>
  </div>
)
export default PostCollection