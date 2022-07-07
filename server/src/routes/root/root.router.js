const express = require('express');

const rootRouter = express.Router();

const {
  rootRoute
} = require('./root.controller');

rootRouter.get('/', rootRoute);

//module.exports = rootRouter;
