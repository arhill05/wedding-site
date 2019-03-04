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
                <a href="https://www.bestbuy.com/profile/list/viewlist?listId=r0hJEDXrhf8m56NRe53%252BhinanL6XZQ5y5SWGIFQmFaB1Z0XX2l%252FuQmGtvlm0GsFtpSewMDWJgqJJeIvj%252FFNJONFUaGfQZ2CiIXWdw1a3RGUtPoKafXi%252BOPLp2mIdMjiUBM8GlfgbmMw0PIfvufRSlYqnj3vZ1GKT%252FlD6Vsg95nRPxDpJ0qwjqVI2yMcm0UfBQAyr3adVnd1j91%252FTzfsE%252FVVx%252BMRxRmJhRHzBYJbApoysuSwLmX%252Ff8AJWg0cIXP2cQCoTJ8HcFoW2gS3%252FBGrgbCFdW6ex4%252F8L2J0HQGU98xLxo%252BWAsihfo4dg%252F0lhuWBz9JuQfkuz7whJm9dWupinbfCrsVDDAZN3UEszoNOdC4s%253D">Best Buy</a>
                <a href="https://www.amazon.com/wedding/share/JulieAndDrew">Amazon</a>
                <a href="http://tgt.gifts/JulieAndDrewSayIDo">Target</a>
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
