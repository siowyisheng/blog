import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"

import { graphql } from "gatsby"

const Games = ({ data }) => {
  return (
    <Layout>
      <ol style={{ listStyle: `none` }}>
        {data.allMarkdownRemark.nodes.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h6 style={{ marginBottom: 0, color: "#999" }}>
                    {post.frontmatter.date}
                  </h6>
                  <h3 style={{ marginTop: 0 }}>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default Games

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "games" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
