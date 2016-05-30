import httpClient from './htttp-client'

const USERS = 'users'

/**
 * Add a user to database.
 *
 * @param {Object} user - user object
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiAddUser (user) {
  return httpClient().post(USERS, user)
}

/**
 * Fetch a user from database.
 *
 * @param {String} id - user id
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiGetUser (userId) {
  return httpClient().get(`${USERS}/${userId}`)
}

/**
 * Fetch all users from database.
 *
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiGetAllUsers () {
  return httpClient().get(USERS)
}

/**
 * Update a user from database.
 *
 * @param {Object} user - user object
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiUpdateUser (user) {
  return httpClient().update(`${USERS}/${user.id}`, user)
}

/**
 * Delete a user from database.
 *
 * @param {String} id - user id
 * @returns {Promise.<String, Error>}
 * Returns a promise object.
 * See {@link https://mdn.io/promise}
 */
export function apiDeleteUser (userId) {
  return httpClient().delete(`${USERS}/${userId}`)
}

