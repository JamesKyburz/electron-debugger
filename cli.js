#!/usr/bin/env electron

var electron = require('electron')
var path = require('path')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({show: true})
  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html') + '?file=' + (process.argv[2] || ''))
})
