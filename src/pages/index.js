import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PostCollection from "../components/postCollection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostCollection />
  </Layout>
)

export default IndexPage
