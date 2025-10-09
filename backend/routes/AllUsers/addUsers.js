const express = require('express');
const router = express.Router();
const {
  addUserControler,
} = require('../../controllers/AllUsers/addUserController');

router.post('/addUsers', addUserControler);

module.exports = router;
