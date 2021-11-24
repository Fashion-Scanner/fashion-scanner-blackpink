const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://kpop.fashion-scanner.site:8000',
      changeOrigin: true,
    }),
  );
};
