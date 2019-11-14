import React, { Component } from 'react'
import { graphql } from 'gatsby'
const ChristmasList = props => {
  console.log(props)
  // const { markdownRemark } = data;
  // const { frontmatter } = markdownRemark;
  const items = props.data.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter
  )
  const juliesItems = items.filter(x => x.person.toLowerCase() === 'julie')
  const drewsItems = items.filter(x => x.person.toLowerCase() === 'drew')

  const juliesListHtml = juliesItems.map((item, index) => (
    <div key={`julie-${index}`}>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.link}</p>
    </div>
  ))

  const drewsListHtml = drewsItems.map((item, index) => (
    <div key={`drew-${index}`}>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.link}</p>
    </div>
  ))
  return (
    <div className="christmas-list">
      <h2>Julie's List</h2>
      {juliesListHtml}
      <h2>Drew's List</h2>
      {drewsListHtml}
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
  }
`

export default ChristmasList
