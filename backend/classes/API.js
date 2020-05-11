const axios = require('axios');

const CONFIG = {
  headers: {
    "X-Riot-Token": process.env.APIKEY
  }
}

const SUMMONER_BASE_URL = 'https://na1.api.riotgames.com/tft/';
const MATCH_BASE_URL = 'https://americas.api.riotgames.com/tft/';


class API {
  
  static async fetchSummonerByName(name) {
    let resp = await axios.get(
        `${SUMMONER_BASE_URL}summoner/v1/summoners/by-name/${name}`, 
        CONFIG
      );

    return resp.data;
  }

  static async fetchSummonerByPUUID(puuid) {
    let resp = await axios.get(
        `${SUMMONER_BASE_URL}summoner/v1/summoners/by-puuid/${puuid}`, 
        CONFIG
      );

    return resp.data;
  }

  static async fetchMatchIds(puuid) {
    const settings = {
      ...CONFIG, 
      params: { count: 10 }
    };
    let resp = await axios.get(
        `${MATCH_BASE_URL}match/v1/matches/by-puuid/${puuid}/ids`, 
        settings
      );
    return resp.data;
  }

  static async fetchMatchById(id) {
    let resp = await axios.get(
      `${MATCH_BASE_URL}match/v1/matches/${id}`,
      CONFIG
    )
    return resp.data;
  }
}

module.exports = API;