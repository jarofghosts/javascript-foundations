var exercise = require('workshopper-exercise')()
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')


exercise = filecheck(exercise)
exercise = execute(exercise)
exercise = comparestdout(exercise)

module.exports = exercise
