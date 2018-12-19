import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const handleClick = e => {
  console.log(e)
  console.log(e.target.attributes['src'].nodeValue)
  console.log('hi')
}

const WeddingPartyPage = ({ data }) => {
  const imageFixeds = data.allFile.edges.map(x => {
    return {
      sizes: x.node.childImageSharp.sizes,
      original: x.node.childImageSharp.original,
    }
  })
  console.log(data)
  const ImgTags = imageFixeds.map((x, index) => {
    return (
      <div
        key={index}
        style={{
          minHeight: '300px',
          width: 'auto',
          flexBasis: '32%',
        }}
        onClick={handleClick}
      >
        <a href={x.original.src}>
          <Img sizes={x.sizes} />
        </a>
      </div>
    )
  })
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {ImgTags}
      </div>
    </Layout>
  )
}

export default WeddingPartyPage

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 550, maxHeight: 550) {
              ...GatsbyImageSharpSizes
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
