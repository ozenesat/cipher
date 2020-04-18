'use strict'
const getFormFields = require('../../lib/get-form-fields')

const Cipher = {
  alphabet: 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  chipher: 'nopqrstuvwxyzabcdefghijklm NOPQRSTUVWXYZABCDEFGHIJKLM'.split(''),
  number: '0123456789!?.+-()*&`;:{[]}`,<>'.split(''),

// new chipher alphabet generator with a number `n`
  generator: function (n) {
    const m = (n*n) % 26
    console.log(m)
    for (let i = 0; i < (this.alphabet.length / 2) - 1; i++) {
      this.chipher[i] = this.alphabet[(i + m) % 26]
      this.chipher[i + 27] = this.alphabet[(27 + ((i + m) % 26))]
    }
    this.chipher[((this.alphabet.length + 1) / 2) - 1] = this.alphabet[((this.alphabet.length + 1) / 2) - 1]
    // return this.chipher
  },

// encoder only for one letter, which will use in encode for each letter of text
  encoder: function (x) {
    const index = this.alphabet.indexOf(x)
    const numdex = this.number.indexOf(x)
    if (index >= 0) {
    return this.chipher[index]
  } else if (index < 0 && numdex >= 0) {
    return this.number[(numdex+13)%30]
  } else {
    return x
  }
  },

// decoder only for one letter, which will use in decode for each letter of text
  decoder: function (x) {
    const index = this.chipher.indexOf(x)
    const numdex = this.number.indexOf(x)
    if (index >= 0) {
    return this.alphabet[index]
  } else if (index < 0 && numdex >= 0) {
    return this.number[(numdex+17)%30]
  } else {
    return x
  }
  },

// encodes the word with spliting into letters and using encoder
  encode: function (word) {
    const text = word.split('')
    const chip = []
    for (let i = 0; i < text.length; i++) {
      chip[i] = this.encoder(text[i])
    }
    return chip.join('')
  },

// decodes the chip with spliting into letters and using decoder
  decode: function (chip) {
    const text = chip.split('')
    const word = []
    for (let i = 0; i < text.length; i++) {
      word[i] = this.decoder(text[i])
    }
    return word.join('')
  }
}

const encode = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  let n = data.number
  let text = data.text
  Cipher.generator(n)
  let result = Cipher.encode(text)
  $('#resbar').text(result)
}
const decode = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  let n = data.number
  let text = data.text
  Cipher.generator(n)
  let result = Cipher.decode(text)
  $('#resbar').text(result)
}
module.exports = {
  encode,
  decode
}
