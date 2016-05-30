import httpClient from './htttp-client'

const CAMPAIGNS = 'campaigns'

/**
 * Add campaign to database.
 *
 * @param {Object} campaign - campaign object
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiAddCampaign (campaign) {
  return httpClient().post(CAMPAIGNS, campaign)
}

/**
 * Fetch campaign from database.
 *
 * @param {String} id - campaign id
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiGetCampaign (campaignId) {
  return httpClient().get(`${CAMPAIGNS}/${campaignId}`)
}

/**
 * Fetch all campaigns from database.
 *
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiGetAllCampaigns () {
  return httpClient().get(CAMPAIGNS)
}

/**
 * Update campaign from database.
 *
 * @param {Object} campaign - campaign object
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiUpdateCampaign (campaign) {
  return httpClient().put(`${CAMPAIGNS}/${campaign.id}`, campaign)
}

/**
 * Delete a campaign from database.
 *
 * @param {String} id - campaign id
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiDeleteCampaign (campaignId) {
  return httpClient().delete(`${CAMPAIGNS}/${campaignId}`)
}

