const express = require('express');
const { sendEmail } = require('../controllers/Email');
const router = express.Router();

router.post('/send', sendEmail);

module.exports = router;