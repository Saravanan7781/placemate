const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {
  addCompany,
  getAllCompanies,
} = require('../controllers/companyController');

router.post('/addCompany', addCompany);
router.get('/getAllCompanies', getAllCompanies);

module.exports = router;
