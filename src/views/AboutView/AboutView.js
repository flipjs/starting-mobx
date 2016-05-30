import React from 'react'
import { Link } from 'react-router'
import Counter from 'components/Counter'
import CampaignsTable from 'components/campaigns/CampaignsTable'
import campaigns from 'stores/campaigns'

export class AboutView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>About Page</h1>
        <Link to="/">Home Page</Link>
        <Counter />
        <CampaignsTable campaigns={campaigns} />
      </div>
    )
  }
}

export default AboutView

