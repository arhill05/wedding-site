import React from 'react'
import Layout from '../components/layout'
import './success.css';

const SuccessPage = () => (
  <Layout>
    <section className="success">
      <h1>Success!</h1>
      <p>Thanks for submitting your RSVP.</p>
      <p>
        We look forward to sharing our special day with you on{' '}
        <strong>June 30th, 2019</strong> at <strong>2pm EST</strong> at the{' '}
        <strong>Olmsted in Louisville</strong>.
      </p>
    </section>
  </Layout>
)

export default SuccessPage
