import React from 'react'
import { graphql } from 'gatsby'
import './christmas-list.css'
import ChristmasListItem from '../components/christmasListItem'

const ChristmasList = props => {
  const christmasImageSrc = props.data.christmasImage.publicURL
  const items = props.data.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter
  )
  const juliesItems = items.filter(x => x.person.toLowerCase() === 'julie')
  const drewsItems = items.filter(x => x.person.toLowerCase() === 'drew')
  const priceSorter = (a, b) => {
    const priceA = Number(a.price);
    const priceB = Number(b.price);
    if (priceB > priceA) {
      return 1
    } else if (priceB < priceA) {
      return -1
    } else {
      return 0
    }
  }
  const juliesListHtml = juliesItems
    .sort(priceSorter)
    .map((item, index) => (
      <ChristmasListItem
        key={`${item.person}-${item.name.split(' ').join('')}`}
        item={item}
      />
    ))

  const drewsListHtml = drewsItems
    .sort(priceSorter)
    .map((item, index) => (
      <ChristmasListItem
        key={`${item.person}-${item.name.split(' ').join('')}`}
        item={item}
      />
    ))
  return (
    <div className="christmas-list-page">
      <img className="christmas-list-image" alt="" src={christmasImageSrc} />
      <div className="christmas-lists">
        <h1>Christmas List</h1>
        <div className="lists-container">
          <div className="list">
            <h2>Julie's List</h2>
            {juliesListHtml}
          </div>
          <div className="list">
            <h2>Drew's List</h2>
            {drewsListHtml}
          </div>
        </div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query ChristmasList {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            name
            price
            link
            person
          }
        }
      }
    }
    christmasImage: file(relativePath: { eq: "gift.svg" }) {
      absolutePath
      publicURL
    }
  }
`

export default ChristmasList
