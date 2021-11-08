import config from 'config'
export function assets(place) {
  return config.apiUrl + place
}
