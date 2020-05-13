import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <div>
      <div className="flex flex-wrap">      
        {data.allMarkdownRemark.edges.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        }).map((data, index) =>
          (
            <Link className="flex-none w-1/2 p-6" to={`/${data.node.frontmatter.slug}`} key={index}>
              <div>
                <div className="font-bold text-yellow-500 text-xl">{data.node.frontmatter.title}</div>
                <div className="text-sm text-purple-100">{data.node.frontmatter.date}</div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`

export default IndexPage
