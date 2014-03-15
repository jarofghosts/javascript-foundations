#!/usr/bin/env node

var workshopper = require('workshopper')
  , path = require('path')

workshopper({
    name: 'javascript-foundations'
  , title: 'learn the basics of javascript'
  , appDir: __dirname
  , exerciseDir: path.join(__dirname, 'exercises')
  , creditsFile: path.join(__dirname, 'credits.txt')
  , menuItems: []
})
