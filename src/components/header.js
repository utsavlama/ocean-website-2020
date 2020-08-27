import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (

  <header>
    <nav>
      <a href="index.html" className="ocean-logo"><img src="images/ocean-logo-2.png" alt="Ocean logo" /></a>
      <ul>
        <li><a href="asd">Home</a></li>
        <li><a href="asd">Pricing</a></li>
        <li><a href="asd">Services</a></li>
        <li><a href="asd">Contact Us</a></li>
        <li><a href="asd" className="ocean-button-inverted">Sign in</a></li>
        <li><a href="asd" className="ocean-button">Sign up</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
