window.onload = function load () {
  var mainWindow = require('remote').getCurrentWindow()
  mainWindow.openDevTools()
  var entry = require('querystring').parse(location.search.slice(1)).file || '.'
  require(process.cwd() + '/' + entry)
}
