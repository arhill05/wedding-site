import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Countdown from '../components/countdown'
import './index.css'

const primaryColor = '#600093'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <section className="hero">
      <div className="hero__gradient-container">
        <div className="hero__content-container">
          <h1>Julie and Drew</h1>
          <p className="hero__subtext--gray">are getting married in</p>
          <Countdown />
          <p className="hero__date">Saturday, June 30th, 2019</p>
          <div className="hero__links">
            <Link to="/">Our Story</Link>
            <Link to="/wedding-party">The Wedding Party</Link>
            <a>Photos</a>
            <a>Registry</a>
            <a>RSVP</a>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
