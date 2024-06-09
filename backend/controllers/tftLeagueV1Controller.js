const axios = require('axios');

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const BASE_URL = 'https://na1.api.riotgames.com';

/**
 * Get the challenger league.
 * GET /tft/league/v1/challenger
 */
const getChallengerLeague = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/tft/league/v1/challenger`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * Get the grandmaster league.
 * GET /tft/league/v1/grandmaster
 */
const getGrandmasterLeague = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/tft/league/v1/grandmaster`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * Get the master league.
 * GET /tft/league/v1/master
 */
const getMasterLeague = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/tft/league/v1/master`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * Get league entries by summoner ID.
 * GET /tft/league/v1/entries/by-summoner/{summonerId}
 */
const getLeagueEntriesBySummonerId = async (req, res) => {
  try {
    const { summonerId } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/league/v1/entries/by-summoner/${summonerId}`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * Get all league entries.
 * GET /tft/league/v1/entries/{tier}/{division}
 */
const getAllLeagueEntries = async (req, res) => {
  try {
    const { tier, division } = req.params;
    const { page } = req.query; 
    const response = await axios.get(`${BASE_URL}/tft/league/v1/entries/${tier}/${division}`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY },
      params: { page }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * Get league by ID.
 * GET /tft/league/v1/leagues/{leagueId}
 */
const getLeagueById = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/league/v1/leagues/${leagueId}`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
/**
 * Get top rated ladder for a given queue.
 * GET /tft/league/v1/rated-ladders/{queue}/top
 */
const getTopRatedLadderByQueue = async (req, res) => {
    try {
      const { queue } = req.params;
      const response = await axios.get(`${BASE_URL}/tft/league/v1/rated-ladders/${queue}/top`, {
        headers: { 'X-Riot-Token': RIOT_API_KEY }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
module.exports = {
  getChallengerLeague,
  getGrandmasterLeague,
  getMasterLeague,
  getLeagueEntriesBySummonerId,
  getAllLeagueEntries,
  getLeagueById,
  getTopRatedLadderByQueue
};
