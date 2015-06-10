'use strict';

var debug = require('debug')('wce:index');
var koa = require('koa');
var router = require('koa-router');
var koaBody = require('koa-body')();
var requireDir = require('require-directory');
var controllers = requireDir(module, './controllers');
var middlewares = requireDir(module, './middlewares');

var app = module.exports = koa();
app.poweredBy = false;
app.proxy = true;

app.use(router(app));

app.post(
  '/exchange',
  koaBody,
  middlewares.AllowedOrigin,
  controllers.Exchange
);

var port = parseInt(process.env.PORT, 10) || 8880;
!module.parent && app.listen(port, function () {
  debug('server started on http://0.0.0.0:' + port);
});