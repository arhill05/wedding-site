import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

class PhotosPage extends Component {
  constructor(props) {
    super(props)

    const imageFixeds = props.data.allFile.edges.map(x => {
      return {
        fluid: x.node.childImageSharp.fluid,
        original: x.node.childImageSharp.original,
      }
    })

    const imgTags = imageFixeds.map((x, index) => {
      return (
        <div
          key={index}
          style={{
            minHeight: '300px',
            width: 'auto',
            flexBasis: '32%',
            cursor: 'pointer'
          }}
          onClick={() => this.onImageClick(x.original.src)}
        >
          <Img fluid={x.fluid} />
        </div>
      )
    })

    this.state = {
      imgTags,
      showOverlay: false,
      overlayImageSrc: ''
    }
  }

  onImageClick = (imageSrc) => {
    this.setState({ showOverlay: true, overlayImageSrc: imageSrc });
  }

  onOverlayClick = (e) => {
    this.setState({ showOverlay: false })
  }

  render() {
    return (
      <>
        {
          this.state.showOverlay
            ?
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(178, 178, 178, 0.8', zIndex: '1000' }} onClick={this.onOverlayClick}>
              <img alt="enlarged" style={{ maxWidth: '80%', maxHeight: '80%', boxShadow: '0 2px 30px 12px rgba(0,0,0,0.4)' }} src={this.state.overlayImageSrc}></img>
            </div>
            : null
        }
        <Layout>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            {this.state.imgTags}
          </div>
        </Layout></>
    )
  }
}

export default PhotosPage

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 550, maxHeight: 550) {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
      }
    }
  }
`
