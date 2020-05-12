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
    const { postsJson: post } = data
    // const images = post.images.split("||")

    return (
        <Layout>
            <div className="p-10 flex flex-col">
                <div className="font-bold text-yellow-500 text-xl">{post.title}</div>
                <div className="text-sm text-yellow-500 mb-5">{post.date}</div>
                <div className="text-purple-100" dangerouslySetInnerHTML={{ __html: post.content }} />
                {/* <Image
                fluid={post.images.childImageSharp.fluid}
                alt={post.id}
                className="w-1/4"
            /> */}
            </div>
        </Layout>
    )
}

export default Post