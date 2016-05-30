import React, { Component } from 'react'
import { observer } from 'mobx-react'

export function CampaignsTable ({campaigns}) {
  if (campaigns.isFetching) return <div>Loading...</div>
  const campaignList = renderCampaignList(campaigns.records)
  return (
    <div className='campaigns-table'>
      <h3>Campaigns</h3>
      <ul>
        {campaignList}
      </ul>
    </div>
  )
}

function renderCampaignList (campaigns) {
  return campaigns.map((campaign) => renderCampaign(campaign))
}

function renderCampaign (campaign) {
  return (
    <li key={campaign.id}>{campaign.id} - {campaign.name}</li>
  )
}

export default observer(CampaignsTable)

