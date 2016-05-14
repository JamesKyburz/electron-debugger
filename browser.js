window.onload = function load () {
  var mainWindow = require('electron').remote.getCurrentWindow()
  mainWindow.openDevTools()
  var entry = require('querystring').parse(window.location.search.slice(1)).file || '.'
  require(process.cwd() + '/' + entry)
}
