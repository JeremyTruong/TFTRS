const express = require('express');
const leagueRoutes = require('./leagueRoutes');
const matchRoutes = require('./matchRoutes');
const statusRoutes = require('./statusRoutes');
const summonerRoutes = require('./summonerRoutes');

const router = express.Router();

router.use('/league', leagueRoutes);
router.use('/matches', matchRoutes);
router.use('/status', statusRoutes);
router.use('/summoner', summonerRoutes);

module.exports = router;
