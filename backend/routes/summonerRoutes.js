const express = require('express');
const { summonerController } = require('../controllers/mainController');

const router = express.Router();
router.get('/by-account/:accountId', summonerController.getSummonerByAccountId);
router.get('/by-puuid/:puuid', summonerController.getSummonerByPuuid);
router.get('/:summonerId', summonerController.getSummonerBySummonerId);
router.get('/me', summonerController.getSummonerByAccessToken);

module.exports = router;
