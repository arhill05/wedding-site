import React, { Component } from 'react'
import Layout from '../components/layout'

import './rsvp.css'

class RsvpPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <section className="rsvp">
          <form
            name="rsvp"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            method="post"
            action="/success"
          >
            <h2>RSVP</h2>
            <h3 className="rsvp-by-date">by June 7th</h3>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="rsvp" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="is-coming">Are you attending?</label>
              <p>
                <input type="radio" name="is-coming" required value="yes" />
                Wouldn't miss it!
              </p>
              <p>
                <input type="radio" name="is-coming" required value="no" />
                We'll be celebrating from afar.
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="guest-count">
                How many will be attending (including yourself)?
              </label>
              <input
                type="number"
                min="0"
                max="10"
                name="guest-count"
                required
                id="guest-count"
              />
            </div>
            <div className="form-group hotel-info">
              <em>
                If you would like to stay overnight, we have reserved a block at
                a hotel nearby. Please{' '}
                <a class="inline-link" href="http://hiltongardeninn.hilton.com/en/gi/groups/personalized/S/SDFSMGI-RHW-20190629/index.jhtml">
                  click here
                </a>{' '}
                to make a reservation and get some perks -- including a discount
                and free breakfast!
              </em>
            </div>
            <div className="form-actions">
              <button type="submit">Submit</button>
              <button type="reset">Clear</button>
            </div>
          </form>
        </section>
      </Layout>
    )
  }
}

export default RsvpPage
