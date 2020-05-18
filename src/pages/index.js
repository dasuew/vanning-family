import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-wrap w-1/3 mx-auto">
        {data.allMarkdownRemark.edges
          .map((data, index) =>
            (
              <Link className="flex w-full mt-10" to={`/${data.node.frontmatter.slug}`} key={index}>
                <div>
                  <div className="font-bold text-yellow-500 text-xl">{data.node.frontmatter.title}</div>
                  <div className="text-sm text-purple-100">{new Date(data.node.frontmatter.date).toLocaleDateString("de-DE", dateOptions).toString()}</div>
                </div>
              </Link>
            )
          )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark (
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
            published
          }
        }
      }
    }
  }
`

export default IndexPage
