const express = require('express');
const { matchController } = require('../controllers/mainController');

const router = express.Router();
router.get('/by-puuid/:puuid/ids', matchController.getMatchIdsByPuuid);
router.get('/:matchId', matchController.getMatchById);

module.exports = router;
