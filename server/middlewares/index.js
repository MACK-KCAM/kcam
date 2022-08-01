const logger = require('./global/logger');
const checkMethod = require('./global/checkMethod');

// THESE MIDDLEWARES RUN BEFORE THE CONTROLLERS DO
  // THESE MIDDLEWARES ARE EXECUTED IN ORDER
module.exports = {
    checkMethod,
    logger
};
