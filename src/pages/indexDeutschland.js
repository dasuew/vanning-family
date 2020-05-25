import React from "react"

import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-wrap lg:w-1/3 xl:w-1/3 md:w-1/3 sm:w-full mx-auto">
        {data.allMarkdownRemark.edges
          .map((data, index) =>
            (
              <Link className="flex w-full mt-10" to={`/${data.node.frontmatter.slug}`} key={index}>
                <div>
                  <div className="font-bold text-yellow-500 text-xl">{data.node.frontmatter.title}</div>
                  <div className="text-sm text-purple-100">{new Date(data.node.frontmatter.date).toLocaleDateString("de-DE", dateOptions).toString()} - {data.node.frontmatter.location}</div>
                </div>
              </Link>
            )
          )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexDeutschlandQuery {
    allMarkdownRemark (
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {location: { in: ["Deutschland"] }, published: {eq: true}}}
      ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
            published
            location            
          }
        }
      }
    }
  }
`

export default IndexPage
