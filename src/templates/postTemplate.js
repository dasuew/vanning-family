import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const postQuery = graphql`
    query BlogPostBySlug($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug} }) {
            html
            id
            frontmatter {
                title
                slug
                date               
                location
                lowlight
                highlight
                advice
                tfi                
                images {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
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
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <Layout>
            <div className="mt-20 pb-20 flex w-1/3 mx-auto flex-col text-purple-100">
                <div className="font-bold text-yellow-500 text-xl">{post.frontmatter.title}</div>
                <div className="text-sm text-yellow-500 mb-5">{new Date(post.frontmatter.date).toLocaleDateString("de-DE", dateOptions).toString()} - {post.frontmatter.location}</div>
                <div className="text-purple-100 mb-5 text-justify" dangerouslySetInnerHTML={{ __html: post.html }} />
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
                <div className="flex flex-wrap">
                    {post.frontmatter.images !== null ?
                        post.frontmatter.images.map((data, index) =>
                            (
                                <Image
                                    key={index}
                                    fluid={data.childImageSharp.fluid}
                                    className="w-full mt-5 shadow border-4 border-yellow-500 rounded"
                                />
                            )) 
                        : ' '
                    }

                </div>
            </div>
        </Layout>
    )
}

export default Template