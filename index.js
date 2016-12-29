'use strict'

var fs = require('fs')
var mustache = require('mustache')

function render (template, locals) {
  return mustache.render(template, locals)
}

function factory (options) {
  var template = fs.readFileSync(options.template).toString()

  var callback = render.bind(null, template)

  callback.accept = 'application/ld+json'

  return callback
}

module.exports = factory
