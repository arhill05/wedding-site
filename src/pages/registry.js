import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import './registry.css'

class RegistryPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fluid: props.data.fileName.childImageSharp.fluid,
    }
  }
  render() {
    return (
      <Layout>
        <main className="registry">
          <div className="registry__poem">
            <p>Most things we need, we've already got.</p>
            <p>Our house is so tiny, we can't fit a lot.</p>
            <p>A donation to our honeymoon would be great!</p>
            <p>But only if you wish to participate.</p>
          </div>
          <div className="registry__honeyfund-link-container">
            <a
              className="registry__honeyfund-link"
              href="https://www.honeyfund.com/wedding/JulieandDrewSayIDo#registry"
            >
              Visit our HoneyFund
            </a>
          </div>
          <div className="registry__description">
            <p>
              We have put together a registry using a service called Honeyfund.
              It allows generous guests to fund experiences for our honeymoon
              instead of purchasing traditional wedding gifts! We both love to
              travel and are big foodies, so our dream honeymoon destination is
              Italy. Thank you for helping us take advantage of the opportunity
              of a lifetime!
            </p>
            <p className="registry__other-registries">
              If you would prefer a more traditional registry, we are also
              registered at the following locations:
              <div className="registry__other-registries__links">
                <a href="#">Best Buy</a>
                <a href="#">Amazon</a>
                <a href="#">Target</a>
              </div>
            </p>
          </div>
          <Img fluid={this.state.fluid} className="registry__image" />
        </main>
      </Layout>
    )
  }
}

export default RegistryPage

export const pageQuery = graphql`
  query {
    fileName: file(relativePath: { eq: "italy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
