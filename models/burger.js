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
  update: (burgerId, devoured, callback) => {
    orm.updateOne(burgerId, devoured, (result) => {
      callback(result)
    })
  }
}

module.exports = burger   