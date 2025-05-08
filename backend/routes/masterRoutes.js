const express = require('express');
const masterRouter = express.Router();
const {createDb} = require('../controllers/masterController')
masterRouter.route('/createDb').post(createDb);
module.exports = masterRouter;