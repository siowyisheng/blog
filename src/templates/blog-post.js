import React from 'react'
import rehypeReact from 'rehype-react'
import Tooltip from '../components/tooltip.js'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { tooltip: Tooltip },
  }).Compiler

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div
        style={{
          maxWidth: 960,
        }}
      />
      {renderAst(post.htmlAst)}
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

// $(document).ready(function () {
//   $("body").tooltip({
//     selector: "[data-toggle='tooltip']",
//     container: "body"
//   })
// })
