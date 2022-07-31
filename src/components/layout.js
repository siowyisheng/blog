import PropTypes from "prop-types"
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import logo from "./logo.png"

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
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "1.45rem 1.0875rem",
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
            <h2 style={{ display: `inline` }}>
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
            </h2>
          </header>
        </div>
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
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
