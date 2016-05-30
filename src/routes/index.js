import React from 'react'
import { Route, IndexRoute } from 'react-router'

import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import AboutView from 'views/AboutView/AboutView'
import { getAllCampaigns } from 'actions/campaigns-actions'
import campaigns from 'stores/campaigns'


function loadDataIfNeeded () {
  if (campaigns.records.length === 0) {
    getAllCampaigns()
  }
}

export default () => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='about' onEnter={loadDataIfNeeded} component={AboutView} />
  </Route>
)

