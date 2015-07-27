#!/usr/bin/env electron

var app = require('app')
var BrowserWindow = require('browser-window')
var path = require('path')

app.on('ready', function () {
  var mainWindow = new BrowserWindow({show: true})
  mainWindow.loadUrl('file://' + path.join(__dirname, 'index.html') + '?file=' + (process.argv[2] || ''))
})
