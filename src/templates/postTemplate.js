import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
    query ($slug: String!) {
        postsJson(slug: {eq: $slug}) {
            slug
            id
            title
            date
            content
            images
    }
  }
`;

// images {
//     childImageSharp{
//         fluid {
//             ...GatsbyImageSharpFluid
//         }
//     }
// }


const Post = ({ data }) => {
    const post = data.postsJson
    return (
        <Layout>
            <div className="font-bold">{post.title}</div>
            <div className="text-sm">{post.date}</div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {/* <Image
                fluid={post.images.childImageSharp.fluid}
                alt={post.id}
                className="w-1/4"
            /> */}
        </Layout>
    )
}

export default Post