import React from "react"
import { Link } from "gatsby"

import JSONData from "../../data/posts.json"

const PostCollection = () => (
  <div>
    <div className="flex flex-wrap">
      {JSONData.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }).map((data, index) => {
        return (
          <Link to={`/posts/${data.slug}`} key={index}>
            <div className="flex-auto w-64 shadow-lg p-6 m-4" key={`content_title_${index}`}>
              <div className="text-sm">{data.date}</div>
              <div className="font-bold">{data.title}</div>
              <div>{data.categories}</div>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
)
export default PostCollection