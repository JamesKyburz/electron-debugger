#!/usr/bin/env electron

var path = require('path')
var app

try { app = require('electron').app } catch (e) { app = require('app') }

app.on('ready', function () {
  var BrowserWindow
  try {
    BrowserWindow = require('electron').BrowserWindow
  } catch (e) {
    BrowserWindow = require('browser-window')
  }
  var mainWindow = new BrowserWindow({show: true})
  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html') + '?file=' + (process.argv[2] || ''))
})
