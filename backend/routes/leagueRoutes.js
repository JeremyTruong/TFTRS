const express = require('express');
const { leagueController } = require('../controllers/mainController');

const router = express.Router();


router.get('/challenger', leagueController.getChallengerLeague);
router.get('/grandmaster', leagueController.getGrandmasterLeague);
router.get('/master', leagueController.getMasterLeague);
router.get('/entries/by-summoner/:summonerId', leagueController.getLeagueEntriesBySummonerId);
router.get('/entries/:tier/:division', leagueController.getAllLeagueEntries);
router.get('/leagues/:leagueId', leagueController.getLeagueById);
router.get('/rated-ladders/:queue/top', leagueController.getTopRatedLadderByQueue);

module.exports = router;
