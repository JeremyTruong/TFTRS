const axios = require('axios');

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const BASE_URL = 'https://na1.api.riotgames.com';

/**
 * Get summoner by account ID.
 * GET /tft/summoner/v1/summoners/by-account/{encryptedAccountId}
 */
const getSummonerByAccountId = async (req, res) => {
  try {
    const { accountId } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/summoner/v1/summoners/by-account/${accountId}`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * Get summoner by PUUID.
 * GET /tft/summoner/v1/summoners/by-puuid/{encryptedPUUID}
 */
const getSummonerByPuuid = async (req, res) => {
  try {
    const { puuid } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/summoner/v1/summoners/by-puuid/${puuid}`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * Get summoner by access token.
 * GET /tft/summoner/v1/summoners/me
 */
const getSummonerByAccessToken = async (req, res) => {
    try {
      const accessToken = req.headers.authorization;
      const response = await axios.get(`${BASE_URL}/tft/summoner/v1/summoners/me`, {
        headers: { 
          'Authorization': accessToken,
          'X-Riot-Token': RIOT_API_KEY 
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
  

/**
 * Get summoner by summoner ID.
 * GET /tft/summoner/v1/summoners/{summonerId}
 */
const getSummonerBySummonerId = async (req, res) => {
  try {
    const { summonerId } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/summoner/v1/summoners/${summonerId}`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getSummonerByAccountId,
  getSummonerByAccessToken,
  getSummonerByPuuid,
  getSummonerBySummonerId
};
