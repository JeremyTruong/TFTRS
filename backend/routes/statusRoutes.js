const express = require('express');
const { statusController } = require('../controllers/mainController');

const router = express.Router();
router.get('/', statusController.getStatus);

module.exports = router;
