const axios = require('axios');

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const BASE_URL = 'https://na1.api.riotgames.com';

const getStatus = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/tft/status/v1/platform-data`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getStatus };
