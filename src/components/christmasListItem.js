import React, { Component } from 'react'

class ChristmasListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.item,
      listItemClass: 'list-item',
      keyString: `${props.item.person}-${props.item.name.split(' ').join('')}`,
      isNew: false,
    }
  }

  componentDidMount() {
    const item = this.state.item
    const localStorageItem = localStorage.getItem(this.state.keyString)
    const isNew = !localStorageItem && JSON.parse(localStorageItem) !== item
    const listItemClass = isNew ? 'list-item list-item--new' : 'list-item'

    if (isNew) {
      localStorage.setItem(this.state.keyString, JSON.stringify(item))
      this.setState({ listItemClass, isNew })
    }
  }

  render() {
    const formattedPrice = Number(this.state.item.price).toFixed(2)
    return (
      <div className={this.state.listItemClass} id={this.state.keyString}>
        <div className="list-item__title">
          {this.state.item.link ? (
            <>
              <a href={this.state.item.link}>{this.state.item.name}</a> - $
              {formattedPrice}
            </>
          ) : (
            <>
              {this.state.item.name} - ${formattedPrice}
            </>
          )}
        </div>
        {this.state.isNew ? (
          <div className="list-item__is-new">
            <em>
              <strong>New since your last visit</strong>
            </em>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default ChristmasListItem
