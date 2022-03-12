const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
  infos: {
    version: '1.0.0',
    title: 'API REST',
    description: 'Base of an API REST',
  },
  baseDir: __dirname,
  filesPattern: ['../routers/**/*.js', '../errors/*.js', '../models/*.js'],
  swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE,
  exposeApiDocs: true,
  apiDocsPath: '/api/docs',
};

/**
 * Swagger middleware factory
 * @param {object} app Express app
 * @returns {object} Express JSDoc Swagger middleware that create web documentation
 */
module.exports = (app) => expressJSDocSwagger(app)(options);
