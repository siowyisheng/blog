import React from 'react'
import g from 'glamorous'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <g.H3>{node.frontmatter.title}</g.H3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query DesignQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { regex: "/.*design.*/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
