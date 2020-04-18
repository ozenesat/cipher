'use strict'

const config = require('../config')
const store = require('../store.js')
var rapic = require("rapicio")

let rapicClient = rapic("ozenesat", "Boston2020");
rapicClient.login()
// let myData = await rapicClient.getData("Lists", "List")


// Shows all the lists
const showItems = function () {
  return rapicClient.getData("Lists", "list")
}

// Creates new list
const createItem = function (title, desc) {
  return rapicClient.postData("Lists", "List", {"Title":title, "Description":desc})
}

// Deletes the created List of signed-in user.
const deleteItem = function (id) {
  return $.ajax({
    url: config.apiUrl + '/list_items/' + id,
    method: 'delete',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Updates the created List of signed-in user.
const updateItem = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/list_items/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  showItems,
  createItem,
  deleteItem,
  updateItem
}
