'use strict';

var debug = require('debug')('wce:controllers:Exchange');
var config = require('../config/config');
var request = require('koa-request');

function postOptions (context) {

  var code = context.request.body.code;
  var clientID = config.clientID;
  var clientSecret = config.clientSecret;
  return {
    'url': 'https://www.wunderlist.com/oauth/access_token',
    'body': {
      'code': code,
      'client_id': clientID,
      'client_secret': clientSecret
    },
    'json': true
  };
}

module.exports = function *Exchange () {

  var response = yield request.post(postOptions(this));
  debug(response.statusCode, response.body);
  this.status = response.statusCode;
  this.body = response.body;
};