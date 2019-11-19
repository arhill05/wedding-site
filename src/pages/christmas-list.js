import React, { Component } from 'react'
import { graphql } from 'gatsby'
import './christmas-list.css'
const ChristmasList = props => {
  const christmasImageSrc = props.data.christmasImage.publicURL
  const items = props.data.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter
  )
  const juliesItems = items.filter(x => x.person.toLowerCase() === 'julie')
  const drewsItems = items.filter(x => x.person.toLowerCase() === 'drew')

  const priceSorter = (a, b) => b.price - a.price
  const juliesListHtml = juliesItems.sort(priceSorter).map((item, index) => (
    <div className="list-item" key={`julie-${index}`}>
      <div className="list-item__title">
        <a href="{item.link}">{item.name}</a> - ${item.price}
      </div>
    </div>
  ))

  const drewsListHtml = drewsItems.sort(priceSorter).map((item, index) => (
    <div className="list-item" key={`drew-${index}`}>
      <div className="list-item__title">
        <a href="{item.link}">{item.name}</a> - ${item.price}
      </div>
    </div>
  ))
  return (
    <div className="christmas-list-page">
      <img className="christmas-list-image" src={christmasImageSrc} />
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
