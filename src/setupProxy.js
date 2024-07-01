// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/gateway-metadata',
    createProxyMiddleware({
      target: 'http://192.168.0.252/api/gateway-metadata',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/voltage-history',
    createProxyMiddleware({
      target: 'http://192.168.0.252/api/voltage-history',
      changeOrigin: true,
    })
  );
};
