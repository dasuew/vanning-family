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
      <div className="flex flex-wrap lg:w-1/3 xl:w-1/3 md:w-1/3 sm:w-full sm:pl-4 sm:pr-4 mx-auto">
      <div class="font-bold text-yellow-500 text-xl uppercase">Deutschland</div>
        {data.allMarkdownRemark.edges
          .map((data, index) =>
            (
              <Link className="flex w-full mb-4" to={`/${data.node.frontmatter.slug}`} key={index}>
                <div>
                  <div className="font-bold text-yellow-500 text-xl">{data.node.frontmatter.title}</div>

                  <div className="flex flex-col text-sm text-purple-100 mb-5 font-normal">
                    <div className="flex items-center">
                      <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" /></svg>
                      <span className="ml-2">{new Date(data.node.frontmatter.date).toLocaleDateString("de-DE", dateOptions).toString()}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-2.25a8 8 0 0 0 4-2.46V9a2 2 0 0 1-2-2V3.07a7.95 7.95 0 0 0-3-1V3a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2v2h3a2 2 0 0 1 2 2v5.75zm-4 0V15a2 2 0 0 1-2-2v-1h-.5A1.5 1.5 0 0 1 4 10.5V8H2.25A8.01 8.01 0 0 0 8 17.75z" /></svg>
                      <span className="ml-2">{data.node.frontmatter.location}</span>
                    </div>
                  </div>
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
