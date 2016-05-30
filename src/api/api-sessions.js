import httpClient from './htttp-client'

const SESSIONS = 'sessions'

/**
 * Create a session.
 *
 * @param {Object} credentials - users credentials
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiCreateSession (credentials) {
  return httpClient().post(SESSIONS, credentials)
}

/**
 * Delete a session.
 *
 * @param {String} token - session token
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiDeleteSession (token) {
  return httpClient().delete(`${SESSIONS}/${token}`)
}

/**
 * Get session info.
 *
 * @param {String} token - session token
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiGetSession (token) {
  return httpClient().get(`${SESSIONS}/${token}`)
}

/**
 * Fetch all active sessions.
 *
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiGetAllSessions () {
  return httpClient().get(SESSIONS)
}

