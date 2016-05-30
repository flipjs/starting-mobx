import axios from 'axios'
import config from 'config'

function httpClient () {
  return axios.create({
    baseURL: config.apiUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default httpClient

