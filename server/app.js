const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema');

const app = express();

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

process.env.NODE_ENV = 'production';

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.prod.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
