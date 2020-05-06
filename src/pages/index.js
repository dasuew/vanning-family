import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import JSONbuildtime  from "../pages/json-at-buildtime"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-yellow-600">Deploy success</h1>    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <JSONbuildtime />
  </Layout>
)

export default IndexPage
