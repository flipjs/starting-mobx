import campaigns from 'stores/campaigns'
import ui from 'stores/ui'
import { apiGetAllCampaigns } from 'api/api-campaigns'

export function getAllCampaigns () {
  campaigns.isFetching = true
  ui.fetchCount++
  console.log('fetch in progress: ', ui.fetchCount)
  apiGetAllCampaigns()
    .then(response => {
      setTimeout(() => {
        campaigns.records = response.data.records
        campaigns.isFetching = false
        ui.fetchCount--
        console.log('after successful fetch: ', ui.fetchCount)
      }, 2000)
    })
    .catch(response => {
      campaigns.error = response.statusText
      campaigns.isFetching = false
      ui.fetchCount--
      console.log('after failed fetch: ', ui.fetchCount)
    })
}

