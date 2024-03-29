import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import './photos.css'

class PhotosPage extends Component {
  constructor(props) {
    super(props)

    const imageFixeds = props.data.allFile.edges.map(x => {
      return {
        fluid: x.node.childImageSharp.fluid,
      }
    })

    const imgTags = imageFixeds.map((x, index) => {
      return (
        <div
          key={index}
          className="photos__image-wrapper"
          // style={{
          //   minHeight: '300px',
          //   width: 'auto',
          //   flexBasis: '32%',
          //   cursor: 'pointer'
          // }}
          onClick={() => this.onImageClick(x.fluid.srcSet)}
        >
          <Img fluid={x.fluid} />
        </div>
      )
    })

    this.state = {
      imgTags,
      showOverlay: false,
      overlayImageSrc: '',
    }
  }

  onImageClick = imageSrc => {
    this.setState({ showOverlay: true, overlayImageSrc: imageSrc })
  }

  onOverlayClick = e => {
    this.setState({ showOverlay: false })
  }

  render() {
    return (
      <>
        {this.state.showOverlay ? (
          <div className="overlay" onClick={this.onOverlayClick}>
            <img
              alt="enlarged"
              className="overlay__image"
              srcSet={this.state.overlayImageSrc}
            />
          </div>
        ) : null}
        <Layout>
          <div className="photos__images-container">{this.state.imgTags}</div>
        </Layout>
      </>
    )
  }
}

export default PhotosPage

export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        relativePath: { glob: "!*svg" }
        sourceInstanceName: { eq: "photos" }
      }
    ) {
      edges {
        node {
          absolutePath
          childImageSharp {
            fluid(maxHeight: 500) {
              src
            }
          }
        }
      }
    }
  }
`
