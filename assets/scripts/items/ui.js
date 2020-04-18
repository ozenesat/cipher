'use strict'

const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')
const showItemsUpdateTemplate = require('../templates/item-updating.handlebars')

// Feedbacks user and store all lists and load related html.
const showItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Lists showing Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.list_items = data.list_items
  const showItemsHtml = showItemsTemplate({ list_items: data.list_items })
  $('.content').append(showItemsHtml)
}

// Feedbacks user and create a new list.
const createItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('List created Successfully!')
  $('#create-item').trigger('reset')
  $('#create-item').addClass('hide')
}

// Delete list, feedbacks user and shows all the remaining lists of signed-in user.
const deleteItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('List deleted Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.list_items = data.list_items
  const showItemsHtml = showItemsTemplate({ list_items: store.list_items })
  $('.content').append(showItemsHtml)
}

// Loads the update html into the related list are on show lists page.
const showUpdateItemBar = function (id) {
  const targetItem = store.list_items.find(item => item.id === id)
  const showItemsUpdateHtml = showItemsUpdateTemplate({ item: targetItem })
  $(`#item${id}`).html(showItemsUpdateHtml)
}

// Updates the related lists with list id and shows all lists of signed-in user.
const updateItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('List updated Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.list_items = data.list_items
  const showItemsHtml = showItemsTemplate({ list_items: data.list_items })
  $('.content').append(showItemsHtml)
}

// Feedbacks user about an error.
const failure = function (data) {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Uh! There is an error here! Please try again later :)')
}

module.exports = {
  showItemsSuccess,
  createItemSuccess,
  showUpdateItemBar,
  updateItemSuccess,
  deleteItemSuccess,
  failure
}
