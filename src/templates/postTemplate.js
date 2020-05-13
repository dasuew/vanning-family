import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const postQuery = graphql`
    query BlogPostBySlug($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug} }) {
            html
            frontmatter {
                title
                slug
                date
                lowlight
                highlight
                advice
                tfi
            }
        }    
    }`

// images {
//     childImageSharp{
//         fluid {
//             ...GatsbyImageSharpFluid
//         }
//     }
// }


const Template = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <div className="p-10 flex flex-col text-purple-100">
                <div className="font-bold text-yellow-500 text-xl">{post.frontmatter.title}</div>
                <div className="text-sm text-yellow-500 mb-5">{post.frontmatter.date}</div>
                <div className="text-purple-100 mb-5" dangerouslySetInnerHTML={{ __html: post.html }} />
                <div>
                    <span className="font-bold">Empfehlung: </span>{post.frontmatter.advice}
                </div>
                <div>
                    <span className="font-bold">Highlight: </span>{post.frontmatter.highlight}
                </div>
                <div>
                    <span className="font-bold">Lowlight: </span>{post.frontmatter.lowlight}
                </div>
                <div>
                    <span className="font-bold">TFI: </span>{(post.frontmatter.tfi !== undefined ? post.frontmatter.tfi : ' - ')}
                </div>
                {/* <Image
                fluid={post.images.childImageSharp.fluid}
                alt={post.id}
                className="w-1/4"
            /> */}
            </div>
        </Layout>
    )
}

export default Template