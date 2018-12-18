import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import Countdown from '../components/countdown'
import '../css/global.css'
import './index.css'

const primaryColor = '#600093'

const IndexPage = ({ data }) => (
  <StaticQuery
    query={query}
    render={data2 => {
      return (
        <>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <section className="hero">
            <div className="hero__gradient-container">
              <div className="hero__content-container">
                <h1>Julie and Drew</h1>
                <p className="hero__subtext--gray">are getting married in</p>
                <Img fixed={data.file.childImageSharp.fixed}/>
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
    }}
  />
)

export default IndexPage

// const imagesQuery = graphql`
//   query ImagesQuery {
//     allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
//       edges {
//         node {
//           extension
//           dir
//           modifiedTime
//         }
//       }
//     }
//   }
// `
export const query = graphql`
  query {
    file(relativePath: { eq: "images/IMG_1397.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
