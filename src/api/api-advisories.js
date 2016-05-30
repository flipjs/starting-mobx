import httpClient from './htttp-client'

const ADVISORIES = 'advisories'

/**
 * Add advisory to database.
 *
 * @param {Object} advisory - advisory object
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiAddAdvisory (advisory) {
  return httpClient().post(ADVISORIES, advisory)
}

/**
 * Fetch advisory from database.
 *
 * @param {String} id - advisory id
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiGetAdvisory (advisoryId) {
  return httpClient().get(`${ADVISORIES}/${advisoryId}`)
}

/**
 * Fetch all advisories from database.
 *
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiGetAllAdvisories () {
  return httpClient().get(ADVISORIES)
}

/**
 * Update advisory from database.
 *
 * @param {Object} advisory - advisory object
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiUpdateAdvisory (advisory) {
  return httpClient().put(`${ADVISORIES}/${advisory.id}`, advisory)
}

/**
 * Delete a advisory from database.
 *
 * @param {String} id - advisory id
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiDeleteAdvisory (advisoryId) {
  return httpClient().delete(`${ADVISORIES}/${advisoryId}`)
}

