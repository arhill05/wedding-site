import React from 'react'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Countdown from '../components/countdown'
import '../css/global.css'
import './index.css'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <section className="hero">
        <div className="hero__gradient-container">
          <div className="hero__content-container">
            <h1>Julie and Drew</h1>
            <p className="hero__subtext--gray">have been married for</p>
            <Countdown />
            <div className="hero__links">
              <Link to="/our-story">Our Story</Link>
              {/* <Link to="/wedding-party">The Wedding Party</Link> */}
              <Link to="/photos">Photos</Link>
              <Link to="/christmas-list">Christmas List</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage
