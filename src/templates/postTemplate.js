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
                        fluid(maxWidth: 700) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }    
    }`

const Template = ({ data }) => {
    const { markdownRemark: post } = data
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <Layout>
            <div className="mt-20 pb-20 flex lg:w-1/3 xl:w-1/3 md:w-1/3 sm:w-full mx-auto flex-col text-purple-100">
                <div className="font-bold text-yellow-500 text-xl">{post.frontmatter.title}</div>
                <div className="text-sm text-yellow-500 mb-5">
                    {new Date(post.frontmatter.date).toLocaleDateString("de-DE", dateOptions).toString()} - {post.frontmatter.location}
                </div>
                <div className="text-purple-100 text-justify" dangerouslySetInnerHTML={{ __html: post.html }} />

                {post.frontmatter?.advice ?
                    <div className="mt-5">
                        <div className="font-bold">Empfehlung</div>
                        <div>{post.frontmatter.advice}</div>
                    </div> :
                    ''
                }

                {post.frontmatter?.highlight ?
                    <div className="mt-5">
                        <div className="font-bold">Highlight</div>
                        <div>{post.frontmatter.highlight}</div>
                    </div> :
                    ''
                }

                {post.frontmatter?.lowlight ?
                    <div className="mt-5">
                        <div className="font-bold">Lowlight</div>
                        <div>{post.frontmatter.lowlight}</div>
                    </div> :
                    ''
                }

                {post.frontmatter?.tfi ?
                    <div className="mt-5">
                        <div className="font-bold">TFI</div>
                        <div>{post.frontmatter.tfi}</div>
                    </div> :
                    ''
                }

                {post.frontmatter?.images ?
                    <div className="flex flex-wrap">
                        {post.frontmatter.images.map((data, index) =>
                            (
                                <Image
                                    key={index}
                                    fluid={data.childImageSharp.fluid}
                                    className="w-full mt-5 shadow border-4 border-yellow-500 rounded"
                                />
                            ))}
                    </div>
                    : ' '
                }

            </div>
        </Layout>
    )
}

export default Template