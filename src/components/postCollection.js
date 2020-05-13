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
          <Link className="flex-none w-1/2 p-6" to={`/${data.slug}`} key={index}>
            <div key={`content_title_${index}`}>
              <div className="font-bold text-yellow-500 text-xl">{data.title}</div>
              <div className="text-sm text-purple-100">{data.date}</div>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
)
export default PostCollection