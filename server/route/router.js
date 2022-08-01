const express = require('express');
const middleware = require('../middlewares');
const router = express.Router();

// FUNNEL REQUEST DATA THROUGH = require(IDDLEWARES
router.use(Object.values(middleware));

// ALL MIDDLEWARES RUN BEFORE CONTROLLERS
module.exports = router;
