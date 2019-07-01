import React, { Component } from 'react'

const weddingDate = new Date('2019-06-30T15:30:00-04:00').getTime()

class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }
  calcTime = () => {
    const now = new Date().getTime()

    const distance = weddingDate - now
    const days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)))
    const hours = Math.abs(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    )
    const minutes = Math.abs(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    )
    const seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000))

    this.setState({ days, hours, minutes, seconds })
  }

  componentDidMount() {
    this.calcTime()
    this.interval = setInterval(this.calcTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  isPlural = number => {
    return number !== 1
  }

  render() {
    return (
      <p className="countdown">
        <span className="countdown__emphasis">{this.state.days}</span>
        <span className="countdown__normal">
          {' '}
          {`${this.isPlural(this.state.days) ? 'days' : 'day'}`},{' '}
        </span>
        <span className="countdown__emphasis">{this.state.hours}</span>
        <span className="countdown__normal">
          {' '}
          {`${this.isPlural(this.state.hours) ? 'hours' : 'hour'}`},{' '}
        </span>
        <span className="countdown__emphasis">{this.state.minutes}</span>
        <span className="countdown__normal">
          {' '}
          {`${this.isPlural(this.state.minutes) ? 'minutes' : 'minute'}`}, and{' '}
        </span>
        <span className="countdown__emphasis">{this.state.seconds}</span>
        <span className="countdown__normal">
          {' '}
          {`${this.isPlural(this.state.seconds) ? 'seconds' : 'second'}`}{' '}
        </span>
      </p>
    )
  }
}

export default Countdown
