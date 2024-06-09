const axios = require('axios');

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const BASE_URL = 'https://na1.api.riotgames.com';

/**
 * Get match IDs by PUUID.
 * GET /tft/match/v1/matches/by-puuid/{puuid}/ids
 */
const getMatchIdsByPuuid = async (req, res) => {
  try {
    const { puuid } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/match/v1/matches/by-puuid/${puuid}/ids`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * Get match by ID.
 * GET /tft/match/v1/matches/{matchId}
 */
const getMatchById = async (req, res) => {
  try {
    const { matchId } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/match/v1/matches/${matchId}`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getMatchIdsByPuuid, getMatchById };
