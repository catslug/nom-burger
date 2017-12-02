var orm = require('../config/orm.js')

var burger = {
  all: (callback) => {
    orm.selectAll((result) => {
      callback(result)
    })
  },
  create: (burgerName, callback) => {
    orm.insertOne(burgerName, (result) => {
      callback(result)
    })
  },
  update: (burgerName, devoured, callback) => {
    orm.update(burgerName, devoured, (result) => {
      callback(result)
    })
  }
}

module.exports = burger 