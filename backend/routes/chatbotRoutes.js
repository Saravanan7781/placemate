const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { postQueryToGemini } = require('../controllers/chatbotController');

router.post('/', postQueryToGemini);


module.exports = router;