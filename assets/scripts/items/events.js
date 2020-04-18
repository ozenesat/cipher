'use strict'
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

// Shows all the Lists of signed-in user.
const onShowItems = function (event) {
  event.preventDefault()
  api.showItems()
    .then(ui.showItemsSuccess)
    .catch(ui.failure)
}

// Creates the new list for signed-in user.
const onCreateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.failure,
      $('#create-item').trigger('reset'))
}

// Deletes the list of signed-in user.
const onDeleteItem = function (event) {
  event.preventDefault()
  api.deleteItem($(event.target).data('id'))
    .then(
      function () {
        api.showItems()
          .then(ui.deleteItemSuccess)
      })
    .catch(ui.failure)
}

// Loads the update item html into the related list's space at the show lists page.
const onUpdateItemButton = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  ui.showUpdateItemBar(id)
}

// Updates the list of signed-in user.
const onUpdateItem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateItem(id, data)
    .then(
      function () {
        api.showItems()
          .then(ui.updateItemSuccess)
      })
    // .then(ui.updateItemSuccess)
    .catch(ui.failure)
}

// handlebars
const addHandlers = () => {
  $('#all-items').on('click', onShowItems)
  $('#create-item').on('submit', onCreateItem)
  $('.content').on('click', '.btn-danger', onDeleteItem)
  $('.content').on('click', '.btn-success', onUpdateItemButton)
  $('.content').on('submit', '.item-update', onUpdateItem)
}

module.exports = {
  addHandlers
}
