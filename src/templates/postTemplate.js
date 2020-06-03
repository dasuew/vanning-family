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
                          src
                          srcSet
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
            <div className="pb-20 flex lg:w-1/3 xl:w-1/3 md:w-1/3 sm:w-full mx-auto flex-col text-purple-100">
                <div className="font-bold text-yellow-500 text-lg">{post.frontmatter.title}</div>
                <div className="flex flex-col text-sm text-yellow-500 mb-5">
                    <div className="flex items-center text-purple-100">
                        <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" /></svg>
                        <span className="ml-2">{new Date(post.frontmatter.date).toLocaleDateString("de-DE", dateOptions).toString()}</span>
                    </div>
                    <div className="flex items-center text-purple-100">
                        <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-2.25a8 8 0 0 0 4-2.46V9a2 2 0 0 1-2-2V3.07a7.95 7.95 0 0 0-3-1V3a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2v2h3a2 2 0 0 1 2 2v5.75zm-4 0V15a2 2 0 0 1-2-2v-1h-.5A1.5 1.5 0 0 1 4 10.5V8H2.25A8.01 8.01 0 0 0 8 17.75z" /></svg>
                        <span className="ml-2">{post.frontmatter.location}</span>
                    </div>
                </div>
                <div className="text-purple-100 text-justify" dangerouslySetInnerHTML={{ __html: post.html }} />

                {post.frontmatter?.advice ?
                    <div className="mt-5">
                        <div className="font-bold text-yellow-500 ">Empfehlung</div>
                        <div>{post.frontmatter.advice}</div>
                    </div> :
                    ''
                }

                {post.frontmatter?.highlight ?
                    <div className="mt-5">
                        <div className="font-bold text-yellow-500 ">Highlight</div>
                        <div>{post.frontmatter.highlight}</div>
                    </div> :
                    ''
                }

                {post.frontmatter?.lowlight ?
                    <div className="mt-5">
                        <div className="font-bold text-yellow-500 ">Lowlight</div>
                        <div>{post.frontmatter.lowlight}</div>
                    </div> :
                    ''
                }

                {post.frontmatter?.tfi ?
                    <div className="mt-5">
                        <div className="font-bold text-yellow-500 ">TFI</div>
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