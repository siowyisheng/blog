import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import g from 'glamorous'
import { css } from 'glamor'
import Link from 'gatsby-link'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <h2 style={{ display: `inline` }}>
          <Link to="/life/" style={{ color: `#ff2268` }}>Life,</Link>
          <Link to="/design/" style={{ color: `#e86013` }}>Design,</Link>
          <Link to="/games/" style={{ color: `#8213e8` }}>Games,</Link>
          <Link to="/code/" style={{ color: `#2269ff` }}>Code</Link>
        </h2>
      </header>
    </div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
