'use strict'
const noun = require("./data/Noun").data;
const adjective = require("./data/Adjective").data;
const verb = require("./data/Verb").data;
const adverb = require("./data/Adverb").data;

//business logic for loading, unzipping the data
exports.load_or_unzip = function(callback) {
  callback({
    noun: noun,
    adjective: adjective,
    verb: verb,
    adverb: adverb,
  })
}

exports.unique = function(a) {
  return a.reduce(function(p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
};

exports.flatten = function(arr) {
  arr = arr || []
  return arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}
