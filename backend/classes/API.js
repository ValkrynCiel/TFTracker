const axios = require('axios');
const expressError = require('../expressError');

const CONFIG = {
  headers: {
    "X-Riot-Token": process.env.APIKEY
  }
}

const SUMMONER_BASE_URL = 'https://na1.api.riotgames.com/tft/';
const RANKED_BASE_URL = 'https://na1.api.riotgames.com/tft/';
const MATCH_BASE_URL = 'https://americas.api.riotgames.com/tft/';


class API {
  
  static async fetchSummonerByName(name) {
    try {
      let encoded = encodeURIComponent(name)
      let resp = await axios.get(
          `${SUMMONER_BASE_URL}summoner/v1/summoners/by-name/${encoded}`, 
          CONFIG
        );
  
      return resp.data;
    } catch (e) {
      throw e
    }
  }

  static async fetchSummonerByPUUID(puuid) {
    let resp = await axios.get(
        `${SUMMONER_BASE_URL}summoner/v1/summoners/by-puuid/${puuid}`, 
        CONFIG
      );

    return resp.data;
  }

  static async fetchRankedData(summonerId) {
    let resp = await axios.get(
      `${RANKED_BASE_URL}league/v1/entries/by-summoner/${summonerId}`,
      CONFIG
    );
    // returns an array
    return resp.data[0];
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