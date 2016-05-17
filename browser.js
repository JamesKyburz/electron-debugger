window.onload = function load () {
  var remote
  try {
    remote = require('' + 'electron').remote
  } catch (e) {
    remote = require('' + 'remote')
  }
  var mainWindow = remote.getCurrentWindow()
  mainWindow.openDevTools()
  var entry = require('querystring').parse(window.location.search.slice(1)).file || '.'
  require(process.cwd() + '/' + entry)
}
