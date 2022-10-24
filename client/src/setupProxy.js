const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/account',
    createProxyMiddleware({
      //target: "https://react-53bc.restdb.io/rest/account",
      target: 'http://localhost:3001/',
      changeOrigin: true,
    })
  );
};