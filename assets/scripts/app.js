'use strict'
const events = require('./events.js')

const showEncode = function () {
  $('#encode').removeClass('hide')
  $('#result').removeClass('hide')
  $('#decode').addClass('hide')
  $('#resbar').text('')
  $('#encode').trigger('reset')
}

const showDecode = function () {
  $('#decode').removeClass('hide')
  $('#result').removeClass('hide')
  $('#encode').addClass('hide')
  $('#resbar').text('')
  $('#decode').trigger('reset')
}

$(() => {
  $('#encode').on('submit', events.encode)
  $('#decode').on('submit', events.decode)
  $('#enc').on('click', showEncode)
  $('#dec').on('click', showDecode)

})
