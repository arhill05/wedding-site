import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: '1.45rem',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
      margin: '0 auto',
    }}
  >
    <Link activeClassName="link--active" to="/">
      Home
    </Link>
    <Link activeClassName="link--active" to="/our-story">
      Our Story
    </Link>
    <Link activeClassName="link--active" to="/photos">
      Photos
    </Link>
    <Link activeClassName="link--active" to="/registry">
      Registry
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
