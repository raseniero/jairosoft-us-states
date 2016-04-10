var uniqueRandomArrayTest = require('unique-random-array');
var usStates = require('./states.json');
var usStatesArray = require('./states-array.json');

module.exports = {
   all: usStates,
   random: uniqueRandomArrayTest(usStatesArray)
};