import React from "react"
import Layout from "../components/layout"
import JSONData from "../../content/complete_posts.json"
import { Link } from "gatsby"

const Post = ({ location }) => {
  const post = JSONData.content.filter(post => post.id === location.state.id)

  return (
    <Layout>
      <Link to="/"className="mb-10">zurück zum Blog</Link>
      <div className="font-bold">{post[0].title}</div>
      <div dangerouslySetInnerHTML={{ __html: post[0].content }} />
      {/* <div>Post Page for {location.state.id}</div> */}
    </Layout>)
}

export default Post