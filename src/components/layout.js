import g from 'glamorous'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import glamorous from 'glamorous'
import { StaticQuery, graphql } from 'gatsby'
import logo from './logo.png'

const RH2 = glamorous.h2({
  '@media(max-width: 400px)': {
    fontSize: `1.2rem`,
  },
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        logoImage: imageSharp(id: { regex: "/logo/" }) {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="one guy's thoughts" />
          <meta name="keywords" content="Life,Design,Games,Code,Board games" />
          <meta name="author" content="Siow Yi Sheng" />
          <meta property="og:title" content="Life,Design,Games,Code" />
          <meta
            property="og:url"
            content="https://foreverfighter.github.io/blog/"
          />
          <meta property="og:description" content="one guy's thoughts" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <header>
            <Link to="/">
              <img
                style={{ margin: `0 10px 0 0`, verticalAlign: `-40%` }}
                width={40}
                src={logo}
                alt="Logo"
              />
            </Link>
            <RH2 style={{ display: `inline` }}>
              <Link
                to="/life/"
                style={{ color: `#ff2268` }}
                activeStyle={{ textDecoration: `underline overline` }}
              >
                Life,
              </Link>
              <Link
                to="/design/"
                style={{ color: `#e86013` }}
                activeStyle={{ textDecoration: `underline overline` }}
              >
                Design,
              </Link>
              <Link
                to="/games/"
                style={{ color: `#8213e8` }}
                activeStyle={{ textDecoration: `underline overline` }}
              >
                Games,
              </Link>
              <Link
                to="/code/"
                style={{ color: `#2269ff` }}
                activeStyle={{ textDecoration: `underline overline` }}
              >
                Code
              </Link>
            </RH2>
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
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
