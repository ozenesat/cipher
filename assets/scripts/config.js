'use strict'

let apiUrl
const apiUrls = {
  production: 'http://ozenesat.rapic.io/Lists/List',
  development: 'http://ozenesat.rapic.io/Lists/List'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
