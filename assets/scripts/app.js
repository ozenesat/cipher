'use strict'
const events = require('./events.js')

const showEncode = function () {
  $('#encode').removeClass('hide')
  $('#result').removeClass('hide')
  $('#decode').addClass('hide')
  $('#resbar').text('')
  $('#encode').trigger('reset')
  $('#enc').addClass('btn-danger')
  $('#dec').removeClass('btn-danger')
}

const showDecode = function () {
  $('#decode').removeClass('hide')
  $('#result').removeClass('hide')
  $('#encode').addClass('hide')
  $('#resbar').text('')
  $('#decode').trigger('reset')
  $('#dec').addClass('btn-danger')
  $('#enc').removeClass('btn-danger')
}

$(() => {
  $('#encode').on('submit', events.encode)
  $('#decode').on('submit', events.decode)
  $('#enc').on('click', showEncode)
  $('#dec').on('click', showDecode)

})
