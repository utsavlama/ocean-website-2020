/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css";
import Main from "./layout.module.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div className="row">
          <article>
            <h1>Quick links</h1>
            <ul>
              <li><a href="asd">Home</a></li>
              <li><a href="asd">Services</a></li>
              <li><a href="asd">Pricing</a></li>
              <li><a href="asd">Contact</a></li>
            </ul>
          </article>
          <article>
            <h1>contact</h1>
            <ul>
              <li>aasd</li>
              <li>+61 469 696 969</li>
              <li>asd</li>
              <li>+61 469 696 969</li>
            </ul>
          </article>

          <article>
            <h1>Drop off points</h1>
            <ul>
              <li>aasd</li>
              <li>aasd</li>
              <li>aasd</li>
              <li>aasd</li>
            </ul>
          </article>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
