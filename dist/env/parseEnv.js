"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;
var env = exports.env = function env(key) {
  var value = process.env[key];
  if (!value) {
    throw Error("No environment variable found for ".concat(key));
  }
  return value;
};